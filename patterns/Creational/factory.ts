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
     