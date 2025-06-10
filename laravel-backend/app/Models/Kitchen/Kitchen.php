<?php

namespace App\Models\Kitchen;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use App\Models\Branch\Branch;

class Kitchen extends Model
{
    use SoftDeletes;

    protected $table = 'kitchens';

    protected $fillable = [
        'kit_code',
        'kit_name',
        'description',
        'bra_code',
    ];

    protected $casts = [
        'kit_code' => 'string',
        'kit_name' => 'string',
        'description' => 'string',
        'bra_code' => 'string',
    ];

    public function branch()
    {
        return $this->belongsTo(Branch::class, 'bra_code', 'bra_code');
    }
}
