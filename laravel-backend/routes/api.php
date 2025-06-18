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

// Public routes
Route::post('/login', [AuthController::class, 'login']);

// ADMIN private route
Route::middleware('auth:sanctum', 'check.permission:admin')->group(function () {
    /* EMPLOYEE */
    // list employees
    Route::get('/employees', [EmployeeController::class, 'index']);
    // get employee by emp_code
    Route::get('/employees/{emp_code}', [EmployeeController::class, 'show']);
    /* END EMPLOYEE */
});
