<?php
namespace Hg\ThreeWayGraph;

use Hg\ThreeWayGraph\Model\Node;

class App
{
    /**
     * @var Node[]
     */
    private $nodes = [];

    private $handler = [];

    public function __construct()
    {
        $a = new Node('A');
        $b = new Node('B');
        $c = new Node('C');
        $d = new Node('D');
        $e = new Node('E');
        $f = new Node('F');

        $this->nodes[$a->getId()] = $a;
        $this->nodes[$b->getId()] = $b;
        $this->nodes[$c->getId()] = $c;
        $this->nodes[$d->getId()] = $d;
        $this->nodes[$e->getId()] = $e;
        $this->nodes[$f->getId()] = $f;

        $a->addElement($c);
        $a->addElement($b);
        $a->addElement($d);

        $b->addElement($c);
        $b->addElement($e);
        $b->addElement($a);

        $c->addElement($f);
        $c->addElement($b);
        $c->addElement($a);

        $d->addElement($f);
        $d->addElement($a);
        $d->addElement($e);

        $e->addElement($f);
        $e->addElement($d);
        $e->addElement($b);

        $f->addElement($e);
        $f->addElement($c);
        $f->addElement($d);

        $this->handler['r'] = function($current, $prev) {
            /** @var Node $current */
            /** @var Node $prev */
            $next = $current->prevFrom($prev);
            return [$next, $current];
        };
        $this->handler['l'] = function($current, $prev) {
            /** @var Node $current */
            /** @var Node $prev */
            $next = $current->nextFrom($prev);
            return [$next, $current];
        };
        $this->handler['b'] = function($current, $prev) {
            /** @var Node $current */
            /** @var Node $prev */
            return [$prev, $current];
        };
    }

    public function solve(string $input) :string
    {
        $prev = $this->nodes['B'];
        $current = $prev[$prev->getIndexById('A')];
        $path = [$current];

        for ($i = 0, $length = \strlen($input); $i < $length; $i++) {
            [$current, $prev] = \call_user_func($this->handler[$input[$i]], $current, $prev);
            $path[] = $current;
        }

        return array_reduce($path, function ($current, $node) {
            /** @var Node $node */
           return $current . $node->getId();
        }, '');
    }

}
