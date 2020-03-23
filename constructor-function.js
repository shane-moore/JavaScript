// create a constructor function holding  friends names
// add a name via prototype
// try to access after creating new instance of function

function Buddies(friend1, friend2) {
  this.friend1 = friend1;
  this.friend2 = friend2;
  console.log(this);
  console.log(this.friend1, this.friend2);
}

let chicagoBuddies = new Buddies("Haitam", "Josh");

const newFriends = (friend3, friend4) => ({
  friend3: friend3,
  friend4: friend4
});

let friendObj = {
  friend5: "tim",
  friend6: "tam"
};

function logFriends() {
  console.log(this.friend5);
}

let boundFriends = logFriends.bind(friendObj);
boundFriends();
