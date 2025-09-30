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
            UserSeeder::class,
            BrandSeeder::class,
            CategorySeeder::class,
            ColorSeeder::class,
            SizeSeeder::class,
            ProductSeeder::class,
            ProductVariantSeeder::class,
            SaleSeeder::class,
            OrderSeeder::class,
            CartSeeder::class,
        ]);
    }
}
