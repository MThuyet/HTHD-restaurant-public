<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use App\Enums\Product\ProductType;

class Product extends Model
{
    use SoftDeletes;

    protected $table = 'products';
    protected $primaryKey = 'prod_code';
    public $incrementing = false;

    protected $fillable = [
        'prod_code',
        'prod_name',
        'min_serving_people',
        'max_serving_people',
        'type',
        'description',
        'created_by_emp',
        'updated_by_emp'
    ];

    protected $casts = [
        'prod_code' => 'string',
        'prod_name' => 'string',
        'min_serving_people' => 'integer',
        'max_serving_people' => 'integer',
        'type' => ProductType::class,
        'description' => 'string',
        'created_by_emp' => 'string',
        'updated_by_emp' => 'string'
    ];
}
