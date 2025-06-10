<?php

namespace App\Models\Customer;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use App\Models\Order\Order;
use App\Models\Employee\Employee;

class Customer extends Model
{
    use SoftDeletes;

    protected $table = 'customers';
    protected $primaryKey = 'phone_number';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'phone_number',
        'full_name',
        'created_by_emp',
        'updated_by_emp',
    ];

    protected $casts = [
        'phone_number' => 'string',
        'full_name' => 'string',
        'created_by_emp' => 'string',
        'updated_by_emp' => 'string',
    ];

    public function orders()
    {
        return $this->hasMany(Order::class);
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
