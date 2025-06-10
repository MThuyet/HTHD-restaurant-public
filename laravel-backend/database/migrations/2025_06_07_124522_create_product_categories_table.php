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
        Schema::create('product_categories', function (Blueprint $table) {
            $table->char('pro_cat_code', 20)->primary();
            $table->string('pro_cat_name', 60)->unique();
            $table->string('description', 255);
            
            $table->timestamps();
            $table->softDeletes();

            $table->char('created_by_emp', 20);
            $table->char('updated_by_emp', 20)->nullable();
            $table->foreign('created_by_emp')->references('emp_code')->on('employees')
                  ->onDelete('restrict')->onUpdate('cascade');
            $table->foreign('updated_by_emp')->references('emp_code')->on('employees')
                  ->onDelete('restrict')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_categories');
    }
};
