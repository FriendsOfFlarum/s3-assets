<?php

/*
 * This file is part of fof/s3-assets.
 *
 * Copyright (c) FriendsOfFlarum
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace FoF\S3Assets\Frontend;

use Flarum\Frontend\Compiler\VersionerInterface;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Support\Arr;

class Versioner implements VersionerInterface
{
    const REVISION_KEY = 's3assets.revision';

    public function __construct(
        protected SettingsRepositoryInterface $settings
    ) {
    }

    public function putRevision(string $file, ?string $revision): void
    {
        $manifest = $this->getManifest();

        if ($revision) {
            $manifest[$file] = $revision;
        } else {
            unset($manifest[$file]);
        }

        $this->settings->set(self::REVISION_KEY, json_encode($manifest));
    }

    public function getRevision(string $file): ?string
    {
        return Arr::get($this->getManifest(), $file);
    }

    private function getManifest(): array
    {
        return json_decode($this->settings->get(self::REVISION_KEY, '{}'), true);
    }
}
