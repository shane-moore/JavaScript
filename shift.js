let toDoList = [];
function remember(task) {
    toDoList.push(task);
}

function getTask() {
    return toDoList.shift();
}

function rememberUrgently(task) {
    toDoList.unshift(task);
}

rememberUrgently("traffic ahhh");
remember("groceries");

console.log(toDoList);

console.log(getTask());



console.log(toDoList);

console.log(toDoList.indexOf("groceries"));


