<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Cart;
use App\Models\CartItem;
use App\Models\ProductVariant;

class CartItemSeeder extends Seeder
{
    public function run(): void
    {
        Cart::all()->each(function ($cart) {
            $variants = ProductVariant::inRandomOrder()->take(rand(1, 5))->get();

            foreach ($variants as $variant) {
                CartItem::updateOrCreate(
                    [
                        'cart_id'            => $cart->id,
                        'product_id'         => $variant->product_id,
                        'product_variant_id' => $variant->id,
                    ],
                    [
                        'quantity' => rand(1, 3),
                        'price'    => $variant->price,
                    ]
                );
            }
        });
    }
}
