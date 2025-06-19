<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('position_permission_mappings', function (Blueprint $table) {
            $table->id();
            $table->char('pos_code', 20); 
            $table->foreign('pos_code')->references('pos_code')->on('positions')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('per_id')->constrained('permissions')->onUpdate('cascade')->onDelete('cascade');
            
            $table->timestamps();

        });
    }

    public function down(): void
    {
        Schema::dropIfExists('position_permission_mappings');
    }
};
