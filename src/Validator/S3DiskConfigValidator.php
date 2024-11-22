<?php

namespace FoF\S3Assets\Validator;

use Flarum\Foundation\AbstractValidator;

class S3DiskConfigValidator extends AbstractValidator
{
    protected $rules = [
        'driver' => ['required', 'string', 'in:s3'],
        'key' => ['required', 'string'],
        'secret' => ['required', 'string'],
        'region' => ['required', 'string'],
        'bucket' => ['required', 'string'],
        'url' => ['url'],
        //'endpoint' => ['url'],
        'use_path_style_endpoint' => ['required', 'bool'],
        //'options.ACL' => ['string'],
        'set_by_environment' => ['required', 'bool'],
    ];
}
