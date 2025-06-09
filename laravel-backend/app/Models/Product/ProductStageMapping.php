<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Model;

class ProductStageMapping extends Model
{
    protected $fillable = [
        'pro_code',
        'pro_sta_code',
        'sequence_order',
        'is_parallel_group',
        'created_by_emp',
        'updated_by_emp',
    ];

    protected $casts = [
        'pro_code' => 'string',
        'pro_sta_code' => 'string',
        'sequence_order' => 'integer',
        'is_parallel_group' => 'boolean',
        'created_by_emp' => 'string',
        'updated_by_emp' => 'string',
    ];
}
