// function setAlarm(employed<true whenever employed>,vacation<true when on vacation>)
// returns true if employed and not on vacay

function setAlarm(employed, vacation) {

  return (employed === true && vacation === false) ? true : false)
}

setAlarm(true, false);
setAlarm(true, true);
