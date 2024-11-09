interface Command {
       execute(): void;
     }
     
     class Light {
       turnOn(): void {
         console.log('Light is on');
       }
     
       turnOff(): void {
         console.log('Light is off');
       }
     }
     
     class TurnOnCommand implements Command {
       constructor(private light: Light) {}
     
       execute(): void {
         this.light.turnOn();
       }
     }
     
     class RemoteControl {
       constructor(private command: Command) {}
     
       pressButton(): void {
         this.command.execute();
       }
     }
     
     const light = new Light();
     const turnOnCommand = new TurnOnCommand(light);
     const remote = new RemoteControl(turnOnCommand);
     
     remote.pressButton();
     