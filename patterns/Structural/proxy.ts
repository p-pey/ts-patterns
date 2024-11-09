interface Service {
       request(): string;
     }
     
     class RealService implements Service {
       request(): string {
         return 'Real service request';
       }
     }
     
     class ProxyService implements Service {
       private realService = new RealService();
     
       request(): string {
         return `Proxy: ${this.realService.request()}`;
       }
     }
     
     const proxy = new ProxyService();
     console.log(proxy.request());
     