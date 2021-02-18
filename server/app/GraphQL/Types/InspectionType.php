<?php

namespace App\GraphQL\Types;

use App\Inspection;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;
use Rebing\GraphQL\Support\Facades\GraphQL;

class InspectionType extends GraphQLType
{
    protected $attributes = [
        'name'          => 'Inspection',
        'description'   => 'A type',
        'model'         => Inspection::class,
    ];

    public function fields(): array
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'The id of the user',
            ],
            'colony_id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'The name of user',
            ],
            'date' => [
                'type' => Type::string(),
                'description' => 'The name of user',
            ],
            'notes' => [
                'type' => Type::string(),
                'description' => 'The name of user',
            ],
            'status' => [
                'type' => Type::int(),
                'description' => 'The name of user',
            ],
            'view_queen' => [
                'type' => Type::boolean(),
                'description' => 'The name of user',
            ],
            'view_cell' => [
                'type' => Type::boolean(),
                'description' => 'The name of user',
            ],
            'need_attention' => [
                'type' => Type::boolean(),
                'description' => 'The name of user',
            ],
            'agressive' => [
                'type' => Type::boolean(),
                'description' => 'The name of user',
            ],
            'frame_brood' => [
                'type' => Type::int(),
                'description' => 'The name of user',
            ],
            'frame_honey' => [
                'type' => Type::int(),
                'description' => 'The name of user',
            ],
            'frame_pollen' => [
                'type' => Type::int(),
                'description' => 'The name of user',
            ]
        ];
    }
}
