<?php

namespace App\Http\Controllers\Branch;

use App\Http\Controllers\Controller;
use App\Models\Branch\Branch;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

class BranchController extends Controller
{
    // lấy danh sách chi nhánh
    public function index(Request $request)
    {
        // Lấy tham số phân trang từ url
        // số chi nhánh trên 1 trang (LIMIT = per_page)
        $perPage = $request->query('per_page', 1); // Mặc định 1

        // về trang hiện tại, tham số này được function paginate tự động kiểm tra dựa vào params page trong url
        // Mặc định localhost:8000/api/branches sẽ tương tự với localhost:8000/api/branches?page=1&per_page=1

        $branches = Branch::select(
            'bra_code',
            'bra_name',
            'phone_number1',
            'phone_number2',
            'email',
            'open_time',
            'close_time',
            'address',
            'frame_code',
            'tax_code',
            'active',
            'created_at',
            'updated_at'
        )
            ->whereNull('deleted_at') // Chỉ lấy chi nhánh chưa bị xóa
            ->paginate($perPage);

        // tùy chỉnh dữ liệu phân trang
        $paginationData = [
            'current_page' => $branches->currentPage(),
            'results' => $branches->items(),
            'per_page' => $branches->perPage(),
            'total' => $branches->total(),
            'last_page' => $branches->lastPage(),
        ];

        // trả về dữ liệu đã phân trang
        return response()->json([
            'success' => true,
            'message' => 'Lấy danh sách chi nhánh thành công',
            'data' => $paginationData
        ]);
    }

