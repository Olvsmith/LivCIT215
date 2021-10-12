var stringers = [3, "Jerry", "Sandy", 4, "Pepper", 15, "Jocastah", 12];

const init = () => {
  stringers.map((message) => {
    let html,
      dynamicMes = "it is normal.",
      mes = document.createElement("div");
    mes.className = `message`;

    if (message.length <= 10 && message.length >= 5) {
      dynamicMes = "the length is below 10 and greater than 5.";
    } else if (message.length <= 10) {
      dynamicMes = "the length is below 10.";
    } else if (message.length === 15) {
      dynamicMes = "the length is exactly 15.";
    }

    html = `
        <div>
          The value is ${message} and ${dynamicMes}
        </div>
    `;

    mes.innerHTML = html;

    mes.addEventListener("click", (event) => {
      if (mes.className.includes("clicked")) {
        mes.className = "message";
      } else {
        mes.className = "message clicked";
      }
    });

    document.body.appendChild(mes);
  });
};

init();
