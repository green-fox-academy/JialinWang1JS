import StringedInstrument from './StringedInstrument';
export default class Violin extends StringedInstrument {
    constructor(numberOfStrings = 4) {
        super('Violin', numberOfStrings, 'Screech')
    }
    sound(): void {
        console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.soundType}`);        
    }
}