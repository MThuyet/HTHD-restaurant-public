<?php

namespace App\Models\Order;

use Illuminate\Database\Eloquent\Model;

use App\Models\Product\Ingredient;
use App\Models\Order\OrderDetail;
use App\Order\Enums\OrderDetailModifier as OrderDetailModifierEnum;

class OrderDetailModifier extends Model
{
    protected $table = 'order_detail_modifiers';

    protected $primaryKey = ['ord_det_code', 'ing_code'];
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'ord_det_code',
        'ing_code',
        'price',
        'modifier',
        'quantity',
    ];

    protected $casts = [
        'ord_det_code' => 'string',
        'ing_code' => 'string',
        'price' => 'decimal:2',
        'modifier' => OrderDetailModifierEnum::class,
        'quantity' => 'decimal:2',
    ];

    public function orderDetail()
    {
        return $this->belongsTo(OrderDetail::class, 'ord_det_code', 'ord_det_code');
    }

    public function ingredient()
    {
        return $this->belongsTo(Ingredient::class, 'ing_code', 'ing_code');
    }
}
