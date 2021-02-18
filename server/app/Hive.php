<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Hive extends Model
{
    public function measures()
    {
        return $this->hasMany(Measure::class);
    }

    public function colony() :BelongsTo
    {
      return $this->belongsTo(Colony::class, 'colony_id', 'id');
    }
}
