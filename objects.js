let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};
day1.wolf = false; 
console.log(day1.squirrel);
console.log(day1.wolf);

let journal = [];
function addEntry(events, squirrel) {
    journal.push({events, squirrel});
}
addEntry("weekend",true)
console.log(journal);