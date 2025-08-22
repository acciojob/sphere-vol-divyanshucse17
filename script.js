function volume_sphere() {
  // get the radius input value
  let radius = document.getElementById("radius").value;

  // convert to number
  radius = parseFloat(radius);

  // calculate volume only if valid
  let volume;
  if (isNaN(radius) || radius < 0) {
    volume = NaN;
  } else {
    volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(4); // round to 4 decimal places
  }

  // display result
  document.getElementById("volume").value = volume;

  // prevent form from refreshing page
  return false;
}

window.onload = function () {
  document.getElementById("MyForm").onsubmit = volume_sphere;
};
