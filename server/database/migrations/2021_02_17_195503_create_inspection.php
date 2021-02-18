<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInspection extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inspection', function (Blueprint $table) {
            $table->id();
            $table->foreignId('colony_id');
            $table->foreign('colony_id')->references('id')->on('colony')->onDelete('cascade');
            $table->datetime('date')->default(now());
            $table->integer('status')->nullable();
            $table->text('notes')->nullable();
            $table->boolean('need_attention')->nullable();
            $table->integer('frame_brood')->nullable();
            $table->integer('frame_honey')->nullable();
            $table->integer('frame_pollen')->nullable();
            $table->boolean('agressive')->nullable();
            $table->boolean('view_queen')->nullable();
            $table->boolean('view_cell')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('inspection');
    }
}
