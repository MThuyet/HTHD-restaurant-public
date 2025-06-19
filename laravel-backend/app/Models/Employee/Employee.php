<?php

namespace App\Models\Employee;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;

use App\Models\Employee\Department;
use App\Models\Employee\Position;
use App\Models\Branch\Branch;
use App\Models\Kitchen\Kitchen;

class Employee extends Authenticatable
{
    use SoftDeletes, HasApiTokens;

    protected $table = 'employees';

    protected $primaryKey = 'emp_code';

    public $incrementing = false;

    protected $keyType = 'string';

    protected $fillable = [
        'emp_code',
        'username',
        'password',
        'full_name',
        'email',
        'phone',
        'address',
        'department_id',
        'role_id',
        'status',
        'emp_code',
        'gender',
        'birthdate',
        'phone_number',
        'identifier',
        'old_password',
        'old_change_password',
        'bra_code',
        'pos_code',
        'dep_code',
        'kit_code',
    ];

    protected $hidden = [
        'password',
        'old_password',
        'old_change_password',
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
        return $this->belongsTo(Branch::class, 'bra_code', 'bra_code');
    }

    public function position()
    {
        return $this->belongsTo(Position::class, 'pos_code', 'pos_code');
    }

    public function department()
    {
        return $this->belongsTo(Department::class, 'dep_code', 'dep_code');
    }

    public function kitchen()
    {
        return $this->belongsTo(Kitchen::class, 'kit_code', 'kit_code');
    }
}
