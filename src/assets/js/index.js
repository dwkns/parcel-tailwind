const lastElement = document.body.lastChild ;
const paragraph = document.createElement('p');
paragraph.classList.add('text-center', 'text-green-600'); 
paragraph.innerText = 'This paragraph was added from JS to show bundling is working. Tailwind is working if it\'s green';
document.body.insertBefore(paragraph, lastElement);

