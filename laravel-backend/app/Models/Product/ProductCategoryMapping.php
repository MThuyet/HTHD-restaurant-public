<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Model;

use App\Models\Employee\Employee;
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


    public function createdBy()
    {
        return $this->belongsTo(Employee::class, 'created_by_emp', 'emp_code');
    }
    
    public function updatedBy()
    {
        return $this->belongsTo(Employee::class, 'updated_by_emp', 'emp_code');
    }
}
