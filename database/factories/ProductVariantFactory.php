<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\ProductVariant;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ProductVariant>
 */
class ProductVariantFactory extends Factory {
    protected $model = ProductVariant::class;

    public function definition(): array {
        return [
            'product_id' => \App\Models\Product::inRandomOrder()->first()->id,
            'color_id' => \App\Models\Color::inRandomOrder()->first()->id,
            'size_id' => \App\Models\Size::inRandomOrder()->first()->id,
            'stock' => $this->faker->numberBetween(0,50),
            'price' => $this->faker->randomFloat(2, 10, 1000),
        ];
    }
}

