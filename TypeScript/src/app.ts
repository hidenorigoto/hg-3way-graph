import {Node} from './node';

export class App {
  private nodes:Map<string, Node>;
  private handler;
  public constructor() {
    let a = new Node('A');
    let b = new Node('B');
    let c = new Node('C');
    let d = new Node('D');
    let e = new Node('E');
    let f = new Node('F');

    this.nodes = new Map<string, Node>();
    this.nodes.set(a.getId(), a);
    this.nodes.set(b.getId(), b);
    this.nodes.set(c.getId(), c);
    this.nodes.set(d.getId(), d);
    this.nodes.set(e.getId(), e);
    this.nodes.set(f.getId(), f);

    a.addElement(c);
    a.addElement(b);
    a.addElement(d);

    b.addElement(c);
    b.addElement(e);
    b.addElement(a);

    c.addElement(f);
    c.addElement(b);
    c.addElement(a);

    d.addElement(f);
    d.addElement(a);
    d.addElement(e);

    e.addElement(f);
    e.addElement(d);
    e.addElement(b);

    f.addElement(e);
    f.addElement(c);
    f.addElement(d);

    this.handler = {
      'r': (current:Node, prev:Node) => {
        let next = current.prevFrom(prev);
        return [next, current];
      },
      'l': (current:Node, prev:Node) => {
        let next = current.nextFrom(prev);
        return [next, current];
      },
      'b': (current:Node, prev:Node) => {
        return [prev, current];
      },
    }
  }

  public solve(input:string) :string {
    let prev = this.nodes.get('B');
    let current = this.nodes.get('A');
    let path:Node[] = [current];

    for (let char:string of input.split('')) {
      [current, prev] = this.handler[char](current, prev);
      path.push(current);
    }

    return path.reduce((current:string, element:Node) :string => {
      return current.concat(element.getId());
    }, '');
  }
}
