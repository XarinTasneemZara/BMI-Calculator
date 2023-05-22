let button = document.getElementById("calculate");
let result = document.getElementById("result");


function bmi() {
    let height = document.getElementById("height-input").value;
    let weight = document.getElementById("weight-input").value;
    let bmiResult = weight / (height*height);
    result.value= bmiResult;
    let condition = document.getElementById("weight-condition");

    if (bmiResult <= 18.5) {
        condition.innerText = "underweight";
    }

    else if (bmiResult > 18.5 && bmiResult <= 24.9) {
        condition.innerText = "Normal Weight";
    }

    else if (bmiResult > 24.9) {
        condition.innerText = "Over Weight";
    }
}

    

button.addEventListener("click", bmi)