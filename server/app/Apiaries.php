<?php

namespace App;

use App\Scopes\UserScope;
use Illuminate\Database\Eloquent\Model;

class Apiaries extends Model
{
    protected $fillable = [
        'name',
    ];

    protected static function booted()
    {
        static::addGlobalScope(new UserScope);
    }

    public function hives()
    {
      return $this->hasMany(Hive::class, 'apiary_id', 'id');
    }

}
