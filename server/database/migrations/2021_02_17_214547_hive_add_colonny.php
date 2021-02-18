<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class HiveAddColonny extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('hives', function (Blueprint $table) {
            $table->foreignId('colony_id')->nullable();
            $table->foreign('colony_id')->references('id')->on('colony');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('hives', function (Blueprint $table) {
            $table->dropColumn('colony_id');
        });
    }
}
