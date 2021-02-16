<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Hive;
use App\Measure;

class MeasureController extends Controller
{
    public function add(Request $request)
    {
        $hive = Hive::where('apiKey', $request->input('apiKey'))->first();
        if($hive) {
            $measure = new Measure();
            $measure->hive_id     = $hive->id;
            $measure->temperature =  $request->input('temperature');
            $measure->humidity    =  $request->input('humidity');
            $measure->weight      =  $request->input('weight');
            $measure->save();

            $request->headers->set('Accept', 'application/json');
            return true;
        } else {
            $request->headers->set('Accept', 'application/json');
            return 'Token error';
        }
    }
}
