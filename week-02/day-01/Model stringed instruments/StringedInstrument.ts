import Instrument from "./Instrument";

export default abstract class StringedInstrument extends Instrument {
     numberOfStrings: number;
     soundType: string;

     constructor(name, numberOfStrings, soundType) {
          super(name)
          this.numberOfStrings = numberOfStrings
          this.soundType =  soundType
     }

     abstract sound(): void;

     play() {
          this.sound()
     }
}
