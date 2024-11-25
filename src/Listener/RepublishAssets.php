<?php

namespace FoF\S3Assets\Listener;

use Flarum\Foundation\Event\ClearingCache;
use FoF\S3Assets\Repository\S3Repository;

class RepublishAssets
{
    public function __construct(
        protected S3Repository $s3
    ) {}

    public function handle(ClearingCache $event)
    {
        $this->s3->publishAssets();
    }
}
