<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Model;

use App\Models\Employee\Employee;

class ProductCost extends Model
{
    protected $fillable = [
        'prod_code',
        'calculate_at',
        'total_cost',
        'margin_percent',
        'final_price',
        'created_by_emp',
        'updated_by_emp'
    ];

    protected $casts = [
        'prod_code' => 'string',
        'calculate_at' => 'datetime',
        'total_cost' => 'decimal:2',
        'margin_percent' => 'decimal:2',
        'final_price' => 'decimal:2',
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
