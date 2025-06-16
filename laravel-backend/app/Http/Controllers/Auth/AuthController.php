<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Employee\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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

        // Tìm người dùng theo tên đăng nhập
        $employee = Employee::where('username', $username)->first();

        // Kiểm tra nếu tìm thấy người dùng và mật khẩu khớp
        if ($employee && Hash::check($password, $employee->password)) {
            // Tạo token cho người dùng với thời hạn 1 ngày
            $token = $employee->createToken(
                'auth-token',
                ['*'],
                now()->addDay()
            );

            // Lấy quyền của người dùng
            $permissions = $employee->permissions->pluck('route');

            // Chỉ trả về thông tin cần thiết
            $userData = [
                'emp_code' => $employee->emp_code,
                'username' => $employee->username,
                'full_name' => $employee->full_name,
                'email' => $employee->email,
                'bra_code' => $employee->bra_code,
                'pos_code' => $employee->pos_code,
                'dep_code' => $employee->dep_code,
                'permissions' => $permissions
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
}
