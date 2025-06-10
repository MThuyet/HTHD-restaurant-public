<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('employee_branch_mappings', function (Blueprint $table) {
            $table->primary(['emp_code', 'bra_code']);
            $table->char('emp_code', 20);
            $table->char('bra_code', 20);
            $table->boolean('is_main_branch')->default(false);

            $table->timestamps();

            $table->char('created_by_emp', 20);
            $table->char('updated_by_emp', 20)->nullable();
            $table->foreign('emp_code')->references('emp_code')->on('employees')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('bra_code')->references('bra_code')->on('branches')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('created_by_emp')->references('emp_code')->on('employees')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('updated_by_emp')->references('emp_code')->on('employees')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employee_branch_mappings');
    }
};
