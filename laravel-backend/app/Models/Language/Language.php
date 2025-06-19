<?php

namespace App\Models\Language;

use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    protected $fillable = [
        'lan_name',
        'description',
    ];

    protected $cats = [
        'lan_name' => 'string',
        'description' => 'string'
    ];
}
