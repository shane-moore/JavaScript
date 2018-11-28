for (var i = 0; i < 5; i++) {
    (function IIFE() {
        var j = i;
        console.log(j);
    }) ();
}
