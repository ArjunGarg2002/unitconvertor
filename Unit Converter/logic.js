function convert() {
  // Get input values
  var inputNumber = parseFloat(document.getElementById("input-number").value);
  var inputUnit = document.getElementById("input-unit").value;
  var outputUnit = document.getElementById("output-unit").value;

  // Convert units
  var meter;
  switch (inputUnit) {
    case "meter":
      meter = inputNumber;
      break;
    case "kilometer":
      meter = inputNumber * 1000;
      break;
    case "mile":
      meter = inputNumber * 1609.344;
      break;
  }
  var outputNumber;
  switch (outputUnit) {
    case "meter":
      outputNumber = meter;
      break;
    case "kilometer":
      outputNumber = meter / 1000;
      break;
    case "mile":
      outputNumber = meter / 1609.344;
      break;
  }

  // Display output value
  document.getElementById("output-number").value = outputNumber.toFixed(2);
}
