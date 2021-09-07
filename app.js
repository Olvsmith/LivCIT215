const writer = (message, number)=>{
    let ele = document.createElement("div");
    let sum = 5+number;
    ele.innerHtml=message+" so many times "+sum;
    document.body.querySelector(".box").appendChild(ele);
}
let message=prompt("Are you ready to begin?");
let milesPerYear = Number(prompt("Enter the number of miles per year:"));
let costPerGallon = Number(prompt("Enter the cost of gallon"));

function yearlyCost(miles, cost, rating){

    return (miles*cost)/rating;
}

document.write("To drive a car with a MPG rating of 12 for "+milesPerYear+" at $"+costPerGallon+" per gallon would cost $"+yearlyCost(milesPerYear, costPerGallon, 12));
document.write("<br>To drive a car with a MPG rating of 17 for "+milesPerYear+" at $"+costPerGallon+" per gallon would cost $"+yearlyCost(milesPerYear, costPerGallon, 17));
document.write("<br>To drive a car with a MPG rating of 26 for "+milesPerYear+" at $"+costPerGallon+" per gallon would cost $"+yearlyCost(milesPerYear, costPerGallon, 26));
document.write("<br>To drive a car with a MPG rating of 29 for "+milesPerYear+" at $"+costPerGallon+" per gallon would cost $"+yearlyCost(milesPerYear, costPerGallon, 29));

document.getElementById("reset").onclick = function() {
    document.getElementById("number").value = "Would you like to try again?";
};
writer(message, milesPerYear);
writer(message, costPerGallon);

