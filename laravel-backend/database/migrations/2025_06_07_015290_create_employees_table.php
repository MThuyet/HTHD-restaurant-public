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
        Schema::create('employees', function (Blueprint $table) {
            $table->char('emp_code', 20)->primary();
            $table->string('full_name', 60);
            $table->boolean('gender');
            $table->date('birthdate');
            $table->string('phone_number', 20)->unique();
            $table->string('address', 255);
            $table->string('identifier', 20)->unique();

            $table->string('username', 60);
            $table->string('password', 60);
            $table->string('old_password', 60)->nullable();
            $table->datetime('old_change_password')->nullable();

            $table->timestamps();
            $table->softDeletes();

            $table->char('bra_code', 20);
            $table->char('dep_code', 20);
            $table->char('pos_code', 20);
            $table->char('kit_code', 20)->nullable();
            $table->foreign('pos_code')->references('pos_code')->on('positions')
                  ->onDelete('restrict')->onUpdate('cascade');
            $table->foreign('bra_code')->references('bra_code')->on('branches')
                  ->onDelete('no action')->onUpdate('cascade');
            $table->foreign('kit_code')->references('kit_code')->on('kitchens')
                  ->onDelete('restrict')->onUpdate('cascade');
            $table->foreign('dep_code')->references('dep_code')->on('departments')
                  ->onDelete('restrict')->onUpdate('cascade');   

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};
