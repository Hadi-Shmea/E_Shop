<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $usedSlugs = [];

        foreach (range(1, 100) as $i) {
            $name = fake()->unique()->word();
            $slug = Str::slug($name);

            // Ensure uniqueness even if faker repeats
            if (in_array($slug, $usedSlugs)) {
                $slug .= '-' . uniqid();
            }

            $usedSlugs[] = $slug;

            Category::create([
                'name' => ucfirst($name),
                'slug' => $slug,
                'parent_id' => rand(0, 1) ? null : Category::inRandomOrder()->value('id'),
            ]);
        }
    }
}
