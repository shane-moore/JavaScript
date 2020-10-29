// suspects for murder crime
// given every person the suspects saw the day of the murders
// input is a dictionary with names of suspects and who all they saw that day
// also know list of dead folks
// return name of the killer

// loop over suspectInfo vals and find array that includes everyone who's dead
// can loop over dead array when doing check against dictionary



const suspects = {
  'James': ['Jacob', 'Bill', 'Lucas'],
  'Johnny': ['David', 'Kyle', 'Lucas'],
  'Peter': ['Lucy', 'Kyle']
};

const deadFolks = ['Lucas', 'Bill'];

function killer(suspectInfo, dead) {
  // for (let acquaintances of Object.values(suspectInfo)) {
  //   console.log(acquaintances)
  // }
  let killer;
  Object.keys(suspectInfo).forEach((suspect, index, arr) => {
    dead.every(val => suspectInfo[suspect].includes(val)) ? killer = suspect : null;
  })
  return killer;
  console.log(killer)
}

killer(suspects, deadFolks)
