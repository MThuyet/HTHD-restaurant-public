<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use App\Models\Product\IngredientCategory;
use App\Models\Employee\Employee;

class Ingredient extends Model
{
    use SoftDeletes;

    protected $table = 'ingredients';
    protected $primaryKey = 'ing_code';
    public $incrementing = false;

    protected $fillable = [
        'ing_code',
        'ing_name',
        'description',
        'unit',
        'price',
        'ing_cat_code',
        'created_by_emp',
        'updated_by_emp'
    ];

    protected $casts = [
        'ing_code' => 'string',
        'ing_name' => 'string',
        'description' => 'string',
        'unit' => 'string',
        'price' => 'decimal:2',
        'ing_cat_code' => 'string',
        'created_by_emp' => 'string',
        'updated_by_emp' => 'string'
    ];

    public function ingredientCategory()
    {
        return $this->belongsTo(IngredientCategory::class, 'ing_cat_code', 'ing_cat_code');
    }

    public function createdBy()
    {
        return $this->belongsTo(Employee::class, 'created_by_emp', 'emp_code');
    }

    public function updatedBy()
    {
        return $this->belongsTo(Employee::class, 'updated_by_emp', 'emp_code');
    }
}
