export class RingArray<T> {
  protected data:T[];

  public constructor() {
    this.data = [];
  }

  public addElement(element:T) {
    this.data.push(element);
  }

  public length(): number {
    return this.data.length;
  }

  public getElement(index:number) :T {
    if (index % this.data.length < 0) {
      return this.getElement(index + this.data.length);
    }
    return this.data[index % this.data.length];
  }
  public getIndex(element:T) :number {
    return this.data.indexOf(element)
  }

  public nextFrom(element) :T {
    let index:number = this.getIndex(element);
    return this.getElement(index + 1);
  }
  public prevFrom(element) :T {
    let index:number = this.getIndex(element);
    return this.getElement(index - 1);
  }
}
