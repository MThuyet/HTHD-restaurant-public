<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Employee\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $username = $request->username;
        $password = $request->password;

        if (!$username || !$password) {
            return response()->json([
                'success' => false,
                'message' => 'Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu'
            ], 400);
        }

        $employee = Employee::where('username', $username)->with('position.permissions')->first();

        if ($employee && Hash::check($password, $employee->password)) {
            $token = $employee->createToken(
                'auth-token',
                ['*'],
                now()->addDay()
            );

            $permissions = $employee->position->permissions->pluck('route');

            $userData = [
                'emp_code' => $employee->emp_code,
                'username' => $employee->username,
                'full_name' => $employee->full_name,
                'email' => $employee->email,
                'bra_code' => $employee->bra_code,
                'pos_code' => $employee->pos_code,
                'dep_code' => $employee->dep_code,
                'permissions' => $permissions,
                'positions' => $employee->position,
            ];

            return response()->json([
                'success' => true,
                'message' => 'Đăng nhập thành công',
                'token' => $token->plainTextToken,
                'data' => $userData
            ]);
        }

        // Báo lỗi nếu sai
        return response()->json([
            'success' => false,
            'message' => 'Tên đăng nhập hoặc mật khẩu không chính xác'
        ], 401);
    }

    public function logout(Request $request)
    {
        try {
            // Kiểm tra user đã đăng nhập chưa
            if (!$request->user()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Bạn chưa đăng nhập'
                ], 401);
            }

            // Xóa token hiện tại
            $request->user()->currentAccessToken()->delete();

            return response()->json([
                'success' => true,
                'message' => 'Đăng xuất thành công'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Có lỗi xảy ra khi đăng xuất'
            ], 500);
        }
    }
}
