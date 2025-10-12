<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'price',
        'stock',
        'category_id',
        'brand_id'
    ];
    protected $casts = [
        'name' => 'string',
        'slug' => 'string',
        'description' => 'string',
        'price' => 'float',
        'stock' => 'integer',
        'category_id' => 'integer',
        'brand_id' => 'integer',
    ];
    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function ProductVariant()
    {
        return $this->hasMany(ProductVariant::class);
    }

    public function images()
    {
        return $this->hasMany(ProductImage::class);
    }

    public function discounts()
    {
        return $this->hasMany(Discount::class);
    }

    public function sales()
    {
        return $this->hasMany(Sale::class);
    }
    public function cart_items()
    {
        return $this->hasMany(CartItem::class);
    }
    public function order_items()
    {
        return $this->hasMany(OrderItem::class);
    }
}
