// color is a list with 3 integers
// volume is a number
// mixing method accepts another potion and returns a mixed Potion

class Potion {
    constructor(color, volume) {
        this.color = color;
        this.volume = volume;
    }
   mix(other){
       let tV = this.volume + other.volume;
       return new Potion(this.color.map((channel, i) => {
           return Math.ceil(channel * (this.volume/tV) + other.color[i]*(other.volume/tV));
       }), tV);
   }

}

let felix_felicis = new Potion([255, 255, 255], 7);
let shrinking_solution = new Potion([51, 102, 51], 12);

console.log(felix_felicis.mix(shrinking_solution));