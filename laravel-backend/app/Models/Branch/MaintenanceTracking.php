<?php

namespace App\Models\Branch;

use Illuminate\Database\Eloquent\Model;

use App\Models\Employee\Employee;
use App\Models\Branch\Table;
use App\Branch\Enums\MaintenanceStatus;

class MaintenanceTracking extends Model
{
    protected $table = 'maintenance_trackings';
    protected $primaryKey = 'tab_code';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'maintenance_reason',
        'status',
        'tab_code',
        'created_by_emp',
        'updated_by_emp',
    ];

    protected $casts = [
        'maintenance_reason' => MaintenanceStatus::class,
        'status' => 'enum',
        'tab_code' => 'string',
        'created_by_emp' => 'string',
        'updated_by_emp' => 'string',
    ];

    public function table()
    {
        return $this->belongsTo(Table::class, 'tab_code', 'tab_code');
    }

    public function createdBy()
    {
        return $this->belongsTo(Employee::class, 'created_by_emp', 'emp_code');
    }

    public function updatedBy()
    {
        return $this->belongsTo(Employee::class, 'updated_by_emp', 'emp_code');
    }
}