    // thêm chi nhánh
    public function store(Request $request)
    {
        try {
            // Validation với thông báo tùy chỉnh
            $validated = $request->validate([
                'bra_name' => 'required|string|max:100|unique:branches,bra_name',
                'phone_number1' => 'required|string|max:20|regex:/^([0-9\s\-\+\(\)]*)$/',
                'phone_number2' => 'nullable|string|max:20|regex:/^([0-9\s\-\+\(\)]*)$/',
                'email' => 'nullable|email|max:100|unique:branches,email',
                'open_time' => 'nullable|date_format:H:i',
                'close_time' => 'nullable|date_format:H:i|after:open_time',
                'address' => 'nullable|string|max:255',
                'frame_code' => 'nullable|string|max:20',
                'tax_code' => 'nullable|string|max:30',
                'active' => 'nullable|boolean',
            ], [
                'bra_name.required' => 'Tên chi nhánh không được để trống',
                'bra_name.unique' => 'Tên chi nhánh đã tồn tại',
                'phone_number1.required' => 'Số điện thoại không được để trống',
                'phone_number1.regex' => 'Số điện thoại không hợp lệ',
                'email.email' => 'Email không đúng định dạng',
                'email.unique' => 'Email đã tồn tại',
                'close_time.after' => 'Giờ đóng cửa phải sau giờ mở cửa',
            ]);

            // Sử dụng transaction để khi có bất kỳ lỗi nào thì sẽ rollback tất cả các thay đổi đã thực hiện, nếu có nhiều người dùng cùng thao tác sẽ đảm bảo các thao tác ko ảnh hưởng lẫn nhau
            return DB::transaction(function () use ($validated) {
                $bra_code = generatePrimaryCode('branches', 'bra_code', 'BRA', 3);

                // tạo chi nhánh với các dữ liệu đã được validate thành công trả về
                $branch = Branch::create([
                    'bra_code' => $bra_code,
                    'bra_name' => $validated['bra_name'],
                    'phone_number1' => $validated['phone_number1'],
                    'phone_number2' => $validated['phone_number2'] ?? null,
                    'email' => $validated['email'] ?? null,
                    'open_time' => $validated['open_time'] ?? null,
                    'close_time' => $validated['close_time'] ?? null,
                    'address' => $validated['address'] ?? null,
                    'frame_code' => $validated['frame_code'] ?? null,
                    'tax_code' => $validated['tax_code'] ?? null,
                    'active' => $validated['active'] ?? true,
                ]);

                return response()->json([
                    'success' => true,
                    'message' => 'Thêm chi nhánh thành công',
                    'data' => $branch
                ], 201);
            });
        } catch (\Illuminate\Validation\ValidationException $e) {
            $errors = $e->errors();

            // array_values: chuyển đổi mảng kết hợp thành mảng tuần tự (loại bỏ các key)
            // lấy phần tử lỗi đầu tiên (kiểu dữ liệu của phần tử là mảng) của mảng lỗi, sau đó lại truy cập vô phần tử lỗi thứ nhất để lấy message lỗi từ validate
            $firstErrorMessage = array_values($errors)[0][0];

            return response()->json([
                'success' => false,
                'message' => $firstErrorMessage
            ], 422);
        } catch (\Exception $e) {
            // xử lý các lỗi khác
            return response()->json([
                'success' => false,
                'message' => 'Có lỗi xảy ra khi thêm chi nhánh',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    // xem chi tiết chi nhánh
    public function show(string $bra_code)
    {
        try {
            $branch = Branch::select(
                'bra_code',
                'bra_name',
                'phone_number1',
                'phone_number2',
                'email',
                'open_time',
                'close_time',
                'address',
                'frame_code',
                'tax_code',
                'active',
                'created_at',
                'updated_at'
            )
                ->whereNull('deleted_at')
                ->findOrFail($bra_code);

            return response()->json([
                'success' => true,
                'message' => 'Lấy chi tiết chi nhánh thành công',
                'data' => $branch
            ]);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Không tìm thấy chi nhánh'
            ], 404);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Có lỗi xảy ra khi lấy thông tin chi nhánh',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    // cập nhật chi nhánh
    public function update(Request $request, string $bra_code)
    {
        try {
            $branch = Branch::whereNull('deleted_at')
                ->findOrFail($bra_code);

            // Validation với thông báo tùy chỉnh
            $validated = $request->validate([
                'bra_name' => 'string|max:100|unique:branches,bra_name,' . $bra_code . ',bra_code',
                'phone_number1' => 'string|max:20|regex:/^([0-9\s\-\+\(\)]*)$/',
                'phone_number2' => 'nullable|string|max:20|regex:/^([0-9\s\-\+\(\)]*)$/',
                'email' => 'nullable|email|max:100|unique:branches,email,' . $bra_code . ',bra_code',
                'open_time' => 'nullable|date_format:H:i',
                'close_time' => 'nullable|date_format:H:i|after:open_time',
                'address' => 'nullable|string|max:255',
                'frame_code' => 'nullable|string|max:20',
                'tax_code' => 'nullable|string|max:30',
                'active' => 'nullable|boolean',
            ], [
                'bra_name.unique' => 'Tên chi nhánh đã tồn tại',
                'phone_number1.regex' => 'Số điện thoại không hợp lệ',
                'email.email' => 'Email không đúng định dạng',
                'email.unique' => 'Email đã tồn tại',
                'close_time.after' => 'Giờ đóng cửa phải sau giờ mở cửa',
            ]);

            return DB::transaction(function () use ($branch, $validated) {
                $branch->update([
                    'bra_name' => $validated['bra_name'] ?? $branch->bra_name,
                    'phone_number1' => $validated['phone_number1'] ?? $branch->phone_number1,
                    'phone_number2' => $validated['phone_number2'] ?? $branch->phone_number2,
                    'email' => $validated['email'] ?? $branch->email,
                    'open_time' => $validated['open_time'] ?? $branch->open_time,
                    'close_time' => $validated['close_time'] ?? $branch->close_time,
                    'address' => $validated['address'] ?? $branch->address,
                    'frame_code' => $validated['frame_code'] ?? $branch->frame_code,
                    'tax_code' => $validated['tax_code'] ?? $branch->tax_code,
                    'active' => isset($validated['active']) ? $validated['active'] : $branch->active,
                ]);

                return response()->json([
                    'success' => true,
                    'message' => 'Cập nhật chi nhánh thành công',
                    'data' => $branch
                ]);
            });
        } catch (\Illuminate\Validation\ValidationException $e) {
            $errors = $e->errors();
            $firstErrorMessage = array_values($errors)[0][0];

            return response()->json([
                'success' => false,
                'message' => $firstErrorMessage
            ], 422);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Không tìm thấy chi nhánh'
            ], 404);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Có lỗi xảy ra khi cập nhật chi nhánh',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    // xóa chi nhánh
    public function destroy(string $bra_code)
    {
        try {
            $branch = Branch::whereNull('deleted_at')
                ->findOrFail($bra_code);

            // Kiểm tra xem chi nhánh có đang được sử dụng không
            $hasRelatedData = $this->checkBranchUsage($branch);

            if ($hasRelatedData) {
                return response()->json([
                    'success' => false,
                    'message' => 'Không thể xóa chi nhánh vì đang có dữ liệu liên quan'
                ], 400);
            }

            return DB::transaction(function () use ($branch) {
                $branch->delete();

                return response()->json([
                    'success' => true,
                    'message' => 'Xóa chi nhánh thành công'
                ]);
            });
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Không tìm thấy chi nhánh'
            ], 404);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Có lỗi xảy ra khi xóa chi nhánh',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    // hàm kiểm tra xem chi nhánh có đang được sử dụng không
    private function checkBranchUsage(Branch $branch): bool
    {
        // Kiểm tra nhân viên trực tiếp thuộc chi nhánh
        $hasEmployees = DB::table('employees')
            ->where('bra_code', $branch->bra_code)
            ->exists();

        // Kiểm tra mapping nhân viên với chi nhánh
        $hasEmployeeMappings = DB::table('employee_branch_mappings')
            ->where('bra_code', $branch->bra_code)
            ->exists();

        // Kiểm tra đơn hàng
        $hasOrders = DB::table('orders')
            ->where('bra_code', $branch->bra_code)
            ->exists();

        // Kiểm tra đặt bàn
        $hasReservations = DB::table('reservations')
            ->where('bra_code', $branch->bra_code)
            ->exists();

        // Kiểm tra mapping sản phẩm với chi nhánh
        $hasProductMappings = DB::table('product_branch_mappings')
            ->where('bra_code', $branch->bra_code)
            ->exists();

        // Kiểm tra mapping danh mục sản phẩm với chi nhánh
        $hasProductCategoryMappings = DB::table('product_category_branch_mappings')
            ->where('bra_code', $branch->bra_code)
            ->exists();

        // Kiểm tra mapping combo sản phẩm với chi nhánh
        $hasComboProductMappings = DB::table('combo_product_branch_mappings')
            ->where('bra_code', $branch->bra_code)
            ->exists();

        // Kiểm tra floors
        $hasFloors = DB::table('floors')
            ->where('bra_code', $branch->bra_code)
            ->exists();

        // Kiểm tra departments
        $hasDepartments = DB::table('departments')
            ->where('bra_code', $branch->bra_code)
            ->exists();

        // Kiểm tra kitchens
        $hasKitchens = DB::table('kitchens')
            ->where('bra_code', $branch->bra_code)
            ->exists();

        return $hasEmployees || $hasEmployeeMappings || $hasOrders || $hasReservations ||
            $hasProductMappings || $hasProductCategoryMappings || $hasComboProductMappings ||
            $hasFloors || $hasDepartments || $hasKitchens;
    }
}
