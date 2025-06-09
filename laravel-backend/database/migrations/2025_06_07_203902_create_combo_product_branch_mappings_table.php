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
        Schema::create('combo_product_branch_mappings', function (Blueprint $table) {
            $table->primary(['bra_code', 'com_pro_code']);
            $table->char('com_pro_code', 20);
            $table->char('bra_code', 20);
            $table->boolean('active')->default(true);

            $table->timestamps();

            $table->char('created_by_emp', 20);
            $table->char('updated_by_emp', 20)->nullable();
            $table->foreign('bra_code')->references('bra_code')->on('branches')
                  ->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('com_pro_code')->references('com_pro_code')->on('combo_products')
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
        Schema::dropIfExists('combo_product_branch_mappings');
    }
};
