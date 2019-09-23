import Animal from './Animal'
export default class Mammal extends Animal {
    
    constructor(name, age?, gender?) {
        super(name, age, gender,'Bird', false)
    }

    getName(): string {
        return this.name
    }
    breed(): string {
        return 'pushing miniature versions out'
    }
}