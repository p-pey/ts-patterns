/* 
Allows incompatible interfaces to work together.
*/

class OldSystem {
  oldMethod(): string {
    return 'Old system method';
  }
}

class NewSystem {
  newMethod(): string {
    return 'New system method';
  }
}

class Adapter extends OldSystem {
  private newSystem = new NewSystem();

  oldMethod(): string {
    return this.newSystem.newMethod();
  }
}

const adapter = new Adapter();
console.log(adapter.oldMethod());
