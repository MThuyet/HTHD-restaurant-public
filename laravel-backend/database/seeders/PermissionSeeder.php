<?php

namespace Database\Seeders;

use App\Models\Employee\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Permission::insert([
            [
                'name' => 'Admin',
                'description' => 'Admin full quyền',
                'route' => 'admin'
            ],
            [
                'name' => 'Employee Order',
                'description' => 'Employee có quyền tạo đơn hàng',
                'route' => 'employee.order'
            ],
            [
                'name' => 'Employee Kitchen',
                'description' => 'Employee có quyền xác nhận đơn hàng',
                'route' => 'employee.kitchen'
            ]
        ]);
    }
}
