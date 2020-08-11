// onclick event
document.getElementById('myClick').onclick = function changeMyContent() {

    document.getElementById('myClick').innerHTML = "Its Working";
    document.getElementById('myClick').style = "Color: red;background-color:yellow";
 
 }

// change event
const selectClothes = document.querySelector('.clothes');

selectClothes.addEventListener('change', (event) => {
  const output = document.querySelector('.output');
  output.textContent = `You like ${event.target.value}`;
});

// mouseover & mouseout
function MouseOver(elem) {
    elem.style.color = "red";
  }
  
  function MouseOut(elem) {
    elem.style.color = "black";
  }

  // keydown & keyup
  document.addEventListener('keydown', logKey);

  function logKey(keyword) {
    keypress.textContent += ` ${keyword.code}`;  //KeyboardEvent.code
     
    // we can use this also

    // document.onkeydown = logKey;
  }
  const log = document.getElementById('keypress');

  document.addEventListener('keyup', logKey);
  
  function logKey(e) {
    log.textContent += ` ${e.code}`;
  }

//   function is a listener, or the observer.
  const btn = document.getElementById('subscribe');
    btn.addEventListener("click", function () {
        console.log("Button pressed sent msg");
        alert("brodcast this msg")
    });

// event bubbling

const bubble1 = document.getElementById('bubble1');
const bubble2 = document.getElementById('bubble2');

bubble1.addEventListener("click", function() {
  console.log("bubble1 clicked");

});
bubble2.addEventListener("click", function() {
  console.log("bubble2 clicked");
  
});

//event capturing

const capture1 = document.getElementById('bubble1')
const capture2 = document.getElementById('bubble2');

capture1.addEventListener("click", function() {
  console.log("bubble1 clicked");

});
capture2.addEventListener("click", function() {
  console.log("bubble2 clicked");
  
},true);
