<?php

namespace Database\Seeders\Kitchen;

use App\Models\Kitchen\Kitchen;
use Illuminate\Database\Seeder;

class KitchenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Kitchen::insert([
            [
                'kit_code' => 'KIT001',
                'kit_name' => 'Bếp Chính',
                'description' => 'Bếp chính phục vụ các món ăn chính',
                'bra_code' => 'BRA001',
            ],
            [
                'kit_code' => 'KIT002',
                'kit_name' => 'Bếp Phụ',
                'description' => 'Bếp phụ phục vụ các món ăn phụ và tráng miệng',
                'bra_code' => 'BRA001',
            ],
            [
                'kit_code' => 'KIT003',
                'kit_name' => 'Bếp Chính Quận 7',
                'description' => 'Bếp chính của chi nhánh Quận 7',
                'bra_code' => 'BRA002',
            ],
        ]);
    }
}
