// Observer interface
interface Observer<T> {
       update(data: T): void;
}

// Concrete Observer
class ConcreteObserver<T> implements Observer<T> {
       constructor(private id: number) { }

       update(data: T): void {
              console.log(`Observer ${this.id} received data:`, data);
       }
}

// Observable class
class Observable<T> {
       private observers: Observer<T>[] = [];

       // Add an observer
       subscribe(observer: Observer<T>): void {
              this.observers.push(observer);
       }

       // Remove an observer
       unsubscribe(observer: Observer<T>): void {
              this.observers = this.observers.filter((obs) => obs !== observer);
       }

       // Notify all observers
       notify(data: T): void {
              for (const observer of this.observers) {
                     observer.update(data);
              }
       }
}
// Example usage
const observable = new Observable<number>();

// Creating observers
const observer1 = new ConcreteObserver<number>(1);
const observer2 = new ConcreteObserver<number>(2);

// Subscribing observers to the observable
observable.subscribe(observer1);
observable.subscribe(observer2);

// Notify observers with some data
observable.notify(42);

// Unsubscribe one observer
observable.unsubscribe(observer1);

// Notify remaining observers
observable.notify(100);
