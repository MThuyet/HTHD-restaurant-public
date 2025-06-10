<?php

namespace App\Models\Employee;

use Illuminate\Database\Eloquent\Model;

class Position extends Model
{
    protected $table = 'positions';

    protected $fillable = [
        'pos_code',
        'pos_name',
        'pos_description',
    ];

    protected $casts = [
        'pos_code' => 'string',
        'pos_name' => 'string',
        'pos_description' => 'string',
    ];

    public function employees()
    {
        return $this->hasMany(Employee::class, 'pos_code', 'pos_code');
    }
}
