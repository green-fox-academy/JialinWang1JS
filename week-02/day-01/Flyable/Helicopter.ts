import Vehicle, { } from './Vehicle'
import Flyable, {  } from './Flyable';

class Helicopter extends Vehicle implements Flyable {
    land(): void {
        console.log('Land')        
    }    
    fly(): void {
        console.log('FLY')        
    }
    takeOff(): void {
        console.log('takeOff')  
    }
}
