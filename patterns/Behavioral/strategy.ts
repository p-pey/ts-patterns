/* 
Defines a family of algorithms, encapsulates each one, and makes them interchangeable.
*/

interface Strategy {
  execute(a: number, b: number): number;
}

class AddStrategy implements Strategy {
  execute(a: number, b: number): number {
    return a + b;
  }
}

class MultiplyStrategy implements Strategy {
  execute(a: number, b: number): number {
    return a * b;
  }
}

class Context {
  constructor(private strategy: Strategy) { }

  setStrategy(strategy: Strategy): void {
    this.strategy = strategy;
  }

  executeStrategy(a: number, b: number): number {
    return this.strategy.execute(a, b);
  }
}

const context = new Context(new AddStrategy());
console.log(context.executeStrategy(5, 10));

context.setStrategy(new MultiplyStrategy());
console.log(context.executeStrategy(5, 10));
