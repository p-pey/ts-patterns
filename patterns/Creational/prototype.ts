/* 
Creates a new object by copying an existing object, known as the prototype.
*/

interface Prototype {
  clone(): this;
}

class Person implements Prototype {
  constructor(public name: string, public age: number) { }

  clone(): this {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }
}

const original = new Person('John', 25);
const copy = original.clone();
