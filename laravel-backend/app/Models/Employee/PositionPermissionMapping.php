<?php

namespace App\Models\Employee;

use Illuminate\Database\Eloquent\Model;

class PositionPermissionMapping extends Model
{
    protected $fillable = [
        'pos_code',
        'per_id',
    ];

    protected $casts = [
        'pos_code' => 'string',
        'per_id' => 'bigint',
    ];
}
