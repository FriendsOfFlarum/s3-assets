<?php

/*
 * This file is part of fof/s3-assets.
 *
 * Copyright (c) FriendsOfFlarum
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace FoF\S3Assets\Driver;

use Flarum\Foundation\ValidationException;
use Flarum\Settings\SettingsRepositoryInterface;
use FoF\S3Assets\Validator\S3DiskConfigValidator;
use Illuminate\Validation\ValidationException as IlluminateValidationException;
use Psr\Log\LoggerInterface;

class Config
{
    public function __construct(
        protected SettingsRepositoryInterface $settings,
        protected S3DiskConfigValidator $validator,
        protected LoggerInterface $logger,
    ) {}

    public function config(): array
    {
        $bucket = env('AWS_BUCKET', $this->settings->get('fof-upload.awsS3Bucket'));
        $region = env('AWS_DEFAULT_REGION', $this->settings->get('fof-upload.awsS3Region'));
        $cdnUrl = env('AWS_URL', $this->settings->get('fof-upload.cdnUrl'));
        $pathStyle = (bool) env('AWS_PATH_STYLE_ENDPOINT', $this->settings->get('fof-upload.awsS3UsePathStyleEndpoint'));

        if (!$cdnUrl) {
            $cdnUrl = sprintf('https://%s.s3.%s.amazonaws.com', $bucket, $region);
            $pathStyle = false;
        }

        $setByEnv = (env('AWS_ACCESS_KEY_ID') || env('AWS_SECRET_ACCESS_KEY') || env('AWS_ENDPOINT'));

        $config = [
            'driver'                  => 's3',
            'key'                     => env('AWS_ACCESS_KEY_ID', $this->settings->get('fof-upload.awsS3Key')),
            'secret'                  => env('AWS_SECRET_ACCESS_KEY', $this->settings->get('fof-upload.awsS3Secret')),
            'region'                  => $region,
            'bucket'                  => $bucket,
            'url'                     => $cdnUrl,
            'endpoint'                => env('AWS_ENDPOINT', $this->settings->get('fof-upload.awsS3Endpoint')),
            'use_path_style_endpoint' => $pathStyle,
            'set_by_environment'      => $setByEnv,
            'options'                 => [
                'ACL' => env('AWS_ACL', $this->settings->get('fof-upload.awsS3ACL')),
            ],
        ];

        try {
            $this->validator->assertValid($config);
        } catch (IlluminateValidationException $e) {
            $this->logger->error('[fof-s3-assets] Invalid S3 disk configuration', ['errors' => $e->errors()]);
            return [];
        }

        return $config;
    }
}
