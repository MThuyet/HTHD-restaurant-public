<?php

namespace App\Models\Branch;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Branch extends Model
{
    use SoftDeletes;

    protected $table = 'branches';
    protected $primaryKey = 'bra_code';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'bra_code',
        'bra_name',
        'phone_number1',
        'phone_number2',
        'email',
        'open_time',
        'close_time',
        'address',
        'frame_code',
        'tax_code',
        'active',
    ];

    protected $casts = [
        'bra_code' => 'string',
        'bra_name' => 'string',
        'phone_number1' => 'string',
        'phone_number2' => 'string',
        'email' => 'string',
        'open_time' => 'datetime:H:i:s',
        'close_time' => 'datetime:H:i:s',
        'address' => 'string',
        'frame_code' => 'string',
        'tax_code' => 'string',
        'active' => 'boolean',
    ];
}
