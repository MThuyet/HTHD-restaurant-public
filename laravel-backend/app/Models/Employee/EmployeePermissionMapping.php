<?php

namespace App\Models\Employee;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class EmployeePermissionMapping extends Model
{
    /**
     * Tên bảng trong database
     *
     * @var string
     */
    protected $table = 'employee_permission_mappings';

    /**
     * Các trường có thể gán dữ liệu hàng loạt
     *
     * @var array
     */
    protected $fillable = [
        'emp_code',
        'permission_id'
    ];

    /**
     * Mối quan hệ với Model Employee
     *
     * @return BelongsTo
     */
    public function employee(): BelongsTo
    {
        return $this->belongsTo(Employee::class, 'emp_code', 'emp_code');
    }

    /**
     * Mối quan hệ với Model Permission
     *
     * @return BelongsTo
     */
    public function permission(): BelongsTo
    {
        return $this->belongsTo(Permission::class, 'permission_id');
    }
}
