<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Model;

class FlavorProfile extends Model
{
    protected $table = 'product_flavor_profiles';

    protected $fillable = [
        'name',
        'description',
        'created_at',
        'updated_at',
    ];

    public function products()
    {
        return $this->belongsToMany(Product::class, 'product_flavor_profile', 'flavor_profile_id', 'product_id');
    }
}
