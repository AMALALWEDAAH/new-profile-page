console.log("page loaded...");
function removeUser() {
  const element = document.querySelector(".card-list-item");

  element.remove();
}

function edit() {
  document.getElementById("name").innerHTML = "Doe";
}

var count = 2;
var countE = document.querySelector(".badge");
function add() {
  count++;
  countE.innerHTML = +count;
}

function sub() {
  count--;
  countE.innerHTML = +count;
}
