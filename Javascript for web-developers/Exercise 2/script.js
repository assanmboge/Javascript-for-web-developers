
var place = 0;
  setInterval(function() {
    var pickList = ["url(img/runner2.png)","url(img/runner3.png)", "url(img/runner4.png)"];
    place++;
    if (place===pickList.length) place=0;
      document.body.style.backgroundImage = pickList[place];
  }, 50);
