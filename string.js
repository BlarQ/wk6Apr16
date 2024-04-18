//STRING METHODS

const sentence = 'The quick brown fox jumped over the lazy dog'

//LENGTH OF A STRING
console.log(sentence.length)

//CONVERT TO UPPERCASE
console.log(sentence.toUpperCase())

//CONVERT TO LOWERCASE
console.log(sentence.toLowerCase())

//CUT OUT STRING
console.log(sentence.slice(0, 10))

//FINDING INDEX
console.log(sentence[sentence.length - 1])

//FINDING INDEX OF FOX
console.log(sentence.indexOf('fox'))

//FINDING INDEX OF FOX FROM POSITION 20
console.log(sentence.indexOf('fox', 20))

//FINDING INDEX OF FOXES
console.log(sentence.indexOf('foxes'))

//FINDING last INDEX OF 'o'
console.log(sentence.lastIndexOf('o'))

//REPLACE STRING
console.log(sentence.replace('dog','goat'))

//REPLACE ALL

console.log(sentence.replaceAll('o', '0'))

//check if jump exist
console.log(sentence.includes('jump'))

//check if sentence starts with "the"
console.log(sentence.startsWith('the'))

//check if sentence starts with "The"
console.log(sentence.startsWith('The'))

//Adding Strings together

console.log('Alphabet: '.concat(sentence))

//find where a string ends
console.log(sentence.endsWith('dog'))

//find a character at a particular index
console.log(sentence.charAt(16))

//Split: convert string to array
console.log(sentence.split(' '))

//Repeat
console.log(sentence.repeat(3))

const num = 80
console.log(num.toString())

console.log(String(num))