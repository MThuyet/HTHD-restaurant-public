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
            BranchSeeder::class,
            DepartmentSeeder::class,
            PositionSeeder::class,
            KitchenSeeder::class,
            EmployeeSeeder::class,
            PermissionSeeder::class,
            EmployeePermissionMappingSeeder::class,
        ]);
    }
}
