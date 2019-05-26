
var counter = 0;
setInterval(function(){
  console.log(counter);
  counter++;
  if (counter == 101) {
    counter = 0;
    console.log(counter);
  }
}, 120);

//const timerId = window.setInterval(() => {
  //index = index
//})
