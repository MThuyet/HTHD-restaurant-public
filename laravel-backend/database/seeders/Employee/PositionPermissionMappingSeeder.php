<?php

namespace Database\Seeders\Employee;

use App\Models\Employee\PositionPermissionMapping;
use Illuminate\Database\Seeder;

class PositionPermissionMappingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PositionPermissionMapping::insert([
            // Giám Đốc (POS001) có full quyền (id 1–4)
            ['pos_code' => 'POS001', 'per_id' => 1, 'created_at' => now(), 'updated_at' => now()],
            ['pos_code' => 'POS001', 'per_id' => 2, 'created_at' => now(), 'updated_at' => now()],
            ['pos_code' => 'POS001', 'per_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['pos_code' => 'POS001', 'per_id' => 4, 'created_at' => now(), 'updated_at' => now()],
            ['pos_code' => 'POS001', 'per_id' => 5, 'created_at' => now(), 'updated_at' => now()],
            ['pos_code' => 'POS001', 'per_id' => 6, 'created_at' => now(), 'updated_at' => now()],

            // Đầu Bếp (POS003) → employee.kitchen (id 3,6)
            ['pos_code' => 'POS003', 'per_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['pos_code' => 'POS003', 'per_id' => 6, 'created_at' => now(), 'updated_at' => now()],

            // Nhân Viên Phục Vụ (POS004) → employee.order (id 2)
            ['pos_code' => 'POS004', 'per_id' => 2, 'created_at' => now(), 'updated_at' => now()],
            ['pos_code' => 'POS004', 'per_id' => 5, 'created_at' => now(), 'updated_at' => now()],


            // Nhân Viên Tiếp Tân (POS006) → employee.booking (id 4)
            ['pos_code' => 'POS006', 'per_id' => 4, 'created_at' => now(), 'updated_at' => now()],
            ['pos_code' => 'POS006', 'per_id' => 5, 'created_at' => now(), 'updated_at' => now()],
            ['pos_code' => 'POS006', 'per_id' => 6, 'created_at' => now(), 'updated_at' => now()],

        ]);

    }
}
