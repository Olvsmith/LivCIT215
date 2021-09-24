var chrs = [
  { name: "Optimus Prime", class: "leader", afl: "autobot", vehicle: "truck" },
  { name: "Megatron", class: "leader", afl: "decepticon", vehicle: "tank" },
  { name: "Bumblebee", class: "scout", afl: "autobot", vehicle: "car" },
  { name: "Starscream", class: "scout", afl: "decepticon", vehicle: "plane" },
  { name: "Ironhide", class: "soldier", afl: "autobot", vehicle: "truck" },
  { name: "Brawl", class: "soldier", afl: "decepticon", vehicle: "tank" },
];

// Helper function to pick the color of the text.
function pickColor(vehicle) {
  let color = "";

  switch (vehicle) {
    case "truck":
      color = "blue";
      break;
    case "tank":
      color = "green";
      break;
    case "car":
      color = "gold";
      break;
    case "plane":
      color = "white";
      break;
  }

  return color;
}

// Generates the html for the document.
function generate() {
  // Create a blank div element
  let html = document.createElement("div");

  html.className = "characters";

  // Iterates over the array
  chrs.map((obj) => {
    let image =
      "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";

    if (obj.afl === "decepticon")
      image =
        "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";

    html.insertAdjacentHTML(
      "beforeend",
      `
            <div class="character ${obj.afl}">
                <img src="${image}" alt="${obj.name}" />
                <br />
                <span>Name: ${obj.name}</span>
                <br />
                <span>Class: ${obj.class.toUpperCase()}</span>
                <br />
                <span style="color: ${pickColor(obj.vehicle)};">Vehicle: ${
        obj.vehicle
      }</span>
                <br />
            </div>
        `
    );
  });

  document.body.appendChild(html);
}

generate();
