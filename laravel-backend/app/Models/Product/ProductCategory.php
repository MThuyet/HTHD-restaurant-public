<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use App\Models\Product\Product;
use App\Models\Employee\Employee;

class ProductCategory extends Model
{
    protected $table = 'product_categories';
    protected $primaryKey = 'cat_code';
    public $incrementing = false;

    protected $fillable = [
        'cat_code',
        'cat_name',
        'description',
        'created_by_emp',
        'updated_by_emp'
    ];

    protected $casts = [
        'cat_code' => 'string',
        'cat_name' => 'string',
        'description' => 'string',
        'created_by_emp' => 'string',
        'updated_by_emp' => 'string'
    ];

    public function products()
    {
        return $this->hasMany(Product::class, 'cat_code', 'cat_code');
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