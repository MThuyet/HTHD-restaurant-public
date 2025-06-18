<?php

namespace Database\Seeders;

use App\Models\Employee\Position;
use Illuminate\Database\Seeder;

class PositionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Position::insert([
            [
                'pos_code' => 'POS001',
                'pos_name' => 'Giám Đốc',
                'description' => 'Quản lý và điều hành toàn bộ hoạt động của nhà hàng',
            ],
            [
                'pos_code' => 'POS002',
                'pos_name' => 'Trưởng Phòng',
                'description' => 'Quản lý và điều hành hoạt động của phòng ban',
            ],
            [
                'pos_code' => 'POS003',
                'pos_name' => 'Đầu Bếp',
                'description' => 'Phụ trách chế biến món ăn và quản lý nhân viên bếp',
            ],
            [
                'pos_code' => 'POS004',
                'pos_name' => 'Nhân Viên Phục Vụ',
                'description' => 'Phục vụ khách hàng và hỗ trợ các hoạt động khác',
            ],
            [
                'pos_code' => 'POS005',
                'pos_name' => 'Nhân Viên Bếp',
                'description' => 'Hỗ trợ chế biến món ăn và vệ sinh khu vực bếp',
            ],
        ]);
    }
}
