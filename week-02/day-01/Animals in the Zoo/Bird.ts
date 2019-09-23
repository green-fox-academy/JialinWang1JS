import Animal from './Animal'
import Flyable, {  } from '../Flyable/Flyable';
export default class Bird extends Animal implements Flyable {
    constructor(name, age?, gender?) {
        super(name, age, gender,'Bird', false)
    }
    land(): void {
        console.log('Land')        
    }    
    fly(): void {
        console.log('FLY')        
    }
    takeOff(): void {
        console.log('takeOff')  
    }

    getName(): string {
        return this.name
    }
    breed(): string {
        return 'laying eggs'
    }
}