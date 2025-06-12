<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $fillable = [
        'cus_phone_number',
        'rating',
        'reviewable_type',
        'comment',
        'created_by',
        'updated_by',
    ];

    protected $casts = [
        'cus_phone_number',
        'rating' => 'tinyInteger',
        'reviewable_type' => 'string',
        'comment' => 'string',
        'created_by' => 'string',
        'updated_by' => 'string',
    ];
}
