<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Branch;
use App\Http\Controllers\Customer;
use App\Http\Controllers\Employee;
use App\Http\Controllers\Kitchen;
use App\Http\Controllers\Order;
use App\Http\Controllers\Product;
use App\Http\Controllers\UI;
use App\Http\Controllers\Auth;

// Auth
Route::post('/login', [Auth\AuthController::class, 'login']);
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [Auth\AuthController::class, 'logout']);
});

// ADMIN private route
Route::middleware('auth:sanctum', 'check.permission:admin')->group(function () {
    /* BRANCH */
    // list branches
    Route::get('/branches', [Branch\BranchController::class, 'index']);
    // get branch by bra_code
    Route::get('/branches/{bra_code}', [Branch\BranchController::class, 'show']);
    // create branch
    Route::post('/branches', [Branch\BranchController::class, 'store']);
    // update branch
    Route::put('/branches/{bra_code}', [Branch\BranchController::class, 'update']);
    // delete branch
    Route::delete('/branches/{bra_code}', [Branch\BranchController::class, 'destroy']);
    /* END BRANCH */

    /* EMPLOYEE */
    // list employees
    Route::get('/employees', [Employee\EmployeeController::class, 'index']);
    // get employee by emp_code
    Route::get('/employees/{emp_code}', [Employee\EmployeeController::class, 'show']);
    /* END EMPLOYEE */
});
