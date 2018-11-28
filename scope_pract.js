function outer(a,b) {
    var a = "string";
    var b = {
property: "string2"
    };
    function inner () {
        var a = "string3";
        var b = {
            property: "string4"
        };
        b.property2 = "string5";
        console.log(a,b.property2);
    }
    inner(a, b);
    console.log(a,b);
}
outer ();
console.log('branch to master part 2')