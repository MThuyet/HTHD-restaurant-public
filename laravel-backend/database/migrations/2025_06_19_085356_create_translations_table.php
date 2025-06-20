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
        Schema::create('translations', function (Blueprint $table) {
            $table->primary(['sys_table_name', 'row_identifier', 'column_name', 'lan_code']);
            $table->string('sys_table_name', 60);
            $table->string('row_identifier', 20);
            $table->string('column_name', 60);
            $table->string('translated_text', 255);
            
            $table->timestamps();

            $table->string('lan_code', 10);
            $table->foreign('lan_code')->references('lan_code')->on('languages')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('translations');
    }
};
