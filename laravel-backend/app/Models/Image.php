<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use App\Models\Employee\Employee;

class Image extends Model
{
    protected $fillable = [
        'image_url',
        'entity_type',
        'entity_code',
        'slug',
        'main_image',
        'description',
        'created_by',
        'updated_by',
    ];

    protected $casts = [
        'image_url' => 'string',
        'entity_type' => 'string',
        'entity_code' => 'string',
        'slug' => 'string',
        'main_image' => 'boolean',
        'description' => 'string',
        'created_by' => 'string',
        'updated_by' => 'string',
    ];

    public function createdBy()
    {
        return $this->belongsTo(Employee::class, 'created_by', 'emp_code');
    }

    public function updatedBy()
    {
        return $this->belongsTo(Employee::class, 'updated_by', 'emp_code');
    }
}
