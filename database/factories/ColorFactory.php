<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Color;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Color>
 */
class ColorFactory extends Factory {
    protected $model = Color::class;
    public function definition(): array {
        return [
            'name' => $this->faker->colorName(),
            'hex_code' => $this->faker->hexColor(),
        ];
    }
}
