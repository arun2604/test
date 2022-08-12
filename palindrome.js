
let string = "Anna"
let uppercase = string.toUpperCase()


let split = uppercase.split('');
let reverse = split.reverse();
let join = reverse.join('')

if (uppercase === join){
    console.log('true')
}
else{
    console.log('false')
}