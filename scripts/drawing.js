function drawShape(e) {
    // get coords mouse in canvas
    var coordsCanvas = e.currentTarget.getBoundingClientRect();
    var mouseCoords = new Coordinate(e.clientX, e.clientY);

    // get the type of shape
    var type;
    document.querySelectorAll('.radio-input').forEach(e => {
        if (e.checked) {
            type = e.id.split("input-")[1];
        }
    });

    var shape;
    console.log(type);
    if (type == "rectangle") {
        shape = new Rectangle(mouseCoords);
    } else if (type == "ellipse") {
        shape = new Ellipse(mouseCoords);
    } else if (type == "triangle") {
        shape = new Triangle(mouseCoords);
    }

    shape.draw();
}