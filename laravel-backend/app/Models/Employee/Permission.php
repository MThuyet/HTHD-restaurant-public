<?php

namespace App\Models\Employee;

use Illuminate\Database\Eloquent\Model;
use App\Models\Employee\Employee;

class Permission extends Model
{
    protected $fillable = [
        'name',
        'description',
        'route'
    ];

    public function employees()
    {
        return $this->belongsToMany(Employee::class, 'employee_permission_mappings', 'permission_id', 'emp_code')
            ->withTimestamps();
    }
}
