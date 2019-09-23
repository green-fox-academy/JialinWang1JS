import StringedInstrument from './StringedInstrument';

export default class BassGuitar extends StringedInstrument {
    constructor(numberOfStrings = 6) {
        super('Bass Guitar', numberOfStrings, 'Twang')
    }
    sound(): void {
        console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.soundType}`);        
    }
}