<?php

namespace App\Enums\Product;

enum ProductFlavorProfileMappingLevel: string
{
    case NONE = [
        'value' => 'NONE',
        'numeric_value' => 0.0,
    ];
    case LOW = [
        'value' => 'LOW',
        'numeric_value' => 0.5,
    ];
    case MEDIUM = [
        'value' => 'MEDIUM',
        'numeric_value' => 1.0,
    ];
    case HIGH = [
        'value' => 'HIGH',
        'numeric_value' => 1.5,
    ];
    case HIGHEST = [
        'value' => 'HIGHEST',
        'numeric_value' => 2.0,
    ];

    case CUSTOM = [
        'value' => 'CUSTOM',
        'min_value' => 0.0,
        'max_value' => 2.0,
    ];

}