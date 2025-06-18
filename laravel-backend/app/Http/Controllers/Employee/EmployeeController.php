<?php

namespace App\Http\Controllers\Employee;

use App\Http\Controllers\Controller;
use App\Models\Employee\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // Lấy tham số phân trang từ request
        $perPage = $request->input('per_page', 5); // Mặc định 5 nhân viên mỗi trang
        $page = $request->input('page', 1); // Mặc định trang 1

        // eager loading để tối ưu hóa query với các mối quan hệ
        // 1. lấy tất cả nhân viên
        // 2. thu thập các khóa ngoại từ kết quả truy vấn
        // 3. thực hiện các truy vấn riêng lẻ cho mỗi quan hệ
        // 4. truy vấn đặc biệt cho các quan hệ nhiều - nhiều
        // 5. tự động ghép dữ liệu với nhau
        $employees = Employee::with([
            'branch:bra_code,bra_name,address,phone_number1',
            'position:pos_code,pos_name',
            'department:dep_code,dep_name',
            'kitchen:kit_code,kit_name',
            'permissions:id,name,route'
        ])
            ->select('emp_code', 'full_name', 'gender', 'birthdate', 'phone_number', 'address', 'username', 'bra_code', 'dep_code', 'pos_code', 'kit_code')
            // tạo ra một đối tượng LengthAwarePaginator để trả về các thông tin phân trang
            ->paginate($perPage);

        // Tùy chỉnh dữ liệu phân trang để loại bỏ thông tin dư thừa
        $paginationData = [
            'current_page' => $employees->currentPage(), // trang đang được gọi
            'results' => $employees->items(), // dữ liệu của trang
            'per_page' => $employees->perPage(), // số lượng item của trang
            'total' => $employees->total(), // tổng số item
            'last_page' => $employees->lastPage(), // số của trang cuối cùng
        ];

        return response()->json([
            'success' => true,
            'message' => 'Lấy danh sách nhân viên thành công',
            'data' => $paginationData
        ]);
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $emp_code)
    {
        $employee = Employee::with([
            'branch:bra_code,bra_name,address,phone_number1',
            'position:pos_code,pos_name',
            'department:dep_code,dep_name',
            'kitchen:kit_code,kit_name',
            'permissions:id,name,route'
        ])
            ->select('emp_code', 'full_name', 'gender', 'birthdate', 'phone_number', 'address', 'username', 'bra_code', 'dep_code', 'pos_code', 'kit_code')
            ->findOrFail($emp_code);

        return response()->json([
            'success' => true,
            'message' => 'Lấy thông tin nhân viên thành công',
            'data' => $employee
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Employee $employee)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Employee $employee)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employee)
    {
        //
    }
}
