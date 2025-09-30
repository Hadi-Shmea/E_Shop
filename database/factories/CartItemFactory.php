<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\CartItem;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CartItem>
 */

class CartItemFactory extends Factory
{
    protected $model = CartItem::class;

    public function definition(): array
    {
        $productVariant = \App\Models\ProductVariant::inRandomOrder()->first();

        return [
            'cart_id' => \App\Models\Cart::inRandomOrder()->first()->id,
            'product_id' => $productVariant->product_id,
            'product_variant_id' => $productVariant->id,
            'quantity' => $this->faker->numberBetween(1, 3),
            'price' => $productVariant->price,
        ];
    }
}
