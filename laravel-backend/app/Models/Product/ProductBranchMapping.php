<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Model;

class ProductBranchMapping extends Model
{
    protected $fillable = [
        'pro_code',
        'bra_code',
        'active',
        'created_by_emp',
        'updated_by_emp'
    ];

    protected $casts = [
        'pro_code' => 'string',
        'bra_code' => 'string',
        'active' => 'boolean',
        'created_by_emp' => 'string',
        'updated_by_emp' => 'string'
    ];
}
