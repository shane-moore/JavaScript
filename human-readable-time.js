// input is a non-negative int in seconds
// return time in human-readable format (HH:MM:SS)
// three variables -> time in hours, minutes, seconds
// hours is given total / 3600
// minutes is remainder / 60
// remainder is seconds
// test if given number is > 3600, if so,  divide by 3600 and replace with that value + a 0 in front if < 10
// test if remainder is > 60, if so,  divide by by 60. if less than 10, replace with that value + a 0 in front if < 10
// test if remainder has is < 10, if so, place a 0 in front
// display resulting var's as a string via string interpolation

function humanReadable(seconds) {
    let hours = 0;
    let hourDenom = 3600;
    let minutes = 0;
    let minuteDenom = 60
    let remainder = 0;
    switch( true ) {
        case seconds >= hourDenom :
            hours = Math.floor((seconds / hourDenom));
            if( hours < 10 ) hours = "0" + hours;
            minutes = Math.floor((seconds % hourDenom) / minuteDenom)
            if( minutes < 10 ) minutes = "0" + minutes;
            remainder = ((seconds % hourDenom) % minuteDenom);
            if( remainder < 10 ) remainder = "0" + remainder;
            break;
        case seconds >= minuteDenom :
            hours = "00";
            minutes = Math.floor((seconds / minuteDenom));
            if( minutes < 10 ) minutes = "0" + minutes;
            remainder = seconds % minuteDenom;
            if( remainder < 10 ) remainder = "0" + remainder;
            break;
        default:
            hours = "00";
            minutes = "00";
            remainder = seconds;
            if(remainder < 10) remainder =  "0" + remainder;
    }
    return `${hours}:${minutes}:${remainder}`;
}

humanReadable(0);
