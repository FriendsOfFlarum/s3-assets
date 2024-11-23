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

use Psr\Log\LoggerInterface;

class S3Repository
{
    public function __construct(
        protected LoggerInterface $logger
    ) {
    }
}
