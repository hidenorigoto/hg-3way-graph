<?php
namespace Hg\ThreeWayGraph;

use PHPUnit\Framework\TestCase;

class AppTest extends TestCase
{
    /**
     * @var App
     */
    private $SUT;

    /**
     * @test
     * @dataProvider dataForTest
     */
    public function test($input, $expected)
    {
        $result = $this->SUT->solve($input);
        $this->assertEquals($expected, $result);
    }

    public function dataForTest()
    {
        return [
            '0' => ["b", "AB"],
            '1' => ["l", "AD"],
            '2' => ["r", "AC"],
            '3' => ["bbb", "ABAB"],
            '4' => ["rrr", "ACBA"],
            '5' => ["blll", "ABCAB"],
            '6' => ["llll", "ADEBA"],
            '7' => ["rbrl", "ACADE"],
            '8' => ["brrrr", "ABEDAB"],
            '9' => ["llrrr", "ADEFDE"],
            '10' =>  ["lrlll", "ADFEDF"],
            '11' =>  ["lrrrr", "ADFCAD"],
            '12' =>  ["rllll", "ACFDAC"],
            '13' =>  ["blrrrr", "ABCFEBC"],
            '14' =>  ["brllll", "ABEFCBE"],
            '15' =>  ["bbrllrrr", "ABACFDEFD"],
            '16' =>  ["rrrrblll", "ACBACABCA"],
            '17' =>  ["llrlrrbrb", "ADEFCADABA"],
            '18' =>  ["rrrbrllrr", "ACBABEFCAD"],
            '19' =>  ["llrllblrll", "ADEFCBCADEB"],
            '20' =>  ["lrrlllrbrl", "ADFCBEFDFCB"],
            '21' =>  ["lllrbrrlbrl", "ADEBCBACFCAB"],
            '22' =>  ["rrrrrrlrbrl", "ACBACBADFDEB"],
            '23' =>  ["lbrbbrbrbbrr", "ADABABEBCBCFE"],
            '24' =>  ["rrrrlbrblllr", "ACBACFCACFDAB"],
            '25' =>  ["lbbrblrlrlbll", "ADADFDABCFDFED"],
            '26' =>  ["rrbbrlrlrblrl", "ACBCBADFEBEFDA"],
            '27' =>  ["blrllblbrrrrll", "ABCFDADEDABEDFE"],
            '28' =>  ["blrllrlbllrrbr", "ABCFDABCBEFDEDA"],
            '29' =>  ["lbrbbrllllrblrr", "ADABABEFCBEDEBCF"],
            '30' =>  ["rrrrbllrlrbrbrr", "ACBACABCFDEDADFC"],
        ];
    }

    protected function setUp()
    {
        $this->SUT = new App();
    }
}
