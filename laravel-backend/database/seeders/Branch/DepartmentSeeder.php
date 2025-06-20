<?php

namespace Database\Seeders\Branch;

use App\Models\Employee\Department;
use Illuminate\Database\Seeder;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Department::insert([
            [
                'dep_code' => 'DEP001',
                'dep_name' => 'Phòng Kinh Doanh',
                'description' => 'Phòng phụ trách các hoạt động kinh doanh và phát triển thị trường',
                'bra_code' => 'BRA001',
            ],
            [
                'dep_code' => 'DEP002',
                'dep_name' => 'Phòng Nhân Sự',
                'description' => 'Phòng quản lý nhân sự và đào tạo',
                'bra_code' => 'BRA001',
            ],
            [
                'dep_code' => 'DEP003',
                'dep_name' => 'Phòng Bếp',
                'description' => 'Phòng phụ trách chế biến món ăn',
                'bra_code' => 'BRA001',
            ],
            [
                'dep_code' => 'DEP004',
                'dep_name' => 'Phòng Phục Vụ',
                'description' => 'Phòng phụ trách phục vụ khách hàng',
                'bra_code' => 'BRA001',
            ],
        ]);
    }
}
