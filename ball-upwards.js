// ball thrown upwards with speed v ( km / hr )
// h of ball = v*t - 0.5*g*t*t
// g is 9.81 m/s**2
// recording device @ every tenth of second the height
// v = 15 km /h -> (0, 0.0), (1, 0.367...), (2, 0.637...), (3, 0.808...), (4, 0.881..)
// first number is tenth of second
// second number is height in meter

// function max_ball with input v
// returns time in tenth of second of max height recorded by device
// first convert given velocity to m/s
// let variable equal to time
// variable of h
// compare value of height to previous value for each value t until h is less
// return h

const max_ball = function(velocity) {
    let hLatest = 0;
    h = 0;
    let time = 0;
    velocity *= 0.2777778;
    while( hLatest >= h ) {
        h = velocity * time - 0.5 * 9.81 * time * time;
        console.log(h);
        time += 0.1;
        hLatest = velocity * time - 0.5 * 9.81 * time * time;
        console.log(hLatest);
    }
    return Math.round(time*10 - 1);
}

max_ball(15);