<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Brand;
use Illuminate\Support\Str;

class BrandFactory extends Factory
{
    protected $model = Brand::class;

    public function definition(): array
    {
        $name = $this->faker->company();
        return [
            'name' => $name,
            'slug' => Str::slug($name),
            'logo_url' => $this->faker->imageUrl(100, 100),
        ];
    }
}
