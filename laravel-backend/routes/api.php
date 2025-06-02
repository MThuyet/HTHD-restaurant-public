<?php

use Illuminate\Support\Facades\Route;

/* BEGIN CUSTOMER ROUTES */

	Route::get('/menu', [Customer\MenuController::class, 'showMenuPage']);

/* END CUSTOMER ROUTES */

/* BEGIN STAFF ROUTES */

	Route::prefix('staff')->group(function () {
		Route::get('/kitchen-order-manager', [Staff\OrderController::class, 'showKitchenOrderManagerPage']);
		Route::get('/table-manager', [Staff\OrderController::class, 'showTableManagerPage']);
		Route::get('/menu-order', [Staff\OrderController::class, 'showMenuOrderPage']);
	});
	

/* END STAFF ROUTES */

/* BEGIN ADMIN ROUTES */
	Route::prefix('admin')->group(function () {
		Route::get('/dashboard', [Admin\DashboardController::class, 'showDashboardPage']);
		Route::get('/orders', [Admin\OrderController::class, 'showOrderManagerPage']);
		Route::get('/users', [Admin\UserController::class, 'showUserManagerPage']);
		Route::get('/menus', [Admin\MenuController::class, 'showMenuManagerPage']);
	});
/* END ADMIN ROUTES */