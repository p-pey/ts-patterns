/* 
Provides a simplified interface to a complex subsystem.
*/

class SubsystemA {
  operationA(): string {
    return 'Subsystem A operation';
  }
}

class SubsystemB {
  operationB(): string {
    return 'Subsystem B operation';
  }
}

class Facade {
  private subsystemA = new SubsystemA();
  private subsystemB = new SubsystemB();

  operation(): string {
    return `${this.subsystemA.operationA()} and ${this.subsystemB.operationB()}`;
  }
}

const facade = new Facade();
console.log(facade.operation());
