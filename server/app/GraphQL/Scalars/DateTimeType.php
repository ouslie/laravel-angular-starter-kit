<?php

declare(strict_types=1);

namespace App\GraphQL\Scalars;

use Exception;
use GraphQL\Error\Error;
use GraphQL\Language\AST\Node;
use GraphQL\Type\Definition\ScalarType;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Contracts\TypeConvertible;
use DateTime;

class DateTimeType extends ScalarType implements TypeConvertible
{
  /**
     * @var string
     */
    public $name = 'DateTime';

    /**
     * @var string
     */
    public $description = 'DateTime scalar type';

    /**
     * @param mixed $value
     * @return mixed
     */
    public function serialize($value) : DateTime
    {
        return $value;
    }

    /**
     * @param mixed $value
     * @return string
     */
    public function parseValue($value) : string
    {
        return $value;
    }

    /**
     * @param $ast
     * @return null|string
     */
    public function parseLiteral($ast,  ?array $variables = null) : ?string
    {
        return null;
    }

    /**
     * @return DateTimeType
     */
    public function toType() : DateTimeType
    {
        return new static();
    }
}
