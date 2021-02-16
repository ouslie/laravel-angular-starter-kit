<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Measure extends Model
{
    protected $table    = "hives_measure";
    protected $fillable = [ 'hive_id', 'temperature', 'humidity', 'weight' ];
}
