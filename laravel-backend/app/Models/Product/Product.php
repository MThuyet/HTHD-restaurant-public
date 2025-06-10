<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use App\Order\Enums\ProductType;

class Product extends Model
{
    use SoftDeletes;

    protected $table = 'products';
    protected $primaryKey = 'prod_code';
    public $incrementing = false;

    protected $fillable = [
        'prod_code',
        'prod_name',
        'type',
        'description',
        'created_by_emp',
        'updated_by_emp'
    ];

    protected $casts = [
        'prod_code' => 'string',
        'prod_name' => 'string',
        'type' => ProductType::class,
        'description' => 'string',
        'created_by_emp' => 'string',
        'updated_by_emp' => 'string'
    ];
}
