<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Size;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Size>
 */
class SizeFactory extends Factory
{
    protected $model = Size::class;
    public function definition(): array
    {
        return ['name' => $this->faker->randomElement(['S', 'M', 'L', 'XL', 'XXL'])];
    }
}
