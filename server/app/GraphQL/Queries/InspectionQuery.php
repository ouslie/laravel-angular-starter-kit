<?php
namespace App\GraphQL\Queries;

use App\Inspection;
use Closure;
use Rebing\GraphQL\Support\Facades\GraphQL;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Query;


class InspectionQuery extends Query
{
    protected $attributes = [
        'name' => 'inspection',
        'description' => 'A query'
    ];

    public function type(): Type
    {
        return GraphQL::type('Inspection');
    }

    public function args(): array
    {
        return [
            'id' => [
                'name' => 'id',
                'type' => Type::NonNull(Type::int())
            ]
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $resolveInfo, Closure $getSelectFields)
    {
        return Inspection::find($args['id']);
    }
}
