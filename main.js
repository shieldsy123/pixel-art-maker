function changeColor() {
  const color = document.getElementById("colorPicker").value;
  this.style.background = color;
}

function makeGrid() {
  const gridHeight = document.getElementById("input_height").value;
  const gridWidth = document.getElementById("input_width").value;
  const pixelCanvas = document.getElementById("pixel_canvas");
  pixelCanvas.innerText = "";

  for (let i = 0; i < gridHeight; ++i) {
    const row = pixelCanvas.insertRow(-1); // insert new row at the last position
    for (let j = 0; j < gridWidth; ++j) {
      const cell = row.insertCell(-1); //insert new cell at the last position
      cell.onclick = changeColor;
    }
  }
    event.preventDefault();
  }
