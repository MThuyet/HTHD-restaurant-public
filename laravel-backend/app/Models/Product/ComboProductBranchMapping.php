<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Model;

use App\Models\Employee\Employee;

class ComboProductBranchMapping extends Model
{
    protected $fillable = [
        'com_pro_code',
        'bra_code',
        'active',
        'created_by_emp',
        'updated_by_emp'
    ];

    protected $casts = [
        'com_pro_code' => 'string',
        'bra_code' => 'string',
        'active' => 'boolean',
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
