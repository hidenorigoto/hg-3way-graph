import {App} from './app';
import {expect} from 'chai';

describe('Appテスト', () => {
  interface TestData {
    index:number,
    input:string,
    expected:string
  };
  const data: Array<TestData> = [
    {index: 0 , input: "b", expected: "AB"},
    {index: 1 , input: "l", expected: "AD"},
    {index: 2 , input: "r", expected: "AC"},
    {index: 3 , input: "bbb", expected: "ABAB"},
    {index: 4 , input: "rrr", expected: "ACBA"},
    {index: 5 , input: "blll", expected: "ABCAB"},
    {index: 6 , input: "llll", expected: "ADEBA"},
    {index: 7 , input: "rbrl", expected: "ACADE"},
    {index: 8 , input: "brrrr", expected: "ABEDAB"},
    {index: 9 , input: "llrrr", expected: "ADEFDE"},
    {index: 10, input: "lrlll", expected: "ADFEDF"},
    {index: 11, input: "lrrrr", expected: "ADFCAD"},
    {index: 12, input: "rllll", expected: "ACFDAC"},
    {index: 13, input: "blrrrr", expected: "ABCFEBC"},
    {index: 14, input: "brllll", expected: "ABEFCBE"},
    {index: 15, input: "bbrllrrr", expected: "ABACFDEFD"},
    {index: 16, input: "rrrrblll", expected: "ACBACABCA"},
    {index: 17, input: "llrlrrbrb", expected: "ADEFCADABA"},
    {index: 18, input: "rrrbrllrr", expected: "ACBABEFCAD"},
    {index: 19, input: "llrllblrll", expected: "ADEFCBCADEB"},
    {index: 20, input: "lrrlllrbrl", expected: "ADFCBEFDFCB"},
    {index: 21, input: "lllrbrrlbrl", expected: "ADEBCBACFCAB"},
    {index: 22, input: "rrrrrrlrbrl", expected: "ACBACBADFDEB"},
    {index: 23, input: "lbrbbrbrbbrr", expected: "ADABABEBCBCFE"},
    {index: 24, input: "rrrrlbrblllr", expected: "ACBACFCACFDAB"},
    {index: 25, input: "lbbrblrlrlbll", expected: "ADADFDABCFDFED"},
    {index: 26, input: "rrbbrlrlrblrl", expected: "ACBCBADFEBEFDA"},
    {index: 27, input: "blrllblbrrrrll", expected: "ABCFDADEDABEDFE"},
    {index: 28, input: "blrllrlbllrrbr", expected: "ABCFDABCBEFDEDA"},
    {index: 29, input: "lbrbbrllllrblrr", expected: "ADABABEFCBEDEBCF"},
    {index: 30, input: "rrrrbllrlrbrbrr", expected: "ACBACABCFDEDADFC"},
  ];

  data.forEach( (datum:TestData) => {
    it('テスト' + datum.index, () => {
      let app = new App();
      let result = app.solve(datum.input);
      expect(result).to.equal(datum.expected);
    });
  });
});
