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
        Schema::create('product_flavor_profile_mappings', function (Blueprint $table) {
            $table->primary(['pro_code', 'fla_pro_id']);
            $table->char('pro_code', 20);
            $table->unsignedBigInteger('fla_pro_id');
            $table->enum('level', ['NONE', 'LOW', 'MEDIUM', 'HIGH', 'HIGHEST'])->default('MEDIUM')->comment('NONE: 0, LOW: 0.5, MEDIUM: 1, HIGH: 1.5, HIGHEST: 2');
            $table->boolean('allow_custom')->default(false);

            $table->timestamps();

            $table->foreign('pro_code')->references('pro_code')->on('products')
                ->onDelete('cascade')->onDelete('cascade');
            $table->foreign('fla_pro_id')->references('id')->on('flavor_profiles')
                ->onDelete('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_flavor_profile_mappings');
    }
};
