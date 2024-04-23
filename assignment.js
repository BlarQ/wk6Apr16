/*String Methods: What does the toUpperCase() method do when applied to a string in JavaScript? */

const str = 'hello'
let upperCase = str.toUpperCase()


//converts a string from a lowercase character and returns the string with the uppercase characters
document.getElementById('uppOutput').innerText = upperCase;

/*Number Operators: Explain the difference between the == and === operators in JavaScript when comparing two values. */
const numOperators = document.getElementById('numOpr')
let num1 = 10
let num2 = '10'
let num3 = '20'
let num4 = 0
let num5 = false

let falsy = num1 === num2
let truthy = num1 == num2
let extra = num4 == num5
let extra2 = num4 === num5

let numOperatorsResult = falsy + ' | ' + truthy + ' | ' + extra + ' | ' + extra2
//The == operator checks for equality after performing type conversion while The === operator checks for equality without performing type conversion. The === operator also ensures that the comparison is based solely on the value and type of the operands
numOperators.innerText = numOperatorsResult

/*DOM Manipulation: How would you select an HTML element with the ID "example" using JavaScript? */

const exaSelect = document.getElementById('example')

exaSelect.innerHTML = `Selecting HTML element with ID "example"`

/*String Methods: What does the slice() method do when applied to a string in JavaScript? */

const strMeth = document.getElementById('sliMeth')
let sli1 = 'I am a FrontEnd Developer'
let sli2 = 'I am BlarQ'

let strSlice1 = sli1.slice(7, 25)
let strSlice2 = sli2.slice(5, 10)
//Slice extracts a section of a string and returns it as a new string, without modifying the original string. This method takes one or two parameters which is the start and end of the string.
strMeth.innerText = strSlice2 +' is a '+ strSlice1

/*Number Operators: What does the % operator do in JavaScript? */

const modOpr = document.getElementById('mod')

let mod1 = 10 % 3
//It returns the remainder of dividing the left operand by the right operand.
modOpr.innerText = mod1

/*DOM Manipulation: How would you change the text content of an HTML element with the class "content" using JavaScript? */
const content = document.querySelector('.content')

let classContent = `This can be selected using querySelector with a full stop before the class name or alternatively using getElementByClassName and specifying the class using a square bracket []`

content.innerText = classContent

/*String Methods: Explain the difference between indexOf() and lastIndexOf() methods in JavaScript when applied to strings. */
const indexString = document.getElementById('index')










