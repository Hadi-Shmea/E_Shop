<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Discount;
use App\Models\Product;
use App\Models\Category;
use App\Models\Brand;

class DiscountFactory extends Factory
{
    protected $model = Discount::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->word(),
            'value' => $this->faker->randomFloat(2, 5, 50),
            'type' => $this->faker->randomElement(['percentage', 'fixed']),
            'category_id' => rand(0,1) ? Category::inRandomOrder()->value('id') : null,
            'brand_id' => rand(0,1) ? Brand::inRandomOrder()->value('id') : null,
            'is_active' => rand(0,1) ? true : false,
            'starts_at' => rand(0,1) ? $this->faker->dateTimeBetween('-1 year', 'now') : null,
            'ends_at' => rand(0,1) ? $this->faker->dateTimeBetween('now', '+1 year') : null,
        ];
    }
}
