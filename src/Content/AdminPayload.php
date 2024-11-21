<?php

/*
 * This file is part of fof/s3-assets.
 *
 * Copyright (c) FriendsOfFlarum
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace FoF\S3Assets\Content;

use Flarum\Frontend\Document;
use Illuminate\Support\Arr;

class AdminPayload
{
    public function __invoke(Document $document)
    {
        $config = resolve('config');
        $document->payload['s3SetByEnv'] = Arr::get($config->offsetGet('filesystems'), 'disks.s3.set_by_environment');
    }
}
