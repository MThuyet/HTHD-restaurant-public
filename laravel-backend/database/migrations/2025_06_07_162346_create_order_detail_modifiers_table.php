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
        Schema::create('order_detail_modifiers', function (Blueprint $table) {
            $table->primary(['ord_det_code', 'ing_code']);
            $table->char('ord_det_code', 26);
            $table->char('ing_code', 20);
            $table->decimal('price', 10, 2)->nullable();

            $table->enum('modifier', ['ADD', 'SUBTRACT']);
            $table->decimal('quantity', 3, 2)->nullable();

            $table->timestamps();
           
            $table->foreign('ord_det_code')->references('ord_det_code')->on('order_details')
                  ->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('ing_code')->references('ing_code')->on('ingredients')
                  ->onDelete('restrict')->onUpdate('restrict');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_detail_modifiers');
    }
};
