<?php

namespace App\Models\Employee;

use Illuminate\Database\Eloquent\Model;
class Position extends Model
{
    protected $table = 'positions';

    protected $fillable = [
        'pos_code',
        'pos_name',
        'description',
    ];

    protected $casts = [
        'pos_code' => 'string',
        'pos_name' => 'string',
        'description' => 'string',
    ];

    public function employees()
    {
        return $this->hasMany(Employee::class, 'pos_code', 'pos_code');
    }

    public function permissions()
    {
        return $this->belongsToMany(Permission::class, 'position_permission_mappings', 'pos_code', 'per_id', 'pos_code', 'id')->withTimestamps();
    }
}
