<?php
namespace Hg\ThreeWayGraph\Model;

class RingArray implements \ArrayAccess
{
    protected $data = [];

    public function addElement($element)
    {
        $this->data[] = $element;
    }

    public function getIndex($element)
    {
        foreach ($this->data as $index => $value)
        {
            if ($value === $element) {
                return $index;
            }
        }

        return false;
    }

    public function nextFrom($element)
    {
        $index = $this->getIndex($element);
        if ($index === false) {
            throw new \RuntimeException('not found');
        }

        return $this[$index + 1];
    }

    public function prevFrom($element)
    {
        $index = $this->getIndex($element);
        if ($index === false) {
            throw new \RuntimeException('not found');
        }

        return $this[$index - 1];
    }

    public function offsetExists($offset)
    {
        if ($offset < 0) return isset($this[$offset + count($this->data)]);
        return count($this->data);
    }

    public function offsetGet($offset)
    {
        if ($offset < 0) return $this[$offset + count($this->data)];
        return $this->data[$offset % count($this->data)];
    }

    public function offsetSet($offset, $value)
    {
        $this->data[$offset] = $value;
    }

    public function offsetUnset($offset)
    {
        unset($this->data[$offset]);
    }
}
