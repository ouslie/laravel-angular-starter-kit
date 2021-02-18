<?php
namespace App\GraphQL\Queries;

use App\Colony;
use Closure;
use Rebing\GraphQL\Support\Facades\GraphQL;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Query;


class ColonyQuery extends Query
{
    protected $attributes = [
        'name' => 'colony',
        'description' => 'A query'
    ];

    public function type(): Type
    {
        return GraphQL::type('Colony');
    }

    public function args(): array
    {
        return [
            'colony_id' => [
                'name' => 'colony_id',
                'type' => Type::NonNull(Type::int())
            ]
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $resolveInfo, Closure $getSelectFields)
    {
        return Colony::find($args['colony_id']);

    }
}
