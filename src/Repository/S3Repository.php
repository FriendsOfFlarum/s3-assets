<?php

/*
 * This file is part of fof/s3-assets.
 *
 * Copyright (c) FriendsOfFlarum
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace FoF\S3Assets\Repository;

use FoF\S3Assets\Driver\Config as DriverConfig;
use Illuminate\Support\Arr;
use Psr\Log\LoggerInterface;

class S3Repository
{
    public function __construct(
        protected LoggerInterface $logger,
        protected DriverConfig $config
    ) {
    }

    public function cdnHost(): string
    {
        return Arr::get($this->config->config(), 'url');
    }
}
