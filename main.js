const startDefault = document.querySelector(".start-default");
const pause = document.querySelector(".pause");
const resetDefault = document.querySelector(".reset-default");
const startDisabled = document.querySelector(".start-disabled");
const resetDisabled = document.querySelector(".reset-disabled");

function checkNumber(input) {
  if (input.value < 0) input.value = 0;
  if (input.value > 99) input.value = 99;
}

function handleInputChange(inputId) {
    let value = document.getElementById(inputId).value;
    if (value) {
      startDefault.classList.add("flex");
      startDisabled.classList.remove("flex");
      startDisabled.classList.add("none");
    }
    console.log(value);
  }
  
  
  document.getElementById("Hours").onchange = function() { handleInputChange("Hours"); };
  document.getElementById("Min").onchange = function() { handleInputChange("Min"); };
  document.getElementById("Sec").onchange = function() { handleInputChange("Sec"); };


