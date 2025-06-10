<?php

namespace App\Models\Branch;

use Illuminate\Database\Eloquent\Model;

use App\Models\Branch\Branch;

class Floor extends Model
{
    protected $table = 'floors';
    protected $primaryKey = 'flo_code';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'flo_code',
        'flo_name',
        'bra_code',
    ];

    protected $casts = [
        'flo_code' => 'string',
        'flo_name' => 'string',
        'bra_code' => 'string',
    ];

    public function branch()
    {
        return $this->belongsTo(Branch::class, 'bra_code', 'bra_code');
    }

}
