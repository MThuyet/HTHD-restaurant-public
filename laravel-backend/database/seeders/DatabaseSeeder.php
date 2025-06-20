<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            Branch\BranchSeeder::class,
            Branch\DepartmentSeeder::class,
            Employee\PositionSeeder::class,
            Employee\PermissionSeeder::class,
            Kitchen\KitchenSeeder::class,
            Employee\EmployeeSeeder::class,
            Employee\PositionPermissionMappingSeeder::class,
        ]);
    }
}
