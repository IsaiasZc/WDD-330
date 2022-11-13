let mice = document.querySelectorAll("#mouseContainer img");

let mouse = null;
for (let i=0; i < mice.length; i++) {
    mouse = mice[i];
    mouse.addEventListener("dragstart", function (event) {
      event.dataTransfer.setData("text/plain", this.id); 
  });
}

let cat = document.getElementById("cat");
cat.addEventListener("dragover", function(event) {
    event.preventDefault();
});