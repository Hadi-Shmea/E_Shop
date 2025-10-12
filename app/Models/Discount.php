<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Discount extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'type',
        'value',
        'brand_id',
        'category_id',
        'is_active',
        'starts_at',
        'ends_at',
    ];
    protected $casts = [
        'name' => 'string',
        'value' => 'float',
        'brand_id' => 'integer',
        'category_id' => 'integer',
        'is_active' => 'boolean',
        'starts_at' => 'datetime',
        'ends_at' => 'datetime',
    ];
    public function brand(){
        return $this->belongsTo(Brand::class);
    }
    public function category(){
        return $this->belongsTo(Category::class);
    }
    public function products(){
        return $this->belongsTo(Product::class);
    }
}
