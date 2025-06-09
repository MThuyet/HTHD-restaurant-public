<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Model;

class ComboProductMapping extends Model
{
    protected $fillable = [
        'com_pro_code',
        'pro_code',
        'quantity',
        'created_by_emp',
        'updated_by_emp'
    ];

    protected $casts = [
        'com_pro_code' => 'string',
        'pro_code' => 'string',
        'quantity' => 'integer',
        'created_by_emp' => 'string',
        'updated_by_emp' => 'string'
    ];

    public function createdBy()
    {
        return $this->belongsTo('App\Models\Employee\Employee', 'created_by_emp', 'emp_code');
    }

    public function updatedBy()
    {
        return $this->belongsTo('App\Models\Employee\Employee', 'updated_by_emp', 'emp_code');
    }
}
