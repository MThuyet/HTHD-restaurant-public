<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Model;

use App\Models\Product\Ingredient;
use App\Models\Product\Nutrition;
use App\Models\Employee\Employee;

class IngredientNutritionMapping extends Model
{
    protected $fillable = [
        'ing_code',
        'ing_nut_code',
        'ing_nut_value',
        'created_by_emp',
        'updated_by_emp'
    ];

    protected $casts = [
        'ing_code' => 'string',
        'ing_nut_code' => 'string',
        'ing_nut_value' => 'decimal:2',
        'created_by_emp' => 'string',
        'updated_by_emp' => 'string'
    ];
}
