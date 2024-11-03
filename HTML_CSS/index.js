//document.getElementById("count-el").innerText = 5;

let count = 0;
let saveNumbers = [];

function addOne() {
  count++;
  document.getElementById("count-el").innerText = count;
}

function saveNum() {
  saveNumbers.push(count);
  document.getElementById("save-el").innerText = saveNumbers.join(" - ");
}
