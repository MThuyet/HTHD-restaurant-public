<?php

namespace App\Models\Branch;

use Illuminate\Database\Eloquent\Model;

use App\Models\Branch\Floor;

class Area extends Model
{
    protected $table = 'areas';
    protected $primaryKey = 'are_code';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'are_code',
        'are_name',
        'flo_code',
    ];

    protected $casts = [
        'are_code' => 'string',
        'are_name' => 'string',
        'flo_code' => 'string',
    ];

    public function floor()
    {
        return $this->belongsTo(Floor::class, 'flo_code', 'flo_code');
    }

}
