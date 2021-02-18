<?php
namespace App\GraphQL\Mutations;

use Closure;
use App\Colony;
use App\Hive;
use App\Inspection;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Illuminate\Log\Logger;
use Illuminate\Support\Facades\Log;
use Rebing\GraphQL\Support\Mutation;
use Rebing\GraphQL\Support\Facades\GraphQL;

class InspectionUpdateMutation extends Mutation
{
    protected $attributes = [
        'name' => 'inspection_update'
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
                'type' => Type::nonNull(Type::int())
            ],
            'inspection' => [
                'name' => 'inspection',
                'type' => GraphQL::type('InspectionInput')
            ],
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $resolveInfo, Closure $getSelectFields)
    {
        $inspection = Inspection::findOrFail($args['id']);
        unset($args['id']);
        $inspection->update($args['inspection']);
        if(!empty($args['inspection']['view_queen'])) {
            $inspection->colony()->update(['last_see' => $args['inspection']['date']]);
        }

        return $inspection;
    }
}
