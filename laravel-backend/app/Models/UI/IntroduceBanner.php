<?php

namespace App\Models\UI;

use Illuminate\Database\Eloquent\Model;

use App\Models\Employee\Employee;

class IntroduceBanner extends Model
{
    protected $fillable = [
        'image',
        'start_date',
        'time_start',
        'end_date',
        'time_end',
        'description',
        'sequence',
        'active',
        'created_by_emp',
        'updated_by_emp',
    ];

    protected $casts = [
        'image' => 'string',
        'start_date' => 'date',
        'time_start' => 'time',
        'end_date' => 'date',
        'time_end' => 'time',
        'description' => 'string',
        'sequence' => 'integer',
        'active' => 'boolean',
        'created_by_emp' => 'string',
        'updated_by_emp' => 'string',
    ];

    public function createdBy()
    {
        return $this->belongsTo(Employee::class, 'created_by_emp', 'emp_code');
    }

    public function updatedBy()
    {
        return $this->belongsTo(Employee::class, 'updated_by_emp', 'emp_code');
    }
}
