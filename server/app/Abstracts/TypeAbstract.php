<?php namespace App\Abstracts;

use Config;
use Rebing\GraphQL\Support\Type;

abstract class TypeAbstract extends Type
{

    public function getFields(): array
    {
        $fields = array_merge($this->fields(), $this->_traitFields());

        $allFields = [];
        foreach ($fields as $name => $field) {
            if (is_string($field)) {
                $field = app($field);
                $field->name = $name;
                $allFields[$name] = $field->toArray();
            } else {
                $resolver = $this->getFieldResolver($name, $field);

                if (isset($field['class'])) {
                    $field = $field['class'];

                    if (is_string($field)) {
                        $field = app($field);
                    }

                    $field->name = $name;
                    $field = $field->toArray();
                }

                if ($resolver) {
                    $field['resolve'] = $resolver;
                }

                $allFields[$name] = $field;
            }
        }

        return $allFields;
    }

    private function _traitFields()
    {
        $fields = [];
        foreach (($traits = class_uses_recursive($class = static::class)) as $trait) {
            if (method_exists($class, $method = ($this->inputType ? 'fieldsInput' : 'fields').class_basename($trait))) {
                $fields += $this->$method();
            }
        }

        return $fields;
    }


}

