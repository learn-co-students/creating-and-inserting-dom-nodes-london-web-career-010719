//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded

# create element
let element = document.createElement('div');

# style element
element.innerHTML = 'Hello, DOM!';
element.style.backgroundColor = '#f9f9f9';
element.style.textAlign = 'center';

# append element
document.body.appendChild(element);


# create element
let ul = document.createElement('ul');

# add list
for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}
# append element
element.appendChild(ul);
ul.style.textAlign = 'left';

#remove elements 
ul.removeChild(ul.querySelector('li:nth-child(2)'));
ul.remove();
