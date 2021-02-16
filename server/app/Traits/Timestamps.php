<?php namespace App\Traits;

use Rebing\GraphQL\Support\Facades\GraphQL;

trait Timestamps
{

    public function fieldsTimestamps()
    {
        return [

            'created_at' => [
                'type' => GraphQL::type('DateTime'),
                'description' => 'created_at',
                'resolve' => function ($root, $args) {return optional($root->created_at)->format('Y-m-d H:i:s');},
            ],

            'updated_at' => [
                'type' => GraphQL::type('DateTime'),
                'description' => 'updated_at',
                'resolve' => function ($root, $args) {return optional($root->updated_at)->format('Y-m-d H:i:s');},
            ],

            'deleted_at' => [
                'type' => GraphQL::type('DateTime'),
                'description' => 'deleted_at',
                'resolve' => function ($root, $args) {return optional($root->deleted_at)->format('Y-m-d H:i:s');},
            ],
        ];
    }
}
