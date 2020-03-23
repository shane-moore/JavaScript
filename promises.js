// Promise is an object that reps the completion of an async op & its resulting value


// Promies are proxies for values not yet known

// returns a promise object to supply the value at some point in future

// Promise states: pending, fulfilled, rejected
// Promises are fulfilled w/ a value and rejected w/ a reason

// Promises is fulfilled when the ResolutionFunc is invoked

// Syntax is Promise(resolutionFunc, rejectionFunc)

// after promise is settled, then, catch, or finally handlers can be used to instigate further actions

// if you use Promise.resolve(), a Promise object is returned w/ a given value
let bananaPromise = new Promise(function (resolve, reject) {
  return setTimeout(() => resolve('banana'), 1000);
})
console.log(bananaPromise)

bananaPromise.then(result => console.log(result))


// mix in async await

// async funcs operate in a seperate order than rest of script via event loop ==== event table -> event queue -> stack
// async funcs return an implicit Promise as its result


// create a function that returns a promise that resolves a result of "resolved" after 2 seconds
function resolveAfter2Seconds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('resolved'), 2000)
  })
}

// async func that stores value of resolved promise and logs it to console
async function asyncCall() {
  // let result = await resolveAfter2Seconds();
  let result = await setTimeout(() => { return 'bananazz' }, 1000)
  console.log(result)
}

asyncCall()
