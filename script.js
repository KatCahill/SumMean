let array = 0;
let sum = 0;
let mean = 0;


function calculateSum() {
    let input = document.getElementById("inputArray").value;
    let array = input.split(",").map(Number);
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    document.getElementById("result").innerHTML = "The sum is: " + sum;
    button.removeEventListener("click", calculateSum);
  }

  function calculateMean() {
    let input = document.getElementById("inputArray").value;
    let array = input.split(",").map(Number);
    let mean = 0;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    mean = sum / array.length;
    document.getElementById("result").innerHTML = "The mean is: " + mean;
    meanbutton.removeEventListener("click", calculateMean);
  }
