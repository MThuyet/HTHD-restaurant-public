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
        Schema::create('ingredient_nutrition_mappings', function (Blueprint $table) {
            $table->primary(['ing_code', 'nut_code']);
            $table->char('ing_code', 20);
            $table->char('nut_code', 20);
            $table->decimal('value', 8, 2);

            $table->timestamps();

            $table->char('created_by_emp', 20);
            $table->char('updated_by_emp', 20)->nullable();
            $table->foreign('ing_code')->references('ing_code')->on('ingredients')
                  ->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('nut_code')->references('nut_code')->on('nutrition')
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
        Schema::dropIfExists('ingredient_nutrition_mappings');
    }
};
