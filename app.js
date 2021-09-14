let animals = ["dog", "fish", "cat", "shark", "cat", "dog"];

for(let i=0;i<animals.length; i++) if (animals[i] === "cat") {
    document.write("I am a cat");
    document.write("<br/>");

} else if (animals[i] === "dog") {
    document.write("borf borf");
    document.write("<br/>");

} else {
    document.write("I'm an animal");
    document.write("<br/>");
}

function myFunction() {
    document.getElementById("demo").innerHTML = "Scramble";
    const animals = [
        {type: "dog"},
        {type: "fish"},
        {type: "cat"}
        {type: "shark"}
        {type: "cat"}
        {type: "dog"}
    ];
}