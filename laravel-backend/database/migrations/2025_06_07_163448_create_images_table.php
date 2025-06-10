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
        Schema::create('images', function (Blueprint $table) {
            $table->id();
            $table->string('entity_type', 60);
            $table->string('entity_code', 60);
            $table->string('image_url', 255)->unique();
            $table->string('slug', 255)->unique();
            $table->boolean('main_image')->default(false);
            $table->string('description', 255)->nullable();

            $table->timestamps();

            $table->char('created_by_emp', 20);
            $table->char('updated_by_emp', 20)->nullable();
            $table->foreign('created_by_emp')->references('emp_code')->on('employees')
                  ->onDelete('restrict')->onUpdate('cascade');
            $table->foreign('updated_by_emp')->references('emp_code')->on('employees')
                  ->onDelete('restrict')->onUpdate('cascade');

            $table->index(['entity_type', 'entity_code'], 'idx_entity_type_code');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('images');
    }
};
