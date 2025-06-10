<?php

namespace App\Models\Employee;

use Illuminate\Database\Eloquent\Model;

use App\Models\Branch\Branch;
use App\Models\Employee\Employee;

class EmployeeBranchMapping extends Model
{
    protected $table = 'employee_branch_mappings';

    protected $fillable = [
        'bra_code',
        'emp_code',
        'is_main_branch',
        'created_by_emp',
        'updated_by_emp',
    ];

    protected $casts = [
        'bra_code' => 'string',
        'emp_code' => 'string',
        'is_main_branch' => 'boolean',
        'created_by_emp' => 'string',
        'updated_by_emp' => 'string',
    ];

    public function branch()
    {
        return $this->belongsTo(Branch::class, 'bra_code');
    }
    
    public function employee()
    {
        return $this->belongsTo(Employee::class, 'emp_code');
    }

    public function createdBy()
    {
        return $this->belongsTo(Employee::class, 'created_by_emp');
    }

    public function updatedBy()
    {
        return $this->belongsTo(Employee::class, 'updated_by_emp');
    }
}
