<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Sale;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use App\Models\ProductVariant;
use App\Models\Discount;

class SaleFactory extends Factory
{
    protected $model = Sale::class;

    public function definition(): array
    {
        $order = Order::inRandomOrder()->first();
        if (!$order) {
            // If there are no orders, create a fake one
            $order = Order::factory()->create();
        }

        $orderItem = OrderItem::where('order_id', $order->id)->inRandomOrder()->first();
        if (!$orderItem) {
            // Fallback if no order items exist
            $product = Product::inRandomOrder()->first() ?? Product::factory()->create();
            $orderItem = OrderItem::factory()->create([
                'order_id' => $order->id,
                'product_id' => $product->id,
                'price' => $this->faker->randomFloat(2, 50, 500),
                'quantity' => $this->faker->numberBetween(1, 5),
            ]);
        }

        $product = Product::find($orderItem->product_id) ?? Product::factory()->create();
        $variant = ProductVariant::where('product_id', $product->id)->inRandomOrder()->first() 
                    ?? ProductVariant::factory()->create(['product_id' => $product->id]);

        $discount = rand(0, 1) ? Discount::inRandomOrder()->first() : null;
        $discountAmount = $discount ? $this->faker->randomFloat(2, 5, 50) : 0;

        $finalPrice = max(0, $orderItem->price - $discountAmount); // never negative

        return [
            'order_id' => $order->id,
            'order_item_id' => $orderItem->id,
            'product_id' => $product->id,
            'product_variant_id' => $variant->id,
            'quantity' => $orderItem->quantity,
            'price' => $orderItem->price,
            'discount_id' => $discount?->id,
            'discount_amount' => $discountAmount,
            'final_price' => $finalPrice,
        ];
    }
}
