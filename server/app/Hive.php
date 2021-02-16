<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Hive extends Model
{
    public function measures()
    {
        return $this->hasMany(Measure::class);
    }
}
