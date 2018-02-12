import {RingArray} from './ring_array';
import {expect} from 'chai';
class Foo {
  public constructor(name:string){};
}
describe('RingArray', () => {
  it('要素追加', () => {
    let t = new RingArray<Foo>();
    t.addElement(new Foo('test1'));
    t.addElement(new Foo('test2'));

    expect(t.length()).to.equal(2);
  });
  it('要素インデックス', () => {
    let t = new RingArray<Foo>();
    let foo1 = new Foo('test1');
    let foo2 = new Foo('test2');
    t.addElement(foo1);
    t.addElement(foo2);

    let index = t.getIndex(foo1);
    expect(index).to.equal(0);

    index = t.getIndex(foo2);
    expect(index).to.equal(1);
  });
  it('次の要素', () => {
    let t = new RingArray<Foo>();
    let foo1 = new Foo('test1');
    let foo2 = new Foo('test2');
    t.addElement(foo1);
    t.addElement(foo2);

    let next = t.nextFrom(foo1);
    expect(next).to.equal(foo2);

    next = t.nextFrom(foo2);
    expect(next).to.equal(foo1);
  });
  it('前の要素', () => {
    let t = new RingArray<Foo>();
    let foo1 = new Foo('test1');
    let foo2 = new Foo('test2');
    t.addElement(foo1);
    t.addElement(foo2);

    let prev = t.prevFrom(foo1);
    expect(prev).to.equal(foo2);

    prev = t.prevFrom(foo2);
    expect(prev).to.equal(foo1);
  });
});
