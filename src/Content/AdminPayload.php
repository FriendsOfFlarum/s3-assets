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

use Flarum\Foundation\Config;
use Flarum\Frontend\Document;
use Illuminate\Support\Arr;

class AdminPayload
{
    public function __construct(
        protected Config $config
    ) {
    }
    
    public function __invoke(Document $document)
    {
        $document->payload['s3SetByEnv'] = Arr::get($this->config->offsetGet('filesystems'), 'disks.s3.set_by_environment');
    }
}
