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
            Schema::create('order_details', function (Blueprint $table) {
                  $table->ulid('ord_det_code')->primary();
                  $table->decimal('quantity', 5, 2);
                  $table->decimal('price', 10, 2);
                  $table->enum('status', ['HOLD', 'WAITING', 'PREPARING', 'READY', 'SERVED', 'CANCELLED'])->default('WAITING');
                  $table->string('note', 125)->nullable();
                  $table->enum('ordered_by_type', ['CUSTOMER', 'EMPLOYEE']);
                  $table->string('ordered_by', 20);
                  $table->char('parent_ord_det_code')->nullable();

                  $table->timestamps();
                  $table->softDeletes();

                  $table->char('ord_code', 26);
                  $table->char('pro_code', 20)->nullable();
                  $table->char('com_pro_code', 20)->nullable();

                  $table->char('waiting_at')->nullable();

                  $table->char('prepared_by_emp', 10)->nullable();
                  $table->datetime('prepared_at')->nullable();

                  $table->char('ready_by_emp', 10)->nullable();
                  $table->datetime('ready_at')->nullable();

                  $table->char('served_by_emp', 10)->nullable();
                  $table->datetime('served_at')->nullable();

                  $table->char('canceled_by_emp', 10)->nullable();
                  $table->text('canceled_reason')->nullable();
                  $table->datetime('canceled_at')->nullable();

                  $table->foreign('ord_code')->references('ord_code')->on('orders')->onDelete('cascade');
                  $table->foreign('pro_code')->references('pro_code')->on('products')->onDelete('set null');
                  $table->foreign('com_pro_code')->references('com_pro_code')->on('combo_products')->onDelete('set null');
                  $table->foreign('prepared_by_emp')->references('emp_code')->on('employees')->onDelete('set null');
                  $table->foreign('ready_by_emp')->references('emp_code')->on('employees')->onDelete('set null');
                  $table->foreign('served_by_emp')->references('emp_code')->on('employees')->onDelete('set null');
                  $table->foreign('canceled_by_emp')->references('emp_code')->on('employees')->onDelete('set null');
                  $table->foreign('parent_ord_det_code')->references('ord_det_code')->on('order_details')->onDelete('set null');
            });
      }

      /**
       * Reverse the migrations.
       */
      public function down(): void
      {
            Schema::dropIfExists('order_details');
      }
};
