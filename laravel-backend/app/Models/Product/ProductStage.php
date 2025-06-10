<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Model;

use App\Models\Employee\Employee;

class ProductStage extends Model
{
    protected $fillable = [
        'pro_sta_code',
        'pro_sta_name',
        'kit_code',
        'created_by_emp',
        'updated_by_emp'
    ];

    protected $casts = [
        'pro_sta_code' => 'string',
        'pro_sta_name' => 'string',
        'kit_code' => 'string',
        'created_by_emp' => 'string',
        'updated_by_emp' => 'string'
    ];

    public function createBy()
    {
        return $this->belongsTo(Employee::class, 'created_by_emp', 'emp_code');
    }

    public function updateBy()
    {
        return $this->belongsTo(Employee::class, 'updated_by_emp', 'emp_code');
    }
}
