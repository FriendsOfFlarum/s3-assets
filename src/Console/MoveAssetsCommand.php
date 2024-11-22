<?php

/*
 * This file is part of fof/s3-assets.
 *
 * Copyright (c) FriendsOfFlarum
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace FoF\S3Assets\Console;

use Flarum\Console\AbstractCommand;
use Flarum\Foundation\Console\AssetsPublishCommand;
use Flarum\Foundation\Paths;
use Illuminate\Contracts\Container\Container;
use Illuminate\Contracts\Filesystem\Cloud;
use Illuminate\Contracts\Filesystem\Factory;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Arr;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Output\ConsoleOutput;

class MoveAssetsCommand extends AbstractCommand
{
    /**
     * @var Cloud
     */
    protected $avatarDisk;

    public function __construct(
        protected Container $container,
        protected Factory $factory,
        protected Paths $paths,
        protected AssetsPublishCommand $publishCommand
    )
    {
        $this->avatarDisk = $factory->disk('flarum-avatars');

        parent::__construct();
    }

    /**
     * {@inheritdoc}
     */
    protected function configure()
    {
        $this
            ->setName('fof:s3:move')
            ->setDescription('Move avatars, etc from local filesystem to S3 disks, then republish remaning assets');
    }

    /**
     * {@inheritdoc}
     */
    protected function fire()
    {
        /** @var Filesystem $localFilesystem */
        $localFilesystem = $this->container->make('files');

        // Move avatars
        $this->info('Moving avatars...');
        $this->moveFilesToDisk($localFilesystem, $this->paths->public.'/assets/avatars', $this->avatarDisk);

        // Move profile covers
        if (Arr::has($this->getFlarumDisks(), 'sycho-profile-cover')) {
            $this->info('Moving profile covers...');
            $coversDisk = $this->factory->disk('sycho-profile-cover');
            $this->moveFilesToDisk($localFilesystem, $this->paths->public.'/assets/covers', $coversDisk);
        }

        $this->publishCommand->run(
            new ArrayInput([]),
            new ConsoleOutput()
        );
    }

    /**
     * Get the registered disks.
     *
     * @return array
     */
    protected function getFlarumDisks(): array
    {
        return resolve('flarum.filesystem.disks');
    }

    protected function moveFilesToDisk(Filesystem $localFilesystem, string $localPath, Cloud $disk): void
    {
        foreach ($localFilesystem->allFiles($localPath) as $file) {
            /** @var \Symfony\Component\Finder\SplFileInfo $file */
            $this->info('Moving '.$file->getPathname());
            $written = $disk->put($file->getRelativePathname(), $file->getContents());

            if ($written) {
                //$localFilesystem->delete($file);
            } else {
                throw new \Exception('File did not move');
            }
        }
    }
}
