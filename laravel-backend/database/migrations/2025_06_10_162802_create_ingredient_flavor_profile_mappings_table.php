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
        Schema::create('ingredient_flavor_profile_mappings', function (Blueprint $table) {
            $table->primary(['ing_code', 'fla_pro_id']);
            $table->char('ing_code', 20);
            $table->unsignedBigInteger('fla_pro_id');
            $table->decimal('impact_radio', 3, 2);

            $table->timestamps();

            $table->string('created_by_emp', 20)->nullable();
            $table->string('updated_by_emp', 20)->nullable();
            $table->foreign('created_by_emp')->references('emp_code')->on('employees')->onUpdate('cascade')->onDelete('set null');
            $table->foreign('updated_by_emp')->references('emp_code')->on('employees')->onUpdate('cascade')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ingredient_flavor_profile_mappings');
    }
};
