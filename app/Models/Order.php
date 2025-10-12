<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'total',
        'shipping_status',
        'payment_status',
        'payment_method',
    ];
    protected $casts = [
        'user_id' => 'integer',
        'total' => 'float',
        'payment_method' => 'string',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function order_items()
    {
        return $this->hasMany(OrderItem::class);
    }
    public function getTotalAttribute()
    {
        return $this->order_items->sum('price' - 'discount');
    }
}
