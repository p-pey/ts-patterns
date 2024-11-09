class Car {
       wheels: number;
       engine: string;
       color: string;
     }
     
     class CarBuilder {
       private car: Car = new Car();
     
       setWheels(wheels: number): this {
         this.car.wheels = wheels;
         return this;
       }
     
       setEngine(engine: string): this {
         this.car.engine = engine;
         return this;
       }
     
       setColor(color: string): this {
         this.car.color = color;
         return this;
       }
     
       build(): Car {
         return this.car;
       }
     }
     
     const car = new CarBuilder().setWheels(4).setEngine('V8').setColor('red').build();
     