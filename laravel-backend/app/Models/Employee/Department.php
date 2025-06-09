<?php

namespace App\Models\Employee;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use App\Models\Branch\Branch;

class Department extends Model
{
    use SoftDeletes;

    protected $table = 'departments';
    protected $primaryKey = 'dep_code';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'dep_code',
        'dep_name',
        'description',
        'bra_code',
    ];

    protected $casts = [
        'dep_code' => 'string',
        'bra_code' => 'string',
    ];

    public function branch()
    {
        return $this->belongsTo(Branch::class, 'bra_code', 'bra_code');
    }
}
