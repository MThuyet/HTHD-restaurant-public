<?php

namespace App\Models\Order;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use App\Models\Customer\Customer;
use App\Models\Order\Reservation;
use App\Models\Branch\Branch;
use App\Models\Branch\Table;
use App\Models\Employee\Employee;
use App\Order\Enums\OrderStatus;
use App\Order\Enums\OrderPaymentMethod;

class Order extends Model
{
    use SoftDeletes;

    protected $table = 'orders';
    protected $primaryKey = 'ord_code';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'ord_code',
        'status',
        'payment_method',
        'canceled_at',
        'canceled_reason',
        'cus_phone_number',
        'res_code',
        'bra_code',
        'tab_code',
        'created_by_emp',
        'updated_by_emp',
        'canceled_by_emp',
    ];

    protected $casts = [
        'ord_code' => 'string',
        'status' => OrderStatus::class,
        'payment_method' => OrderPaymentMethod::class,
        'canceled_at' => 'datetime',
        'canceled_reason' => 'string',
        'cus_phone_number' => 'string',
        'res_code' => 'string',
        'bra_code' => 'string',
        'tab_code' => 'string',
        'created_by_emp' => 'string',
        'updated_by_emp' => 'string',
        'canceled_by_emp' => 'string',
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'cus_phone_number', 'phone_number');
    }

    public function reservation()
    {
        return $this->belongsTo(Reservation::class, 'res_code', 'res_code');
    }

    public function branch()
    {
        return $this->belongsTo(Branch::class, 'bra_code', 'bra_code');
    }

    public function table()
    {
        return $this->belongsTo(Table::class, 'tab_code', 'tab_code');
    }

    public function createdBy()
    {
        return $this->belongsTo(Employee::class, 'created_by_emp', 'emp_code');
    }

    public function updatedBy()
    {
        return $this->belongsTo(Employee::class, 'updated_by_emp', 'emp_code');
    }

    public function canceledBy()
    {
        return $this->belongsTo(Employee::class, 'canceled_by_emp', 'emp_code');
    }
}
