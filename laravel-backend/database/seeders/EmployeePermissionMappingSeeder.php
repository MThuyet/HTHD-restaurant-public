<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Employee\Employee;
use App\Models\Employee\Permission;
use App\Models\Employee\EmployeePermissionMapping;
use Illuminate\Support\Facades\DB;

class EmployeePermissionMappingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Lấy danh sách mã nhân viên
        $empCodes = DB::table('employees')->pluck('emp_code')->toArray();

        // Lấy danh sách ID quyền theo route
        $permissionIds = DB::table('permissions')->pluck('id', 'route')->toArray();

        // Vô hiệu hóa kiểm tra khóa ngoại tạm thời
        DB::statement('SET FOREIGN_KEY_CHECKS=0');


        try {
            // Thêm tất cả quyền cho admin (nhân viên thứ nhất)
            if (isset($empCodes[0])) {
                $adminEmpCode = $empCodes[0];

                foreach ($permissionIds as $permissionId) {
                    DB::table('employee_permission_mappings')->insert([
                        'emp_code' => $adminEmpCode,
                        'permission_id' => $permissionId,
                        'created_at' => now(),
                        'updated_at' => now()
                    ]);
                }
            }

            // Thêm quyền "employee.order" cho nhân viên order (nhân viên thứ hai)
            if (isset($empCodes[1]) && isset($permissionIds['employee.order'])) {
                DB::table('employee_permission_mappings')->insert([
                    'emp_code' => $empCodes[1],
                    'permission_id' => $permissionIds['employee.order'],
                    'created_at' => now(),
                    'updated_at' => now()
                ]);
            }

            // Thêm quyền "employee.kitchen" cho nhân viên kitchen (nhân viên thứ ba)
            if (isset($empCodes[2]) && isset($permissionIds['employee.kitchen'])) {
                DB::table('employee_permission_mappings')->insert([
                    'emp_code' => $empCodes[2],
                    'permission_id' => $permissionIds['employee.kitchen'],
                    'created_at' => now(),
                    'updated_at' => now()
                ]);
            }
        } finally {
            // Đảm bảo bật lại kiểm tra khóa ngoại dù có lỗi hay không
            DB::statement('SET FOREIGN_KEY_CHECKS=1');
        }
    }
}
