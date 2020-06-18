setInterval(function addDirAutoAttribute() {
  var theID = document.getElementById("editor-container");
  if(theID){
    var theElement = document.getElementsByClassName("ProseMirror");
    for (var i=0; i < theElement.length; i++) {
      if (!theElement[i].hasAttribute("dir")) {
        theElement[i].setAttribute("dir", "auto");
      }
    }
  }
}, 1000);
window.onload = addDirAutoAttribute;
