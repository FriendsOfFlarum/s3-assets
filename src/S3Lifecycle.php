<?php

namespace FoF\S3Assets;

use Flarum\Extend\LifecycleInterface;
use Illuminate\Contracts\Container\Container;
use Flarum\Extension\Extension;
use FoF\S3Assets\Repository\S3Repository;

class S3Lifecycle implements LifecycleInterface
{
    public function onEnable(Container $container, Extension $extension): void
    {
        /** @var bool $configured */
        $configured = $container->make(ConditionalCheck::class)->validConfig();

        if ($configured) {
            /** @var S3Repository $s3 */
            $s3 = $container->make(S3Repository::class);
            $s3->publishAssets();
        }
    }

    public function onDisable(Container $container, Extension $extension): void
    {
        /** @var S3Repository $s3 */
        $s3 = $container->make(S3Repository::class);
        $s3->publishAssets();
    }

    public function extend(Container $container, Extension $extension): void
    {
        // Not used here.
    }
}
