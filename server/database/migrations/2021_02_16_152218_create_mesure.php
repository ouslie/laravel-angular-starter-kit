<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMesure extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hives_measure', function (Blueprint $table) {
            $table->foreignId('hive_id');
            $table->foreign('hive_id')->references('id')->on('hives')->onDelete('cascade');;
            $table->string('temperature')->nullable();
            $table->string('humidity')->nullable();
            $table->string('weight')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('hives_measure');
    }
}
