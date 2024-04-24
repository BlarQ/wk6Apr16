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

let str1 = 'I am a FrontEnd Developer'

let str2 = 'I am BlarQ'

let index1 = str1.indexOf('a')

let index2 = str2.indexOf('a')

let index3 = str1.lastIndexOf('a')

let index4 = str2.lastIndexOf('a')

indexString.innerText = index1 +'|'+ index2 +'|'+ index3 +'|'+ index4

//Number Operators: What does the ++ operator do when used with a variable in JavaScript?

const numOpr2 = document.getElementById('numOpr2')

let num11 = 10
let num12 = 10

num11++

numOpr2.innerText = num11 +'|'+ num12

//DOM Manipulation: How would you create a new HTML element (e.g., <div>) using JavaScript?

const newDiv = document.createElement('div')

newDiv.innerText = 'This is a new div element'

document.body.appendChild(newDiv)


//String Methods: What does the concat() method do when applied to strings in JavaScript?

const strMeth2 = document.getElementById('sliMeth2')

let sli3 = 'I am a FrontEnd Developer'

let sli4 = 'I am BlarQ'

let sli5 = ' & '

let strSlice3 = sli3.concat(sli5, sli4)

strMeth2.innerText = strSlice3

//String Methods: How does the split() method work when applied to a string in JavaScript?

const strMeth3 = document.getElementById('spiMeth3')

let sli6 = 'I am a FrontEnd Developer'

let sli7 = 'I am BlarQ'

let sli8 = ' & '

let strSlice4 = sli6.split(' ')

let strSlice5 = sli7.split(' ')

strMeth3.innerText = strSlice4[3] + sli8 + strSlice5[2]

//Number Operators: Explain the difference between the / and % operators when used with numbers in JavaScript.

const numOpr3 = document.getElementById('numOpr3')

let num13 = 10

let num14 = 3

let num15 = num13 / num14

let num16 = num13 % num14 

numOpr3.innerText = num15 +' | '+ num16

//DOM Manipulation: How would you add a CSS class "active" to an HTML element with the ID "menu" using JavaScript?

const menu = document.getElementById('menu')

menu.innerText = 'Active'

menu.classList.add('active')

//String Methods: What does the charAt() method do when applied to a string in JavaScript?

const strMeth4 = document.getElementById('chaMeth4')

let sli9 = 'I am a FrontEnd Developer'

let sli10 = 'I am BlarQ'

let sli11 = ' & '

let strSlice6 = sli9.charAt(16)

let strSlice7 = sli10.charAt(3)

strMeth4.innerText = strSlice6 +' | '+ strSlice7

//Number Operators: How would you round a number to the nearest integer in JavaScript?

const numOpr4 = document.getElementById('numOpr4')

let num17 = 10.5

let num18 = Math.round(num17)

numOpr4.innerText = num17 +' | '+ num18

//DOM Manipulation: How would you remove an HTML element with the class "hidden" using JavaScript?

const hidden = document.querySelector('.hidden')

hidden.classList.remove('hidden')

//String Methods: Describe the purpose of the replace() method when applied to strings in JavaScript.

const strMeth5 = document.getElementById('repMeth5')

let sli12 = 'I am a FrontEnd Developer'

let sli13 = 'I am BlarQ'

let strSlice8 = sli12.replace('FrontEnd', 'BackEnd')

let strSlice9 = sli13.replace('BlarQ', 'Damola')

strMeth5.innerText = strSlice8 +' | '+ strSlice9

//Number Operators: What does the Math.random() function do in JavaScript?

const numOpr5 = document.getElementById('numOpr5')

let num19 = Math.random()

numOpr5.innerText = num19

//DOM Manipulation: How would you retrieve the value of an input field with the ID "username" using JavaScript?

const info = document.getElementById('username')
const button = document.getElementById('button') 
const username = document.getElementById('userOutput')

button.addEventListener('click', function() {
    let user = info.value 
    username.innerText = user
})


//String Methods: Explain the usage of the trim() method when applied to strings in JavaScript.

const strMeth6 = document.getElementById('triMeth6')

let sli14 = '  I     am     a    FrontEnd Developer '

let sli15 = '    I      am     BlarQ      '

let strSlice10 = sli14.trim()

let strSlice11 = sli15.trim()

strMeth6.innerText = strSlice10 +' | '+ strSlice11

