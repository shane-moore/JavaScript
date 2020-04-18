// binding a function to a new context changes its this context

class ReactBind {
  constructor() {
    this.banana = "banana";
    console.log(this)
  }
  logToConsole() {
    console.log(this.banana);
  }
}

let otherBanana = {
  banana: 'pomegranate'
}

let instantiateClass = new ReactBind();
instantiateClass.logToConsole()


// Understand Bind in JS
let info = {
  name: 'anil sidhu',
  TellName: function () {
    return this.name;
  }
}
console.warn(info.TellName())

let otherInfo = info.TellName;
let boundInfo = otherInfo.bind(info);
info.dog = "scout";
console.log(boundInfo.name)
console.log(info.dog);
console.log(boundInfo.dog)

class BindInfo {
  constructor() {
    this.name = "anil sidhu";
    this.hello = this.hello.bind(this);
  }
  hello() {
    return this.name;
  }
}

let newBindInfo = new BindInfo();
info = newBindInfo.hello;
console.log(info())
