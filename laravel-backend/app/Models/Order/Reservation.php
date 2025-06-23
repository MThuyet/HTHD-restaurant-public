<?php

namespace App\Models\Order;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use App\Models\Customer\Customer;
use App\Models\Branch\Branch;
use App\Models\Branch\Table;
use App\Models\Employee\Employee;
use App\Enums\Order\ReservationStatus;
use App\Enums\Order\ReservationType;

class Reservation extends Model
{
    use SoftDeletes;

    protected $table = 'reservations';
    protected $primaryKey = 'res_code';
    public $incrementing = false;

    protected $fillable = [
        'res_code',
        'res_type',
        'status',
        'booking_code',
        'people_numbers',
        'res_date_time',
        'note',
        'created_booking_code_at',
        'completed_at',
        'canceled_at',
        'canceled_reason',
        'active',
        'cus_phone_number',
        'bra_code',
        'tab_code',
        'created_booking_code_by_emp',
        'canceled_by_emp'
    ];

    protected $casts = [
        'res_code' => 'string',
        'res_type' => ReservationType::class,
        'status' => ReservationStatus::class,
        'booking_code' => 'string',
        'people_numbers' => 'integer',
        'res_date_time' => 'datetime',
        'created_booking_code_at' => 'datetime',
        'completed_at' => 'datetime',
        'canceled_at' => 'datetime',
        'note' => 'string',
        'canceled_reason' => 'string',
        'active' => 'boolean',
        'cus_phone_number' => 'string',
        'bra_code' => 'string',
        'tab_code' => 'string',
        'created_booking_code_by_emp' => 'string',
        'canceled_by_emp' => 'string'
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'cus_phone_number', 'phone_number');
    }

    public function branch()
    {
        return $this->belongsTo(Branch::class, 'bra_code', 'bra_code');
    }

    public function table()
    {
        return $this->belongsTo(Table::class, 'tab_code', 'tab_code');
    }

    public function createdByEmployee()
    {
        return $this->belongsTo(Employee::class, 'created_booking_code_by_emp', 'emp_code');
    }

    public function canceledByEmployee()
    {
        return $this->belongsTo(Employee::class, 'canceled_by_emp', 'emp_code');
    }
}
