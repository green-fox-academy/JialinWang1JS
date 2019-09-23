import Animal from './Animal'
export default class Reptile extends Animal {
    constructor(name, age?, gender?) {
        super(name, age, gender,'Reptile', false)
    }

    getName(): string {
        return this.name
    }
    breed(): string {
        return 'laying eggs'
    }
}