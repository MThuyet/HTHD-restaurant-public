<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('employee_permission_mappings', function (Blueprint $table) {
            $table->id();
            $table->string('emp_code', 20); // Mã nhân viên
            $table->foreignId('permission_id')->constrained('permissions')->onDelete('cascade');
            $table->timestamps();

            // Tạo khóa ngoại liên kết với bảng employees
            $table->foreign('emp_code')
                ->references('emp_code')
                ->on('employees')
                ->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('employee_permission_mappings');
    }
};
