<?php

namespace App\Http\Controllers;

use App\Models\discounts;
use App\Http\Requests\StorediscountsRequest;
use App\Http\Requests\UpdatediscountsRequest;

class DiscountsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorediscountsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(discounts $discounts)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(discounts $discounts)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatediscountsRequest $request, discounts $discounts)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(discounts $discounts)
    {
        //
    }
}
