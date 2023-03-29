let output = document.getElementById("output");

const addToOutput=(value)=> {
  output.value += value;
}

const calculate=()=> {
  output.value = eval(output.value);
}

const clearOutput=()=> {
  output.value = "";
}
