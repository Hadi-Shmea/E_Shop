<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductVariant extends Model
{
    use HasFactory;
    protected $fillable = [
        'price',
        'stock',
        'color_id',
        'size_id',
        'product_id'
    ];
    protected $casts = [
        'price' => 'float',
        'stock' => 'integer',
        'color_id' => 'integer',
        'size_id' => 'integer',
        'product_id' => 'integer',
    ];
    public function color()
    {
        return $this->belongsTo(Color::class);
    }
    public function size()
    {
        return $this->belongsTo(Size::class);
    }
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
