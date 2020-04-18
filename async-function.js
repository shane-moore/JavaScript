let json = null;

async function wantJSON() {
  function makePromise() {
    return new Promise((resolve) => {
      setTimeout(() => resolve('got the json'), 1000);
    });
  }
  json = await makePromise()

}

wantJSON();

async function getJSON() {
  if (!json) {
    await wantJSON()
  }
  console.log(json)
}

getJSON()


// since you may not have the value from the promise yet, declare a helper function that will check if there is results and if not, await results. then, return value

let herResponse;

function askGirlfriend(answer) {

  return new Promise((resolve) => {
    setTimeout(() => resolve(answer), 1000);
  })
}

async function getAnswer(answer) {
  herResponse = await askGirlfriend(answer);
  console.log(herResponse)
}

let answer = getAnswer('yes');

async function setAnswer(response) {
  let response = await getAnswer(response);
  return response
}

async function useAnswer() {
  if (!herResponse) {
    await getAnswer('yes')
  }
  console.log(`she said ${herResponse}`)
  return `she said ${herResponse}`;
}

let luckily = useAnswer()







