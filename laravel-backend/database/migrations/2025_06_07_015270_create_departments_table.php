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
        Schema::create('departments', function (Blueprint $table) {
            $table->char('dep_code', 20)->primary();
            $table->string('dep_name', 60)->unique();
            $table->string('description', 255)->nullable();

            $table->timestamps();
            $table->softDeletes();
            
            $table->char('bra_code', 20);
            $table->foreign('bra_code')->references('bra_code')->on('branches')
                  ->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('departments');
    }
};
