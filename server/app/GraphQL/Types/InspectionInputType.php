<?php
namespace App\GraphQL\Types;

use Rebing\GraphQL\Support\InputType;
use GraphQL\Type\Definition\Type;

class InspectionInputType extends InputType
{

    protected $attributes = [
        'name' => 'inspectionInput',
        'description' => 'A review with a comment and a score (0 to 5)'
    ];

    public function fields(): array
    {
        return [

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


            // 'hives' => [
            //     'type'          => Type::listOf(GraphQL::type('Hive')),
            //     'description'   => 'A list of posts written by the user',
            // ]
        ];
    }
}
