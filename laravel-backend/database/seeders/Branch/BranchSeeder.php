<?php

namespace Database\Seeders\Branch;

use App\Models\Branch\Branch;
use Illuminate\Database\Seeder;

class BranchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Branch::insert([
            [
                'bra_code' => 'BRA001',
                'bra_name' => 'Chi Nhánh Quận 1',
                'phone_number1' => '0281234567',
                'phone_number2' => '0287654321',
                'email' => 'q1@restaurant.com',
                'open_time' => '07:00:00',
                'close_time' => '22:00:00',
                'address' => '123 Đường Lê Lợi, Quận 1, TP.HCM',
                'frame_code' => 'FRAME001',
                'tax_code' => 'TAX001',
                'active' => true,
            ],
            [
                'bra_code' => 'BRA002',
                'bra_name' => 'Chi Nhánh Quận 7',
                'phone_number1' => '0282345678',
                'phone_number2' => '0288765432',
                'email' => 'q7@restaurant.com',
                'open_time' => '07:00:00',
                'close_time' => '22:00:00',
                'address' => '456 Đường Nguyễn Thị Thập, Quận 7, TP.HCM',
                'frame_code' => 'FRAME002',
                'tax_code' => 'TAX002',
                'active' => true,
            ],
        ]);
    }
}
