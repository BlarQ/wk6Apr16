const idOne = document.getElementById('one');

idOne.textContent = 'Collins'
//OR
document.getElementById('lone').textContent = 'Damola'

//query selector
const title = document.querySelector('h1');

// alert(title.textContent)

title.textContent = 'DOM Manipulation'

const lists = document.querySelectorAll('ul li');

lists[1].textContent = 'John'
lists[2].textContent = 'Peter'

const twos = document.querySelectorAll('.two');

twos[0].innerHTML = 'Mikko'

const doux = document.getElementsByClassName('two')

doux[1].innerText = 'Joshua Adekunle'
doux[3].innerText = 'Ogunlala Adedamola'

lists[3].style.color = 'blue'
lists[3].style.backgroundColor = 'yellow'
lists[3].style.paddingBlock = '30px'
lists[3].style.paddingInline = '10px'

const doux = document.getElementsByTagName()