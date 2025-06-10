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
        Schema::create('product_costs', function (Blueprint $table) {
            $table->primary(['pro_code', 'calculate_at']);
            $table->char('pro_code', 20);
            $table->datetime('calculate_at');
            $table->decimal('total_cost', 15, 2);
            $table->decimal('margin_percent', 5, 2);
            $table->decimal('final_price', 15, 2);

            $table->timestamps();

            $table->char('created_by_emp', 20);
            $table->char('updated_by_emp', 20)->nullable();
            $table->foreign('pro_code')->references('pro_code')->on('products')
                  ->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('product_costs');
    }
};
