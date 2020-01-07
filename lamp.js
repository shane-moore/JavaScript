class Lamp {
    constructor(color, on) {
        this.color = color;
        this.on = false;
    }
    toggleSwitch() {
        this.on = !this.on;
    }
    state() {
        return this.on ? "The lamp is on." : "The lamp is off.";
    }
}

const myLamp = new Lamp("Blue");
myLamp.toggleSwitch();
myLamp.state();
myLamp.toggleSwitch();
myLamp.state()


