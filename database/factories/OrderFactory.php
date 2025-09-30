<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Order;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory {
    protected $model = Order::class;

    public function definition(): array {
        $user = \App\Models\User::inRandomOrder()->first();
        return [
            'user_id' => $user->id,
            'total' => 0, // calculated later
            'status' => $this->faker->randomElement(['pending','paid','shipped','completed','canceled']),
            'payment_status' => $this->faker->randomElement(['unpaid','paid','refunded']),
            'payment_method' => $this->faker->randomElement(['card','paypal']),
        ];
    }
}

