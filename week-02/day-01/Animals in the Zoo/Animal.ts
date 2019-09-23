
 export default abstract class Animal {
    name: string;
    age : number;
    gender: string;
    species: string;
    cute: boolean;
    constructor(name, age, gender,species, cute) {
        this.name = name
        this.age = age
        this.gender = gender
        this.species = species
        this.cute = cute
    }

    abstract getName(): string;
    abstract breed(): string;
}