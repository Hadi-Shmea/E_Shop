<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Product;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory {
    protected $model = Product::class;

    public function definition(): array {
        return [
            'name' => $name = $this->faker->unique()->word(),
            'slug' => Str::slug($name),
            'description' => $this->faker->sentence(),
            'price' => $this->faker->randomFloat(2, 10, 1000),
            'stock' => $this->faker->numberBetween(0,100),
            'category_id' => \App\Models\Category::inRandomOrder()->first()->id ?? 1,
            'brand_id' => \App\Models\Brand::inRandomOrder()->first()->id ?? 1,
        ];
    }
}

