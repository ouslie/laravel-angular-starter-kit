<?php

namespace App\GraphQL\Types;

use App\Apiaries;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;
use Rebing\GraphQL\Support\Facades\GraphQL;

class ApiaryType extends GraphQLType
{
    protected $attributes = [
        'name'          => 'Apiary',
        'description'   => 'A type',
        'model'         => Apiaries::class,
    ];

    public function fields(): array
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'The id of the user',
            ],
            'name' => [
                'type' => Type::string(),
                'description' => 'The name of user',
            ],

            'hives' => [
                'type'          => Type::listOf(GraphQL::type('Hive')),
                'description'   => 'A list of posts written by the user',
            ]
        ];
    }
}
