var _ = require('lodash');
var array = [1, 2, 3, 4, 5, 6,7,8,9,10];
// var concat = _.concat(array, 10,11,12);
 //console.log(concat);

 //RETURN ARRAY OF CHUNKS OF ARRAY WITH SIZE AS ARGUMENT
// var chunk = _.chunk(array, 3);
// console.log(chunk)

//DROP ARRAY FROM LEFT WITH NO. OF ELEMENTS TO DROP AS ARGUMENT
// var drop = _.drop(array,0)
// console.log(drop)

//DROP ARRAY FROM RIGHT WITH NO. OF ELEMENTS TO DROP AS ARGUMENT
// var dropRight=_.dropRight(array,5)
//  console.log(dropRight)

var dropRightWhile = _.dropRightWhile(array, (n) => { return n % 2 == 0 })
console.log(dropRightWhile)