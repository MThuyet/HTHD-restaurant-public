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
        Schema::create('reservations', function (Blueprint $table) {
            $table->ulid('res_code')->primary();
            $table->enum('res_type', ['WALK_IN', 'BOOKING'])->default('WALK_IN');
            $table->enum('status', ['PENDING_CONFIRMATION', 'CONFIRMED', 'CANCELLED', 'SEATED', 'COMPLETED']);
            $table->char('booking_code', 20)->unique()->nullable();
            $table->tinyInteger('people_numbers');
            $table->date('res_date');
            $table->time('res_time');
            $table->text('note')->nullable();
            $table->datetime('confirmed_at')->nullable();
            $table->datetime('canceled_at')->nullable();
            $table->text('canceled_reason')->nullable();

            $table->boolean('active')->default(true);
            $table->timestamps();
            $table->softDeletes();

            $table->string('cus_phone_number', 20);
            $table->char('bra_code', 20);
            $table->char('tab_code', 20)->nullable();
            $table->char('created_booking_code_by_emp', 10)->nullable();
            $table->char('canceled_by_emp', 10)->nullable();
            $table->foreign('cus_phone_number')->references('phone_number')->on('customers')
                  ->onDelete('no action')->onUpdate('no action');
            $table->foreign('bra_code')->references('bra_code')->on('branches')
                  ->onDelete('restrict')->onUpdate('cascade');
            $table->foreign('tab_code')->references('tab_code')->on('tables')
                  ->onDelete('restrict')->onUpdate('cascade');
            $table->foreign('created_booking_code_by_emp')->references('emp_code')->on('employees')
                  ->onDelete('restrict')->onUpdate('cascade');
            $table->foreign('canceled_by_emp')->references('emp_code')->on('employees')
                  ->onDelete('restrict')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservations');
    }
};
