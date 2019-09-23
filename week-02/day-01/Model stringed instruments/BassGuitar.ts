import StringedInstrument from './StringedInstrument';

export default class BassGuitar extends StringedInstrument {
    constructor(numberOfStrings = 4) {
        super('Bass Guitar', numberOfStrings, 'Duum-duum-duum')
    }
    sound(): void {
        console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.soundType}`);        
    }
}