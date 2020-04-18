// create a function that returns "I Am Legend" after 3 seconds using async await and promises
// three functions declaring Promises in the body that will resolve to a different substring in 1 second each
// async function at end will wait for the Promise to resolve and log their values

function who() {
  return new Promise((resolve) => {
    setTimeout(() => { resolve('I'); }, 1000);
  });
}

function verb() {
  return new Promise((resolve) => {
    setTimeout(() => { resolve('Am') }, 1000);
  })
}

function what() {
  return new Promise((resolve) => {
    setTimeout(() => { resolve('Legend') }, 1000);
  })
}

async function willSmith() {
  let a = await who();

  let b = await verb();
  let c = await what();
  console.log(`${a} ${b} ${c}`)
}

async function willSmithers() {
  const [a, b, c] = await Promise.all([who(), verb(), what()])
  console.log(`${a} ${b} ${c}`);
}

willSmith()
willSmithers()

