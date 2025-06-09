<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Model;

class ProductCategoryBranchMapping extends Model
{
    protected $fillable = [
        'cat_code',
        'bra_code',
        'active',
        'created_by_emp',
        'updated_by_emp'
    ];

    protected $casts = [
        'cat_code' => 'string',
        'bra_code' => 'string',
        'active' => 'boolean',
        'created_by_emp' => 'string',
        'updated_by_emp' => 'string'
    ];
}
