<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Sale;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Sale>
 */
class SaleFactory extends Factory {
    protected $model = Sale::class;

    public function definition(): array {
        $start = $this->faker->dateTimeBetween('-1 week','+1 week');
        $end = (clone $start)->modify('+7 days');
        return [
            'name' => $this->faker->word().' Sale',
            'discount_percent' => $this->faker->randomFloat(2, 5, 50),
            'discount_amount' => null,
            'start_at' => $start,
            'end_at' => $end,
        ];
    }
}
