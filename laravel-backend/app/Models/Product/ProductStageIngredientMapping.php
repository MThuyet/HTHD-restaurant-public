<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Model;

class ProductStageIngredientMapping extends Model
{
    protected $fillable = [
        'pro_code',
        'pro_sta_code',
        'ing_code',
        'description',
        'is_visible_to_customize',
        'quantity',
        'min_quantity',
        'max_quantity',
        'created_by_emp',
        'updated_by_emp'
    ];

    protected $casts = [
        'pro_code' => 'string',
        'pro_sta_code' => 'string',
        'ing_code' => 'string',
        'description' => 'string',
        'is_visible_to_customize' => 'boolean',
        'quantity' => 'decimal:2',
        'min_quantity' => 'decimal:2',
        'max_quantity' => 'decimal:2',
        'created_by_emp' => 'string',
        'updated_by_emp' => 'string'
    ];
}
