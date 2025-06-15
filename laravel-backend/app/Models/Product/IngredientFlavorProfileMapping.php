<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Model;

use App\Models\Employee\Employee;

class IngredientFlavorProfileMapping extends Model
{
    protected $fillable = [
        'ing_code', 
        'fla_pro_id',
        'impact_radio',
        'created_by_emp',
        'updated_by_emp'
    ];

    protected $casts = [
        'ing_code' => 'string',
        'fla_pro_id' => 'integer',
        'impact_radio' => 'decimal:2',
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
