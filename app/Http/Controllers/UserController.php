<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use App\Http\Traits\GeneralTrait;


class UserController extends Controller
{
    use GeneralTrait;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }
    public function index_customers()
    {

        $customers = DB::table('users')
            ->rightJoin('orders', 'users.id', '=', 'orders.user_id')
            ->select(
                'users.id',
                'users.name',
                'users.email',
                'users.address',
                'users.phone',
                DB::raw('COALESCE(SUM(orders.total), 0) as purchases'),
                DB::raw('COUNT(orders.id) as orderQnt')
            )
            ->groupBy('users.id')
            ->get();
        return $customers;
    }
    public function show_customers($searching_type)
    {   
        try{
        $user=User::where('id',$searching_type)->orWhere('name',$searching_type)->first();
        if($user){
        $customer =DB::table('users')
            ->rightJoin('orders', 'users.$user->id', '=', 'orders.$user->id')->orWhere('users.name','=','$user->name')
            ->select(
                'users.id',
                'users.name',
                'users.email',
                'users.address',
                'users.phone',
                DB::raw('COALESCE(SUM(orders.total), 0) as purchases'),
                DB::raw('COUNT(orders.id) as orderQnt')
            )
            ->groupBy('users.id')
            ->get();
        return $customer;
        }
        else{
            return $this->notFoundResponse('User not found');
        }
    }catch(\Exception $e){
        return $this->unAuthorizeResponse();
    }
}
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
