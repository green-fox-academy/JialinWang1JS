
export default abstract class Instrument {
    constructor(name){
        this.name = name
    }
    protected name: string;
    abstract play(): void;
}
