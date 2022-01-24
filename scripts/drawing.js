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
    if (type == "rectangle") {
        shape = new Rectangle(mouseCoords);
    } else if (type == "ellipse") {
        shape = new Ellipse(mouseCoords);
    } else if (type == "triangle") {
        shape = new Triangle(mouseCoords);
    }

    shape.draw();
}

function drawLotOfShape(n){
    var bb = document.getElementById('canvas').getBoundingClientRect();
    for (var i = 0 ; i < n ; i++) {
        // get random point
        var coords = new Coordinate(Math.floor(Math.random() * bb.width), Math.floor(Math.random() * bb.height));

        // get the type of shape
        var type;
        document.querySelectorAll('.radio-input').forEach(e => {
            if (e.checked) {
                type = e.id.split("input-")[1];
            }
        });

        var shape;
        if (type == "rectangle") {
            shape = new Rectangle(coords);
        } else if (type == "ellipse") {
            shape = new Ellipse(coords);
        } else if (type == "triangle") {
            shape = new Triangle(coords);
        }

        shape.draw();
    }
    

}