document.onclick = function(e) {

    coords.innerHTML = e.clientX + ':' + e.clientY
};


let trCoords = field.getBoundingClientRect()

alert(`1: ${trCoords.left}, ${trCoords.top}`)
alert(`2: ${trCoords.right}, ${trCoords.bottom}`)
alert(`3: ${trCoords.left + field.clientLeft}, ${trCoords.top + field.clientTop}`)
alert(`4: ${trCoords.left + field.clientLeft + field.clientWidth}, ${field.clientTop + field.clientHeight}`)