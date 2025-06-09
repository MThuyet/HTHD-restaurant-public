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
        Schema::create('branches', function (Blueprint $table) {
            $table->char('bra_code', 20)->primary();
            $table->string('bra_name', 60)->unique();
            $table->string('phone_number1', 20);
            $table->string('phone_number2', 20)->nullable();
            $table->string('email', 255);
            $table->time('open_time');
            $table->time('close_time');
            $table->string('address', 255);
            $table->string('frame_code', 255);
            $table->string('tax_code');

            $table->boolean('active')->default(true);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('branches');
    }
};
