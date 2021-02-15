<?php

use Illuminate\Database\Seeder;

class HivesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('hives')->insert([
            'apiary_id' => 1,
            'name' => 'ruche 1',
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('hives')->insert([
            'apiary_id' => 1,
            'name' => 'ruche 12',
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('hives')->insert([
            'apiary_id' => 2,
            'name' => 'ruche 23',
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
