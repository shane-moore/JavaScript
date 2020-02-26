// interpreter will support following instructions
// mov x y where y is constant or val in register into register x
// inc x increases content of register x by 1
// dec x decreases content of register x by 1
// jnz x y jumps to an instruction y steps away but only if x is a cosntant or a register and not zero
// register names are alphabetical
// constants are integers
// input is a sequence of program instructions
// return a dictionary with contents of registers
// every inc / dec / jnz on a register will be followed by a mov on the register first

// loop over array
// if string contains mov, create variable a equal to y
// if includes dec, subtract value by 1
// if includes jnz, go to index + (y)

const simple_assembler = function(program) {
    console.log(program)
    const mem = {};
    for( let i = 0; i < program.length; ++i ) {
        console.log(i)
        const [op, reg, val] = program[i].split(" ");
        if( op === 'mov' ) {
            console.log(typeof val)
            console.log(mem[val])
            mem[reg] = isNaN(val) ? true : 0;
            console.log(mem[reg]);
        } else if( op === "inc" ) {
            mem[reg] = isNaN(reg) ? mem[reg] : mem[reg]++;
        } else if( op === "dec" ) {
            mem[reg] = isNaN(reg) ? mem[reg] : mem[reg]--;
        } else if ( op === 'jnz' ) {
            if( mem[reg] !== 0 ) {
                i += val - 1;
            }
        }
    }
    return mem;
}
simple_assembler(['mov a 5', 'inc a', 'dec a', 'dec a', 'jnz a -1', 'inc a'])