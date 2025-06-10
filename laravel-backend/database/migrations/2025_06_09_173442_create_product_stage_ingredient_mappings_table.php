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
        Schema::create('product_stage_ingredient_mappings', function (Blueprint $table) {
            $table->primary(['pro_code', 'pro_sta_code', 'ing_code']);
            $table->char('pro_code', 20);
            $table->char('pro_sta_code', 20);
            $table->char('ing_code', 20);
            $table->string('description', 255)->nullable();
            $table->boolean('is_visible_to_customize')->default(false);
            $table->decimal('quantity', 5, 2);
            $table->decimal('min_quantity', 5, 2);
            $table->decimal('max_quantity', 5, 2);

            $table->timestamps();

            $table->char('created_by_emp', 20);
            $table->char('updated_by_emp', 20)->nullable();
            $table->foreign('created_by_emp')->references('emp_code')->on('employees')
                    ->onDelete('restrict')->onUpdate('cascade');
            $table->foreign('updated_by_emp')->references('emp_code')->on('employees')
                    ->onDelete('restrict')->onUpdate('cascade');
            $table->foreign('pro_code')->references('pro_code')->on('products')
                    ->onDelete('restrict')->onUpdate('cascade');
            $table->foreign('pro_sta_code')->references('pro_sta_code')->on('product_stages')
                    ->onDelete('restrict')->onUpdate('cascade');
            $table->foreign('ing_code')->references('ing_code')->on('ingredients')
                    ->onDelete('restrict')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_stage_ingredient_mappings');
    }
};
