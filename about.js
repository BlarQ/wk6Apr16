const pOne = document.getElementById('intro')

pOne.innerHTML = '<strong>Introduction:</strong> I am Adedamola also called BlarQ. I am a Tech Savvy and student of Univelcity'

const pTwo = document.getElementsByClassName('body')

pTwo[0].innerHTML = '<strong>Passions and Interests:</strong> You have a deep passion for technology and its ever-evolving landscape, constantly exploring new innovations and developments.'

const pTwo1 = document.getElementsByClassName('body')

pTwo1[1].innerHTML = '<strong>Professional Background:</strong>  With a background in computer science/engineering, i have honed your skills in software development, perhaps specializing in areas like web development, machine learning, or cybersecurity. I learnt <abbr title="HyperText MarkUp Language">HTML</abbr>, <abbr title="Cascading Style Sheet">CSS</abbr> and still learning <abbr title="JavaScript">JS</abbr>'

const pTwo2 = document.getElementsByClassName('body')

pTwo2[2].innerHTML = "<strong>Education:</strong> You pursued your education in a reputable institution, earning a degree in a relevant field and possibly continuing your learning journey through online courses or certifications."

const pTag = document.getElementsByTagName('p')

pTag[4].innerHTML = "<strong>Projects and Contributions:</strong> You've actively contributed to projects within your field, whether through personal projects, open-source contributions, or collaborations with other professionals or organizations."

const pTag1 = document.getElementsByTagName('p')

pTag1[5].innerHTML = "<strong>Skills and Expertise:</strong> Your skillset extends beyond technical knowledge, encompassing problem-solving abilities, critical thinking, teamwork, and effective communication skills."

const pTag2 = document.getElementsByTagName('p')

pTag2[6].innerText = 'Hobbies: My hobbies are: \n Dancing \n Singing \n Coding'

const head = document.querySelector('h1')

head.style.color = 'blue'
head.style.textAlign = 'center'
head.style.borderBottom = '5px solid'

