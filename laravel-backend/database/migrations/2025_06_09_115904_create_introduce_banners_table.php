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
        Schema::create('introduce_banners', function (Blueprint $table) {
            $table->id();
            $table->string('image', 255);
            $table->date('start_date')->nullable();
            $table->time('time_start')->nullable();
            $table->date('end_date')->nullable();
            $table->time('end_start')->nullable();
            $table->string('description', 255);

            $table->unsignedTinyInteger('sequence')->default(0);

            $table->boolean('active')->default(true);
            $table->timestamps();
            $table->softDeletes();

            $table->char('created_by_emp', 20);
            $table->char('updated_by_emp', 20)->nullable();
            $table->foreign('created_by_emp')->references('emp_code')->on('employees')
                ->onDelete('no action')->onUpdate('cascade');
            $table->foreign('updated_by_emp')->references('emp_code')->on('employees')
                ->onDelete('no action')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('introduce_banners');
    }
};
