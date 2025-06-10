<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Model;

class ComboProduct extends Model
{
    protected $table = 'combo_products';
    protected $primaryKey = 'com_pro_code';
    public $incrementing = false;

    protected $fillable = [
        'com_pro_code',
        'com_pro_name',
        'description',
        'price',
        'active',
        'created_by_emp',
        'updated_by_emp'
    ];

    protected $casts = [
        'com_pro_code' => 'string',
        'com_pro_name' => 'string',
        'description' => 'string',
        'price' => 'decimal:2',
        'active' => 'boolean',
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
