<?php
namespace Hg\ThreeWayGraph\Model;

class Node extends RingArray
{
    /**
     * @var string
     */
    private $id;

    public function __construct(string $id)
    {
        $this->id = $id;
    }

    /**
     * @return string
     */
    public function getId() :string
    {
        return $this->id;
    }

    /**
     * @param string $id
     * @return int
     */
    public function getIndexById(string $id) :int
    {
        foreach ($this->data as $index => $value) {
            /** @var Node $value */
            if ($value->id === $id) {
                return $index;
            }
        }

        throw new \RuntimeException('not found');
    }
}
