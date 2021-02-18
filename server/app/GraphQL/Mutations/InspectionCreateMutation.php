<?php
namespace App\GraphQL\Mutations;

use Closure;
use App\Colony;
use App\Hive;
use App\Inspection;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Illuminate\Log\Logger;
use Illuminate\Support\Facades\Log;
use Rebing\GraphQL\Support\Mutation;
use Rebing\GraphQL\Support\Facades\GraphQL;

class InspectionCreateMutation extends Mutation
{
    protected $attributes = [
        'name' => 'inspection_create'
    ];

    public function type(): Type
    {
        return GraphQL::type('Inspection');
    }

    public function args(): array
    {
        return [
            'hive_id' => ['name' => 'hive_id', 'type' => Type::nonNull(Type::int())],
            'inspection' => ['name' => 'inspection', 'type' => GraphQL::type('InspectionInput')],
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $resolveInfo, Closure $getSelectFields)
    {
        $hive = Hive::findOrFail($args['hive_id']);

        $inspection = new Inspection;

        if($hive->colony->id) {
            $inspection->colony_id = $hive->colony->id;
            $inspection->fill($args['inspection']);
            if(!empty($args['inspection']['view_queen'])) {
                $hive->colony->update(['last_see' => now()]);
            }
            $inspection->save();
        }

        return $inspection;
    }
}
