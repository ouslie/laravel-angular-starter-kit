<?php
namespace App\GraphQL\Queries;

use App\Hive;
use Closure;
use Rebing\GraphQL\Support\Facades\GraphQL;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Query;


class HiveQuery extends Query
{
    protected $attributes = [
        'name' => 'hive',
        'description' => 'A query'
    ];

    public function type(): Type
    {
        return GraphQL::type('Hive');
    }

    public function args(): array
    {
        return [
            'id' => [
                'name' => 'id',
                'type' => Type::int()
            ]
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $resolveInfo, Closure $getSelectFields)
    {
        return Hive::where('id', $args['id'])->first();
    }
}
