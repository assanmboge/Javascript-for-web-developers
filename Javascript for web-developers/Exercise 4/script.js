window.onscroll = function() {scrollFunction()};
let elem = document.getElementById('popUp');

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("popUp").className = "empty";
  } else {
    document.getElementById("popUp").className = "";
  }
};


// className = style.display
