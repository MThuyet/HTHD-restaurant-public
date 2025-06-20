<?php

namespace App\Http\Controllers\Employee;

use App\Http\Controllers\Controller;
use App\Models\Employee\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{

    public function index(Request $request)
    {
        try {
            // Lấy tham số phân trang từ request
            $perPage = $request->input('per_page', 1); // Mặc định 5 nhân viên mỗi trang
            $page = $request->input('page', 1); // Mặc định trang 1

            // Khởi tạo query
            $query = Employee::with([
                'branch:bra_code,bra_name,address,phone_number1',
                'position:pos_code,pos_name',
                'department:dep_code,dep_name',
                'kitchen:kit_code,kit_name',
                'position.permissions:id,name,route'
            ])
                ->select('emp_code', 'full_name', 'gender', 'birthdate', 'phone_number', 'address', 'username', 'bra_code', 'dep_code', 'pos_code', 'kit_code');

            // Áp dụng các điều kiện tìm kiếm nếu có
            // Tìm kiếm theo tên
            if ($request->has('full_name')) {
                $query->where('full_name', 'like', '%' . $request->input('full_name') . '%');
            }

            // Tìm kiếm theo số điện thoại
            if ($request->has('phone_number')) {
                $query->where('phone_number', 'like', '%' . $request->input('phone_number') . '%');
            }

            // Tìm kiếm theo giới tính
            if ($request->has('gender')) {
                $query->where('gender', $request->input('gender'));
            }

            // Tìm kiếm theo chức vụ
            if ($request->has('position')) {
                $query->whereHas('position', function ($q) use ($request) {
                    $q->where('pos_name', $request->input('position'));
                });
            }

            // Tìm kiếm theo phòng ban
            if ($request->has('department')) {
                $query->whereHas('department', function ($q) use ($request) {
                    $q->where('dep_name', $request->input('department'));
                });
            }

            // Tìm kiếm theo chi nhánh
            if ($request->has('branch')) {
                $query->whereHas('branch', function ($q) use ($request) {
                    $q->where('bra_name', $request->input('branch'));
                });
            }

            // Thực hiện phân trang
            $employees = $query->paginate($perPage);

            // Tùy chỉnh dữ liệu phân trang để loại bỏ thông tin dư thừa
            $paginationData = [
                'current_page' => $employees->currentPage(), // trang đang được gọi
                'results' => $employees->items(), // dữ liệu của trang
                'per_page' => $employees->perPage(), // số lượng item của trang
                'total' => $employees->total(), // tổng số item
                'last_page' => $employees->lastPage(), // số của trang cuối cùng
            ];

            $message = $request->has('full_name') || $request->has('phone_number') ||
                $request->has('gender') || $request->has('position') ||
                $request->has('department') || $request->has('branch')
                ? 'Tìm kiếm nhân viên thành công'
                : 'Lấy danh sách nhân viên thành công';

            return response()->json([
                'success' => true,
                'message' => $message,
                'data' => $paginationData
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Có lỗi xảy ra: ' . $e->getMessage(),
            ], 500);
        }
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
            'position.permissions:id,name,route'
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
