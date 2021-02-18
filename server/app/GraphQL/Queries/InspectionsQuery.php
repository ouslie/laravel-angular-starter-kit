<?php
namespace App\GraphQL\Queries;

use App\Inspection;
use Closure;
use Rebing\GraphQL\Support\Facades\GraphQL;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Query;


class InspectionsQuery extends Query
{
    protected $attributes = [
        'name' => 'inspections',
        'description' => 'A query'
    ];

    public function type(): Type
    {
        return Type::listOf(GraphQL::type('Inspection'));
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
        return Inspection::where('colony_id', $args['colony_id'])->get();
    }
}
