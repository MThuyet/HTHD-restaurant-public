<?php

namespace Database\Seeders\Employee;

use App\Models\Employee\Employee;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class EmployeeSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{
		Employee::insert([
			[
				'emp_code' => 'EMP001',
				'full_name' => 'Nguyễn Văn A',
				'gender' => true,
				'birthdate' => '1990-01-01',
				'phone_number' => '0123456789',
				'address' => '123 Đường ABC, Quận XYZ, TP.HCM',
				'identifier' => '123456789',
				'username' => 'nguyenvana',
				'password' => Hash::make('password123'),
				'bra_code' => 'BRA001',
				'pos_code' => 'POS001',
				'dep_code' => 'DEP001',
				'kit_code' => 'KIT001',
			],
			[
				'emp_code' => 'EMP002',
				'full_name' => 'Trần Thị B',
				'gender' => false,
				'birthdate' => '1992-05-15',
				'phone_number' => '0987654321',
				'address' => '456 Đường DEF, Quận UVW, TP.HCM',
				'identifier' => '987654321',
				'username' => 'tranthib',
				'password' => Hash::make('password123'),
				'bra_code' => 'BRA001',
				'pos_code' => 'POS004',
				'dep_code' => 'DEP002',
				'kit_code' => null,
			],
			[
				'emp_code' => 'EMP003',
				'full_name' => 'Lê Văn C',
				'gender' => true,
				'birthdate' => '1988-12-20',
				'phone_number' => '0369852147',
				'address' => '789 Đường GHI, Quận RST, TP.HCM',
				'identifier' => '456789123',
				'username' => 'levanc',
				'password' => Hash::make('password123'),
				'bra_code' => 'BRA002',
				'pos_code' => 'POS003',
				'dep_code' => 'DEP003',
				'kit_code' => 'KIT002',
			],
			[
				'emp_code' => 'EMP004',
				'full_name' => 'Vũ Thị D',
				'gender' => true,
				'birthdate' => '1988-12-20',
				'phone_number' => '0369852112',
				'address' => '789 Đường GHI, Quận RST, TP.HCM',
				'identifier' => '456899123',
				'username' => 'vuthic',
				'password' => Hash::make('password123'),
				'bra_code' => 'BRA002',
				'pos_code' => 'POS006',
				'dep_code' => 'DEP003',
				'kit_code' => null,
			],
		]);
	}
}
