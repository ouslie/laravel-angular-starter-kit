<?php
namespace App\GraphQL\Mutations;

use Closure;
use App\Colony;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\Mutation;
use Rebing\GraphQL\Support\Facades\GraphQL;

class ColonyUpdateMutation extends Mutation
{
    protected $attributes = [
        'name' => 'colony_update'
    ];

    public function type(): Type
    {
        return GraphQL::type('Colony');
    }

    public function args(): array
    {
        return [
            'id' => ['name' => 'id', 'type' => Type::nonNull(Type::int())],
            'marqued' => ['name' => 'marqued', 'type' => Type::string()],
            'type' => ['name' => 'type', 'type' => Type::string()],
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $resolveInfo, Closure $getSelectFields)
    {

        $colony = Colony::find($args['id']);

        if(!$colony) {
            return null;
        }
        if(isset($args['marqued'])) $colony->marqued = $args['marqued'];
        if(isset($args['type'])) $colony->type = $args['type'];


        $colony->save();

        return $colony;
    }
}
