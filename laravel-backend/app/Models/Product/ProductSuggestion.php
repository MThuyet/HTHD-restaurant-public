<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Model;

use App\Models\Employee\Employee;

class ProductSuggestion extends Model
{
    protected $fillable = [
        'pro_code',
        'paired_pro_code',
        'created_by_emp',
        'updated_by_emp',
    ];

    protected $casts = [
        'pro_code' => 'string',
        'paired_pro_code' => 'string',
        'created_by_emp' => 'string',
        'updated_by_emp' => 'string',
    ];

    public function createdBy()
    {
        return $this->belongsTo(Employee::class, 'suggested_by_emp', 'emp_code');
    }

    public function updatedBy()
    {
        return $this->belongsTo(Employee::class, 'suggested_by_emp', 'emp_code');
    }
}
