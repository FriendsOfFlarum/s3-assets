<?php

/*
 * This file is part of blomstra/s3-assets.
 *
 * Copyright (c) FriendsOfFlarum
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace FoF\S3Assets\Extend;

use Flarum\Extend\ExtenderInterface;
use Flarum\Extend\Filesystem;
use Flarum\Extension\Extension;
use Flarum\Foundation\Paths;
use Flarum\Http\UrlGenerator;
use FoF\S3Assets\Driver\Config;
use FoF\S3Assets\Driver\S3Driver;
use Illuminate\Contracts\Container\Container;

class Drivers implements ExtenderInterface
{
    public function extend(Container $container, Extension $extension = null)
    {
        /** @var Config $config */
        $config = $container->make(Config::class);

        if (!$config->valid()) {
            return;
        }

        (new Filesystem())
            ->driver('s3', S3Driver::class)
            ->driver('local', S3Driver::class)
            ->disk('flarum-assets', fn (Paths $paths, UrlGenerator $url) => [
                'root' => '/assets',
                'url'  => $config->config()['url'].'/assets',
            ])
            ->disk('flarum-avatars', fn (Paths $paths, UrlGenerator $url) => [
                'root' => '/avatars',
                'url'  => $config->config()['url'].'/avatars',
            ])
            ->extend($container, $extension);
    }
}
