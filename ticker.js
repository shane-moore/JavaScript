// return a chunk of text to be displayed on a display of fixed width
// inputs are text, width, and tick
// tick parameter will constantly increment
// starts off empty
// first chracter displays at right end
// should dissapear char by char to left position and return to blank state of the display


const ticker = (text, width, tick) => {

    // create empty string of length width
   const display = " ".repeat(width);
   console.log(display)
   // create string concatinating the empty string, text, and and empty string length
   text = display + text + display;
   console.log(text)
   // check if tick is greater or smaller than the length of the new text. if smaller, tick could be 0 or 2 or 
   tick = tick % (text.length - width)
   console.log(tick)

   console.log(text.slice(tick, tick + width))
}

ticker( 'Why so serious?', 20, 25 )