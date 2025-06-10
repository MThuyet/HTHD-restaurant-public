<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use App\Models\Employee\Employee;

class IngredientCategory extends Model
{
    use SoftDeletes;

    protected $table = 'ingredient_categories';
    protected $primaryKey = 'ing_cat_code';
    public $incrementing = false;

    protected $fillable = [
        'ing_cat_code',
        'ing_cat_name',
        'description',
        'created_by_emp',
        'updated_by_emp'
    ];

    protected $casts = [
        'ing_cat_code' => 'string',
        'ing_cat_name' => 'string',
        'description' => 'string',
        'created_by_emp' => 'string',
        'updated_by_emp' => 'string'
    ];

    public function createdBy()
    {
        return $this->belongsTo(Employee::class, 'created_by_emp', 'emp_code');
    }

    public function updatedBy()
    {
        return $this->belongsTo(Employee::class, 'updated_by_emp', 'emp_code');
    }
}
