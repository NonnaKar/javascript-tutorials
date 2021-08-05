// getting and setting attribute of element

const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'The Net Ninja Website';

const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');

const titleOne = document.querySelector('h1');
// titleOne.setAttribute('style', 'margin: 50px');
console.log(titleOne.style);
console.log(titleOne.style.color);

title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '60px';
title.style.margin = '';

// adding and removing class

const contentTwo = document.querySelector('h3');
console.log(contentTwo.classList);
contentTwo.classList.add('errorTrue');
contentTwo.classList.remove('errorTrue');
contentTwo.classList.add('successTrue');

// challenge

const parasParas = document.querySelectorAll('h4');

parasParas.forEach(h4 => {
    if(h4.textContent.includes('errors')){
        h4.classList.add('errorTrue')
    }
    if(h4.innerText.includes('success')){
        h4.classList.add('successTrue');
    }
});

// toggling class

const titleTwo = document.querySelector('.title');

titleTwo.classList.toggle('test');
titleTwo.classList.toggle('test');