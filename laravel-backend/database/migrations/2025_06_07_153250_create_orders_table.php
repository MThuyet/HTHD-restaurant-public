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
        Schema::create('orders', function (Blueprint $table) {
            $table->ulid('ord_code')->primary();
            $table->enum('status', ['UNPAID', 'PAID'])->default('UNPAID');
            $table->enum('order_mode', ['DINE_IN', 'PRE_ORDER'])->default('DINE_IN');
            $table->enum('payment_method', ['CASH', 'CARD', 'TRANSFER']);

            $table->datetime('canceled_at')->nullable();
            $table->string('canceled_reason', 60)->nullable();

            $table->timestamps();
            $table->softDeletes();

            $table->string('cus_phone_number', 20);
            $table->char('res_code', 26);
            $table->char('bra_code', 20);
            $table->char('tab_code', 20);
            $table->char('created_by_emp', 20);
            $table->char('updated_by_emp', 20)->nullable();
            $table->char('canceled_by_emp', 10)->nullable();
            $table->foreign('res_code')->references('res_code')->on('reservations')
                  ->onDelete('restrict')->onUpdate('cascade');
            $table->foreign('cus_phone_number')->references('phone_number')->on('customers')
                  ->onDelete('no action')->onUpdate('no action');
            $table->foreign('bra_code')->references('bra_code')->on('branches')
                  ->onDelete('restrict')->onUpdate('cascade');
            $table->foreign('tab_code')->references('tab_code')->on('tables')
                  ->onDelete('restrict')->onUpdate('cascade');
            $table->foreign('created_by_emp')->references('emp_code')->on('employees')
                  ->onDelete('restrict')->onUpdate('cascade');
            $table->foreign('updated_by_emp')->references('emp_code')->on('employees')
                  ->onDelete('no action')->onUpdate('cascade');
            $table->foreign('canceled_by_emp')->references('emp_code')->on('employees')
                  ->onDelete('restrict')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
