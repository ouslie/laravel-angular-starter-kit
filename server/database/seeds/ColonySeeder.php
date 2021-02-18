<?php

use Illuminate\Database\Seeder;

class ColonySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('colony')->insert([
            'queen'      => 'CARNICA',
            'birthdate_queen' => now(),
        ]);

    }
}
