// synchronous
console.log("click");
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  alert('you will get paragraph!');

  let para = document.createElement('p');
  para.textContent = 'Hello Welcome here';
  console.log("new-para",para.textContent);
  document.body.appendChild(para);
});


// asynchronous
// console.log("start here");
// const btn1 = document.querySelector('#btn');
// btn1.addEventListener('click', () => {
//   console.log("called");
// });
// console.log("done");

// asynchronous
console.log ('asynch block');
let image;
fetch('time.png').then((response) => {
  console.log('fetching image & came here)')
  return response.blob();  //MIME-type
}).then((myimage) => {
  let objectURL = URL.createObjectURL(myimage);
  image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}).then(() => {
    (console.log ('end block!' + image.src));
}).catch((error) => {
  console.log('error on fetching image: ' + error.message);
});

