/*Chris Schultz
schultz_a03c.js
Info 2124 WW
Thoendel
12-16-2019*/

//declare variables
let preamble = "When in the course of human events";
let templateLiteral = `
The premable is:
    ${ preamble }

Does the preamble contain 'a'?
    ${ preamble.includes('a') }
`;

//print literal to console
console.log(templateLiteral);

//end program