let output = document.getElementById("output");

function addToOutput(value) {
  output.value += value;
}

function calculate() {
  output.value = eval(output.value);
}

function clearOutput() {
  output.value = "";
}
