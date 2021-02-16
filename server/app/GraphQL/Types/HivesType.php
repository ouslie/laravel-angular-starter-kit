<?php
namespace App\GraphQL\Types;

use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;
use Rebing\GraphQL\Support\Facades\GraphQL;

class HivesType extends GraphQLType
{
    protected $attributes = [
        'name'          => 'Hive',
        'description'   => 'A hive',
        'model'         => Hive::class,
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
                'description' => 'The email of user',
            ],

            'colony' => [
                'type'          => GraphQL::type('Colony'),
                'description'   => 'A list of posts written by the user',
            ]
        ];
    }
}
