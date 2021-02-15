<?php

use Illuminate\Database\Seeder;

class ApiariesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('apiaries')->insert([
            'name' => Str::random(10),
            'user_id' => 1,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('apiaries')->insert([
            'name' => Str::random(10),
            'user_id' => 1,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('apiaries')->insert([
            'name' => Str::random(10),
            'user_id' => 2,
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
