/* 
Provides an interface for creating families of related
 or dependent objects without specifying their concrete classes.
*/

interface Button {
  paint(): void;
}

class WinButton implements Button {
  paint(): void {
    console.log('Windows button');
  }
}

class MacButton implements Button {
  paint(): void {
    console.log('Mac button');
  }
}

interface GUIFactory {
  createButton(): Button;
}

class WinFactory implements GUIFactory {
  createButton(): Button {
    return new WinButton();
  }
}

class MacFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton();
  }
}

function getFactory(os: string): GUIFactory {
  return os === 'Windows' ? new WinFactory() : new MacFactory();
}

const factory = getFactory('Windows');
const button = factory.createButton();
button.paint();
