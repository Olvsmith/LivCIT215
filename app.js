let boxes = [];
let array = [
  { counter: 0, color: "blue" },
  { counter: 0, color: "red" },
  { counter: 0, color: "green" },
];

function Box(button) {
  const _self = this;

  _self.counter = button.counter;
  _self.color = button.color;

  _self.ele = document.createElement("div");
  _self.ele.style.backgroundColor = this.color;
  _self.ele.style.justifyContent = "center";
  _self.ele.style.cursor = "pointer";
  _self.ele.style.alignItems = "center";
  _self.ele.style.borderRadius = "10px";
  _self.ele.style.color = "white";
  _self.ele.style.fontSize = "32px";
  _self.ele.style.fontWeight = "bold";
  _self.ele.style.textAlign = "center";
  _self.ele.style.display = "flex";
  _self.ele.style.margin = "auto 0";
  _self.ele.style.height = "100px";
  _self.ele.style.width = "200px";

  _self.ele.innerHTML = this.counter;

  _self.ele.addEventListener("click", function () {
    _self.increaseNumber();
  });

  document.body.appendChild(this.ele);
}

Box.prototype.increaseNumber = function () {
  this.counter = this.counter + 1;
  this.ele.innerHTML = this.counter;
};

for (let i = 0; i < array.length; i++) {
  boxes.push(new Box(array[i]));
}
