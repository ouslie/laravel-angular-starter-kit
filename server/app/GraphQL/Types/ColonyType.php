<?php

namespace App\GraphQL\Types;

use App\Colony;
use App\Traits\Timestamps;
use GraphQL\Type\Definition\Type;
use App\Abstracts\TypeAbstract as GraphQLType;
use Rebing\GraphQL\Support\Facades\GraphQL;

class ColonyType extends GraphQLType
{
    use Timestamps;

    protected $attributes = [
        'name'          => 'Colony',
        'description'   => 'A type',
        'model'         => Colony::class,
    ];

    public function fields(): array
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'The id of the colony',
            ],
            'birthdate_queen' => [
                'type' => Type::string(),
                'description' => 'The queen of colony',
            ],
            'queen' => [
                'type' => Type::string(),
                'description' => 'The queen of colony',
            ],
            'type' => [
                'type' => Type::string(),
                'description' => 'The queen of colony',
            ],
            'marqued' => [
                'type' => Type::string(),
                'description' => 'The queen of colony',
            ],
            'last_see' => [
                'type' => Type::string(),
                'description' => 'The queen of colony',
            ],
            'hive_id' => [
                'type' => Type::int(),
                'description' => 'The hive_id of colony',
            ],

            'hives' => [
                'type'          => Type::listOf(GraphQL::type('Hive')),
                'description'   => 'A list of posts written by the user',
            ]
        ];
    }
}
