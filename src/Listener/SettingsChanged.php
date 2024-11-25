<?php

namespace FoF\S3Assets\Listener;

use Flarum\Settings\Event\Saving;
use FoF\S3Assets\ConditionalCheck;
use Illuminate\Contracts\Cache\Store;

class SettingsChanged
{
    public function __construct(
        protected Store $cache
    ) {}

    public function handle(Saving $event)
    {
        // TODO: only clear the config cache if any of the S3 settings have changed.
        // We should check for both this extension's settings and the fof-upload
        // settings, as we might be using the S3 config from there.
        $this->cache->forget(ConditionalCheck::CACHE_KEY);
    }
}
