class Singleton {
       public timestamp: number;
     
       private constructor() {
         this.timestamp = Date.now();
       }
     
       public getTimestamp(): number {
         return this.timestamp;
       }
     }
     
     // Create a Proxy to control the singleton instantiation
     const SingletonProxy = new Proxy(Singleton, {
       // Hold the single instance in a private property
       instance: null as Singleton | null,
     
       // The `construct` trap intercepts attempts to create a new instance
       construct(target, args) {
         // Check if an instance already exists
         if (!this.instance) {
           // Create and store the instance if it doesn’t exist
           this.instance = new target(...args);
         }
         // Return the single stored instance
         return this.instance;
       }
     });
     
     // Usage
     const instance1 = new (SingletonProxy as unknown as { new(): Singleton })();
     const instance2 = new (SingletonProxy as unknown as { new(): Singleton })();
     
     console.log(instance1 === instance2); // true
     console.log(instance1.getTimestamp()); // Same timestamp for both instances
     console.log(instance2.getTimestamp()); // Same timestamp for both instances
     