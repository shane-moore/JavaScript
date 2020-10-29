// remove consecutive dupes from string (leaving only first words entries)
// could use.find
function dupeRemoval(s) {
  var set = [];
  s.split(" ").forEach((val, i, arr) => {
    if (arr[i - 1] === val) return;
    else set.push(val);
  })
  return set.join(' ');
  // return set;
  console.log(set.join(' '));
}

dupeRemoval("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta")

const banana = 'banana hammock'
console.log(banana.replace('ban', 'ham'))
