<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Model;

use App\Models\Product\Product;
use App\Models\Product\FlavorProfile;
use App\Enums\Product\ProductFlavorProfileMappingLevel;

class ProductFlavorProfileMapping extends Model
{
    protected $table = 'product_flavor_profile_mappings';

    protected $fillable = [
        'product_code',
        'fla_pro_id',
        'level',
        'created_at',
        'updated_at',
    ];

    protected $casts = [
        'product_code' => 'string',
        'fla_pro_id' => 'integer',
        'level' => ProductFlavorProfileMappingLevel::class,
        'allow_custom' => 'boolean',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }

    public function flavorProfile()
    {
        return $this->belongsTo(FlavorProfile::class, 'flavor_profile_id');
    }
}
