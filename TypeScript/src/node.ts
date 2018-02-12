import {RingArray} from './ring_array';

export class Node extends RingArray<Node>
{
  public constructor(private id:string) {
    super();
  };

  public getId() :string {
    return this.id;
  }

  public getIndexById(id:string) :number {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].getId() === id) {
        return i;
      }
    }

    throw new Error();
  }
}
