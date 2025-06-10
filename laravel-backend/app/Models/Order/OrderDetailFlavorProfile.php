<?php

namespace App\Models\Order;

use Illuminate\Database\Eloquent\Model;

use App\Models\Product\FlavorProfile;
use App\Models\Order\OrderDetail;

class OrderDetailFlavorProfile extends Model
{
    protected $fillable = [
        'ord_det_code',
        'fla_pro_id',
        'impact_radio',
        'custom_value'
    ];

    protected $casts = [
        'ord_det_code' => 'string',
        'fla_pro_id' => 'integer',
        'impact_radio' => 'string',
        'custom_value' => 'decimal:2'
    ];

    public function orderDetail()
    {
        return $this->belongsTo(OrderDetail::class, 'ord_det_code', 'ord_det_code');
    }

    public function flavorProfile()
    {
        return $this->belongsTo(FlavorProfile::class, 'fla_pro_id', 'id');
    }
}
