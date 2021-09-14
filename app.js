// Fisher-Yates algorithm for shuffling an array.
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function scramble(shuffleArray = false) {
  let htmlString = "";
  let animals = ["dog", "fish", "cat", "shark", "cat", "dog"];
  let box = document.getElementsByClassName("box")[0];

  //if we pass true then we want to use the
  // helper function to mutate the array and
  // shuffle everything up.
  if (shuffleArray) shuffle(animals);

  for (let i = 0; i < animals.length; i++) {
    if (animals[i] === "cat") {
      htmlString += "I am a cat <br/>";
    } else if (animals[i] === "dog") {
      htmlString += "borf borf <br/>";
    } else {
      htmlString += "I'm an animal <br/>";
    }
  }

  box.innerHTML = htmlString;
}

scramble();
