<?php

namespace App\Models\Branch;

use Illuminate\Database\Eloquent\Model;

use App\Models\Branch\Area;
use App\Models\Branch\MaintenanceTracking;
use App\Branch\Enums\TableStatus;

class Table extends Model
{
    protected $table = 'tables';
    protected $primaryKey = 'tab_code';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'tab_code',
        'tab_name',
        'capacity',
        'status',
        'pad_length',
        'is_name_customized',
        'are_code',
    ];

    protected $casts = [
        'tab_code' => 'string',
        'tab_name' => 'string',
        'capacity' => 'integer',
        'status' => TableStatus::class, 
        'pad_length' => 'integer',
        'is_name_customized' => 'boolean',
        'are_code' => 'string',
    ];

    public function area()
    {
        return $this->belongsTo(Area::class, 'are_code', 'are_code');
    }   

    public function maintenanceTrackings()
    {
        return $this->hasMany(MaintenanceTracking::class, 'tab_code', 'tab_code');
    }
}
