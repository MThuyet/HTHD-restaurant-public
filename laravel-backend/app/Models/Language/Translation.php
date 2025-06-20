<?php

namespace App\Models\Language;

use Illuminate\Database\Eloquent\Model;

class Translation extends Model
{
    protected $fillable = [
        'sys_table_name',
        'row_identifier',
        'column_name',
        'translated_text',
        'lan_code',
    ];

    protected $cats = [
        'sys_table_name' => 'string',
        'row_identifier' => 'string', 
        'column_name' => 'string', 
        'translated_text' => 'string', 
        'lan_code' => 'string', 
    ];
}
