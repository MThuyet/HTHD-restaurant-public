<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Model;

class ProductCategoryMapping extends Model
{
    protected $fillable = [
        'pro_code',
        'cat_code',
        'main_mappings',
        'created_by_emp',
        'updated_by_emp'
    ];

    protected $casts = [
        'pro_code' => 'string',
        'cat_code' => 'string',
        'main_mappings' => 'boolean',
        'created_by_emp' => 'string',
        'updated_by_emp' => 'string'
    ];
}
