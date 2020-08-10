// synchronous

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  alert('You clicked me!');

  let para = document.createElement('p');
  para.textContent = 'Hello Welcome here';
  document.body.appendChild(para);
});