<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use App\Models\Employee\Employee;

class Nutrition extends Model
{
    use SoftDeletes; 

    protected $table = 'nutrition';
    protected $primaryKey = 'nut_code';
    public $incrementing = false;

    protected $fillable = [
        'nut_code',
        'nut_name',
        'is_marco',
        'description',
        'created_by_emp',
        'updated_by_emp'
    ];

    protected $casts = [
        'nut_code' => 'string',
        'nut_name' => 'string',
        'is_marco' => 'boolean',
        'description' => 'string',
        'created_by_emp' => 'string',
        'updated_by_emp' => 'string'
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
