<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateColony extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('colony', function (Blueprint $table) {
            $table->id();
            $table->string('queen');
            $table->timestamp('birthdate_queen');
            $table->string('type');
            $table->string('marqued');
            $table->timestamp('last_see')->nullable();
            $table->string('death_comment')->nullable();
            $table->integer('last_hive_id')->nullable();
            $table->timestamp('death_date')->nullable();
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
        Schema::dropIfExists('colony');
    }
}
