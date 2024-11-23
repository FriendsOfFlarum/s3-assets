<?php

/*
 * This file is part of fof/s3-assets.
 *
 * Copyright (c) FriendsOfFlarum
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace FoF\S3Assets;

use Flarum\Extend;

return [
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less')
        ->content(Content\AdminPayload::class),

    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Settings())
        ->default('fof-s3-assets.share_s3_config_with_fof_upload', false),

    (new Extend\ServiceProvider())
        ->register(Provider\S3DiskProvider::class),

    (new Extend\Console())
        ->command(Console\CopyAssetsCommand::class),

    (new Extend\Filesystem())
        ->driver('s3', Driver\S3Driver::class)
        ->driver('local', Driver\S3Driver::class),
];
