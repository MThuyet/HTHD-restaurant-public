<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ActivityTracking extends Model
{
    protected $fillable = [
        'actor_type', 'actor_id',
        'action',
        'subject_type', 'subject_id',
        'old_values', 'new_values',
        'ip_address', 'user_agent',
    ];

    protected $casts = [
        'old_values' => 'array',
        'new_values' => 'array',
    ];

    public function actor()
    {
        return $this->morphTo(null, 'actor_type', 'actor_id');
    }

    public function subject()
    {
        return $this->morphTo(null, 'subject_type', 'subject_id');
    }
}
