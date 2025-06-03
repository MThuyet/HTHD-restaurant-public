<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::insert(
            [
                [
                    'name' => 'John Doe',
                    'email' => 'john@doe.com',
                    'password' => bcrypt('password'),
                ],
                [
                    'name' => 'Jane Doe',
                    'email' => 'jane@doe.com',
                    'password' => bcrypt('password'),
                ],

            ]
        );
    }
}
