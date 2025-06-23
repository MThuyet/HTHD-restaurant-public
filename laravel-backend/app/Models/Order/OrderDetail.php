<?php

namespace App\Models\Order;

use Illuminate\Database\Eloquent\Model;

use App\Models\Product\Product;
use App\Models\Product\ComboProduct;
use App\Models\Employee\Employee;
use App\Enums\Order\OrderDetailStatus;

class OrderDetail extends Model
{
    protected $table = 'order_details';

    protected $primaryKey = 'ord_det_code';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'ord_det_code',
        'quantity',
        'price',
        'status',
        'note',
        'ordered_by_type',
        'ordered_by',
        'parent_ord_det_code',
        'ord_code',
        'pro_code',
        'com_pro_code',
        'received_by_emp',
        'received_at',
        'done_by_emp',
        'done_at',
        'canceled_by_emp',
        'canceled_reason',
        'canceled_at',
        'waiting_at',
        'prepared_by_emp',
        'prepared_at',
        'ready_by_emp',
        'ready_at',
        'served_by_emp',
        'served_at',
        'cus_phone_number',
        'created_by_emp',

    ];

    protected $casts = [
        'ord_det_code' => 'string',
        'quantity' => 'decimal:2',
        'price' => 'decimal:2',
        'status' => OrderDetailStatus::class,
        'note' => 'string',
        'ordered_by_type' => 'string',
        'ordered_by' => 'string',
        'parent_ord_det_code' => 'string',
        'ord_code' => 'string',
        'pro_code' => 'string',
        'com_pro_code' => 'string',
        'received_by_emp' => 'string',
        'received_at' => 'datetime',
        'done_by_emp' => 'string',
        'done_at' => 'datetime',
        'canceled_by_emp' => 'string',
        'canceled_reason' => 'string',
        'canceled_at' => 'datetime',
        'waiting_at' => 'string',
        'prepared_by_emp' => 'string',
        'prepared_at' => 'datetime',
        'ready_by_emp' => 'string',
        'ready_at' => 'datetime',
        'served_by_emp' => 'string',
        'served_at' => 'datetime',
        'cus_phone_number' => 'string',
        'created_by_emp' => 'string',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class, 'pro_code', 'pro_code');
    }

    public function comboProduct()
    {
        return $this->belongsTo(ComboProduct::class, 'com_pro_code', 'com_pro_code');
    }

    public function receivedBy()
    {
        return $this->belongsTo(Employee::class, 'received_by_emp', 'emp_code');
    }

    public function doneBy()
    {
        return $this->belongsTo(Employee::class, 'done_by_emp', 'emp_code');
    }

    public function canceledBy()
    {
        return $this->belongsTo(Employee::class, 'canceled_by_emp', 'emp_code');
    }

    public function parentOrderDetail()
    {
        return $this->belongsTo(OrderDetail::class, 'parent_ord_det_code', 'ord_det_code');
    }

    public function childOrderDetails()
    {
        return $this->hasMany(OrderDetail::class, 'parent_ord_det_code', 'ord_det_code');
    }

    public function order()
    {
        return $this->belongsTo(Order::class, 'ord_code', 'ord_code');
    }

    public function modifiers()
    {
        return $this->hasMany(OrderDetailModifier::class, 'ord_det_code', 'ord_det_code');
    }
}
