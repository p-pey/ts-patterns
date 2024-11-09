// Define the target object
const user = {
       name: 'John Doe',
       age: 30
     };
     
     // Define a handler with traps to intercept operations
     const userValidator = {
       set(target: any, prop: string, value: any): boolean {
         if (prop === 'age' && (typeof value !== 'number' || value <= 0)) {
           throw new Error('Age must be a positive number');
         }
         target[prop] = value; // If validation passes, set the property
         return true;
       },
       get(target: any, prop: string): any {
         if (prop in target) {
           console.log(`Getting ${prop}: ${target[prop]}`);
           return target[prop];
         } else {
           console.log(`${prop} does not exist on target`);
           return undefined;
         }
       }
     };
     
     // Create a Proxy for the user object
     const userProxy = new Proxy(user, userValidator);
     
     // Usage
     try {
       userProxy.age = 25;  // Valid, so it sets the property
       console.log(userProxy.age); // Getting age: 25
       userProxy.age = -5;  // Throws an error
     } catch (error) {
       console.error(error.message); // "Age must be a positive number"
     }
     
     // Getting a non-existent property
     console.log(userProxy.email);  // "email does not exist on target"
     