<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;


    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'address',
        'shipping_address',
    ];

    protected $hidden = [
        'password',
        'email',
        'remember_token',
        'address',
        'shipping_address',
    ];
protected $casts = [
        'name' => 'string',
        'email' => 'string',
        'password' => 'string',
        'role' ,
        'address' => 'string',
        'shipping_address' => 'string',
    ];
    
    public function carts()
    {
        return $this->hasMany(Cart::class);
    }

    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
