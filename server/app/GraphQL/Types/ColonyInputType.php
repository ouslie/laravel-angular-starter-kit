<?php
namespace App\GraphQL\Types;

use Rebing\GraphQL\Support\InputType;
use GraphQL\Type\Definition\Type;

class ColonyInputType extends InputType
{

    protected $attributes = [
        'name' => 'colonyInput',
        'description' => 'A review with a comment and a score (0 to 5)'
    ];

    public function fields(): array
    {
        return [
            'birthdate_queen' => [
                'type' => Type::string(),
                'description' => 'The queen of colony',
            ],
            'type' => [
                'type' => Type::string(),
                'description' => 'The queen of colony',
            ],
            'color' => [
                'type' => Type::string(),
                'description' => 'The queen of colony',
                'alias' => 'marqued'
            ],


            // 'hives' => [
            //     'type'          => Type::listOf(GraphQL::type('Hive')),
            //     'description'   => 'A list of posts written by the user',
            // ]
        ];
    }
}
