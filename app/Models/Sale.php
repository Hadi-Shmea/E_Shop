<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    use HasFactory;
    protected $fillable = [
        'order_item_id',
        'product_id',
        'product_variant_id',
        'quantity',
        'price',
        'discount_id',
        'discount_amount',
        'final_price',
    ];
    protected $casts = [
        'order_item_id' => 'integer',
        'product_id' => 'integer',
        'product_variant_id' => 'integer',
        'quantity' => 'integer',
        'price' => 'float',
        'discount_id' => 'integer',
        'discount_amount' => 'float',
        'final_price' => 'float',
    ];
    public function order_item(){
        return $this->belongsTo(OrderItem::class); 
    }
    public function product(){
        return $this->belongsTo(Product::class);
    }
    public function product_variant(){
        return $this->belongsTo(ProductVariant::class);
    }
    public function discount(){
        return $this->belongsTo(Discount::class);
    }
}
