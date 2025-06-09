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
        Schema::create('tables', function (Blueprint $table) {
            $table->char('tab_code', 20)->primary();
            $table->string('tab_name', 25 );
            $table->unsignedTinyInteger('capacity')->default(2);
            $table->unsignedTinyInteger('pad_length')->default(2);
            $table->enum('status', ['EMPTY', 'OCCUPIED', 'RESERVED', 'CLEANING', 'MAINTENANCE', 'UNAVAILABLE'])->default('EMPTY');
            $table->boolean('is_name_customized')->default(true);
            
            $table->timestamps();

            $table->char('are_code', 20);
            $table->foreign('are_code')->references('are_code')->on('areas')
                  ->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tables');
    }
};
