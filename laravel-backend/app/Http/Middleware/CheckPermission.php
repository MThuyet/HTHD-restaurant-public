<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckPermission
{
    public function handle(Request $request, Closure $next, $route)
    {
        if (!$request->user() || !$request->user()->hasPermission($route)) {
            return response()->json([
                'message' => 'Bạn không có quyền truy cập!'
            ], 403);
        }

        return $next($request);
    }
}
