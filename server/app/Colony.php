<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Colony extends Model
{
    protected $table    = "colony";

    protected $guarded = ['id'];


    public function measures()
    {
      return $this->hasMany(Measure::class, 'colony_id', 'id');
    }

}
