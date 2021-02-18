<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Inspection extends Model
{
    protected $guarded = ['id'];
    protected $table = 'inspection';

    public function colony()
    {
        return $this->belongsTo(Colony::class, 'colony_id', 'id');
    }
}
