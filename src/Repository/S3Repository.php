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

    /**
     * Get a list of AWS regions available for S3.
     *
     * @return array
     */
    public function getAwsRegions(): array
    {
        // List of AWS regions supporting S3
        // Last verified: 22nd November 2024
        return [
            ['value' => 'us-east-2', 'label' => 'US East (Ohio)'],
            ['value' => 'us-east-1', 'label' => 'US East (N. Virginia)'],
            ['value' => 'us-west-1', 'label' => 'US West (N. California)'],
            ['value' => 'us-west-2', 'label' => 'US West (Oregon)'],
            ['value' => 'af-south-1', 'label' => 'Africa (Cape Town)'],
            ['value' => 'ap-east-1', 'label' => 'Asia Pacific (Hong Kong)'],
            ['value' => 'ap-south-2', 'label' => 'Asia Pacific (Hyderabad)'],
            ['value' => 'ap-southeast-3', 'label' => 'Asia Pacific (Jakarta)'],
            ['value' => 'ap-southeast-5', 'label' => 'Asia Pacific (Malaysia)'],
            ['value' => 'ap-southeast-4', 'label' => 'Asia Pacific (Melbourne)'],
            ['value' => 'ap-south-1', 'label' => 'Asia Pacific (Mumbai)'],
            ['value' => 'ap-northeast-3', 'label' => 'Asia Pacific (Osaka)'],
            ['value' => 'ap-northeast-2', 'label' => 'Asia Pacific (Seoul)'],
            ['value' => 'ap-southeast-1', 'label' => 'Asia Pacific (Singapore)'],
            ['value' => 'ap-southeast-2', 'label' => 'Asia Pacific (Sydney)'],
            ['value' => 'ap-northeast-1', 'label' => 'Asia Pacific (Tokyo)'],
            ['value' => 'ca-central-1', 'label' => 'Canada (Central)'],
            ['value' => 'ca-west-1', 'label' => 'Canada West (Calgary)'],
            ['value' => 'eu-central-1', 'label' => 'Europe (Frankfurt)'],
            ['value' => 'eu-west-1', 'label' => 'Europe (Ireland)'],
            ['value' => 'eu-west-2', 'label' => 'Europe (London)'],
            ['value' => 'eu-south-1', 'label' => 'Europe (Milan)'],
            ['value' => 'eu-west-3', 'label' => 'Europe (Paris)'],
            ['value' => 'eu-south-2', 'label' => 'Europe (Spain)'],
            ['value' => 'eu-north-1', 'label' => 'Europe (Stockholm)'],
            ['value' => 'eu-central-2', 'label' => 'Europe (Zurich)'],
            ['value' => 'il-central-1', 'label' => 'Israel (Tel Aviv)'],
            ['value' => 'me-south-1', 'label' => 'Middle East (Bahrain)'],
            ['value' => 'me-central-1', 'label' => 'Middle East (UAE)'],
            ['value' => 'sa-east-1', 'label' => 'South America (São Paulo)'],
            ['value' => 'us-gov-east-1', 'label' => 'AWS GovCloud (US-East)'],
            ['value' => 'us-gov-west-1', 'label' => 'AWS GovCloud (US-West)'],
        ];
    }
}
