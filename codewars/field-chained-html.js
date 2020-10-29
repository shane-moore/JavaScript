// create object w/ methods for div, p, span, and h1
// methods will wrap passed-in string in the tag associated w/ each
// object Format has a div method that accepts ("foo") and returns <div>foo</div>
// want to be able to chain methods together such as Format.div.p.span('fizzBuzz') -> <div><p><span>fizzBuzz</span></p></div>
// should be able to store created methods and reuse them
// should be able to nest Format calls

// const Format = { tags: ['div', 'h1', 'p', 'span'] }

function Format() {
  this.name = 'Format'
}

Format.prototype.div = string ?
  `<div>${string}</div>` :
  function (val) {
    const chain = {
      h1: Format.h1(val)
    }
    return chain;
  }


Format.prototype.h1 = string ?
  `<div>${string}</div>` :
  function () {
    const chain = {
      div: Format.div(val)
    }
    return chain;
  }

let test = new Format();
test.div.h1('rawr')


// Format.prototype.p = function (string) {
//   return string ? `<p>${string}</p>` : "<p></p>"
// }

// Format.prototype.span = function (string) {
//   return string ? `<span>${string}</span>` : "<span></span>"
// }




