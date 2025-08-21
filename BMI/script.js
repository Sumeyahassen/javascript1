let calculater = document.getElementById("calculater");
let weight = document.getElementById("Weight");
let height = document.getElementById("height");
let BMI;
let low = document.getElementById("low");
let medium = document.getElementById("medium");
let high = document.getElementById("high");
let text = document.getElementById("text");
console.log(typeof weight);
let intro_image = document.querySelector(".image");
let body=document.getElementsByTagName("body")[0];
// unit converstere
body.style.backgroundColor = "#f0f0f0";
function BMIcalculat() {
  let weghtUnit = document.getElementById("Weights").value;
  let heightUnit = document.getElementById("heights").value;
  let h = Number(height.value);
  let w = Number(weight.value);
  switch (weghtUnit) {
    case (weghtUnit.value = "G"):
      w = w * 0.001;
      break;
    case (weghtUnit.value = "KG"):
      w = w;
      break;
  }

  switch (heightUnit) {
    case (heightUnit.value = "CM"):
      h = h * 0.01;
      break;
    case (heightUnit.value = "M"):
      h = h;
      break;
  }
  BMI = Number(w / Math.pow(h, 2));
  if (isNaN(BMI)) {
    BMI = 0;
  } else if (BMI < 18) {
    text.innerHTML = `<span>You result is ${BMI.toFixed(
      2
    )} increase  your weight </span>`;
    low.style.display = "inline-block";
  } else if (BMI > 18 && BMI < 25) {
    text.innerHTML = `<span>You result is ${BMI.toFixed(
      2
    )} you are healthy </span>`;
    medium.style.display = "inline-block";
  } else {
    text.innerHTML = `<span>You result is ${BMI.toFixed(
      2
    )} plase lose weight</span>`;
    high.style.display = "inline-block";
  }
  calculater.style.display = "none";
  intro_image.style.display = "none";
  let cler = document.getElementById("clear");
  cler.style.display = "flex";
}
