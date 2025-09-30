<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\OrderItem;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\OrderItem>
 */
class OrderItemFactory extends Factory
{
    protected $model = OrderItem::class;

    public function definition(): array
    {
        $productVariant = \App\Models\ProductVariant::inRandomOrder()->first();
        $quantity = $this->faker->numberBetween(1, 5);
        return [
            'order_id' => \App\Models\Order::inRandomOrder()->first()->id,
            'product_id' => $productVariant->product_id,
            'product_variant_id' => $productVariant->id,
            'quantity' => $quantity,
            'price' => $productVariant->price,
            'discount' => 0,
            'subtotal' => $productVariant->price * $quantity,
        ];
    }
}
