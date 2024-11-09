/* 
Ensures a class has only one instance and provides a global point of access to it.
*/

class Singleton {
  private static instance: Singleton;

  private constructor() { }

  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

const singleton = Singleton.getInstance();
