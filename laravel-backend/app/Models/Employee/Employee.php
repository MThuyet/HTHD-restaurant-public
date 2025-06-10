<?php

namespace App\Models\Employee;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use App\Models\Employee\Department;
use App\Models\Employee\Position;
use App\Models\Branch\Branch;
use App\Models\Kitchen\Kitchen;

class Employee extends Model
{
    use SoftDeletes;

    protected $table = 'employees';

    protected $fillable = [
        'emp_code',
        'full_name',
        'gender',
        'birthdate',
        'phone_number',
        'address',
        'identifier',
        'username',
        'password',
        'old_password',
        'old_change_password',
        'bra_code',
        'pos_code',
        'dep_code',
        'kit_code',
    ];

    protected $casts = [
        'emp_code' => 'string',
        'full_name' => 'string',
        'gender' => 'boolean',
        'birthdate' => 'date',
        'phone_number' => 'string',
        'address' => 'string',
        'identifier' => 'string',
        'username' => 'string',
        'password' => 'string',
        'old_password' => 'string',
        'old_change_password' => 'datetime',
        'bra_code' => 'string',
        'pos_code' => 'string',
        'dep_code' => 'string',
        'kit_code' => 'string',
    ];

    public function branch()
    {
        return $this->belongsTo(Branch::class, 'bra_code');
    }

    public function position()
    {
        return $this->belongsTo(Position::class, 'pos_code');
    }

    public function department()
    {
        return $this->belongsTo(Department::class, 'dep_code');
    }
    
    public function kitchen()
    {
        return $this->belongsTo(Kitchen::class, 'kit_code');
    }
}
