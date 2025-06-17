<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Branch;
use App\Http\Controllers\Customer;
use App\Http\Controllers\Employee;
use App\Http\Controllers\Kitchen;
use App\Http\Controllers\Order;
use App\Http\Controllers\Product;
use App\Http\Controllers\UI;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Employee\EmployeeController;


Route::get('/test', function () {
    return response()->json([
        'success' => true,
        'message' => 'Successfully test API'
    ]);
});

// Public routes
Route::post('/login', [AuthController::class, 'login']);
