<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Branch;
use App\Http\Controllers\Customer;
use App\Http\Controllers\Employee;
use App\Http\Controllers\Kitchen;
use App\Http\Controllers\Order;
use App\Http\Controllers\Product;
use App\Http\Controllers\UI;

Route::get('/test', function () {
    return response()->json([
        'success' => true,
        'message' => 'Successfully test API'
    ]);
});

Route::post('/test-branch-code', [Branch\BranchController::class, 'store']);
