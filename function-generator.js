function* peeps(name1, name2) {
  console.log(name1);
  yield;
  console.log(name2);
}

let peepers = peeps("billy", "bob");
peepers.next().value;
peepers.next().value;
