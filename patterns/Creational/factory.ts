/* 
Defines an interface for creating an object but lets subclasses alter the type of created objects.
*/

interface Product {
  operation(): string;
}

class ConcreteProduct implements Product {
  operation(): string {
    return 'ConcreteProduct operation';
  }
}

class ProductFactory {
  static createProduct(): Product {
    return new ConcreteProduct();
  }
}

const product = ProductFactory.createProduct();
