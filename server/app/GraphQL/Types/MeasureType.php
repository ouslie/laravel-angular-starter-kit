<?php

namespace App\GraphQL\Types;

use App\Measure;
use App\Traits\Timestamps;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;
use Rebing\GraphQL\Support\Facades\GraphQL;

class MeasureType extends GraphQLType
{
    protected $attributes = [
        'name'          => 'Measure',
        'description'   => 'A type',
        'model'         => Measure::class,
    ];

    public function fields(): array
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'The id of the user',
            ],
            'colony_id' => [
                'type' => Type::int(),
                'description' => 'The name of user',
            ],
            'temperature' => [
                'type' => Type::string(),
                'description' => 'The name of user',
            ],
            'humidity' => [
                'type' => Type::string(),
                'description' => 'The name of user',
            ],
            'weight' => [
                'type' => Type::string(),
                'description' => 'The name of user',
            ],
            'created_at' => [
                'type' => Type::string(),
                'description' => 'The name of user',
                'resolve' => function ($root, $args) {return optional($root->created_at)->format('Y-m-d H:i:s');},
            ]

        ];
    }
}
