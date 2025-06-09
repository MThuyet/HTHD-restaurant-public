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
        Schema::create('customers', function (Blueprint $table) {
            $table->string('phone_number')->primary();
            $table->string('full_name', 60);
            
            $table->timestamps();
            $table->softDeletes();

            $table->char('created_by_emp', 20)->nullable();
            $table->char('updated_by_emp', 20)->nullable();
            $table->foreign('created_by_emp')->references('emp_code')->on('employees')
                  ->onDelete('set null')->onUpdate('set null');
            $table->foreign('updated_by_emp')->references('emp_code')->on('employees')
                  ->onDelete('set null')->onUpdate('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customers');
    }
};
