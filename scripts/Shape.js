class Shape {
    constructor (coords) {
        this.coords = coords;
        this.size = new Size (Math.floor(Math.random() * 80) + 20, Math.floor(Math.random() * 80) + 20);
        this.color = new Color (Math.floor(Math.random() *256), Math.floor(Math.random() *256), Math.floor(Math.random() *256));
        this.dom_object = undefined;
    } 
}

Shape.prototype.draw = function(){
    this.dom_object = document.createElement("div");
    this.dom_object.setAttribute('class', "shape");
    this.dom_object.style.top = this.coords.y - this.size.height/2 + "px";
    this.dom_object.style.left = this.coords.x - this.size.width/2 + "px";
    this.dom_object.style.width = this.size.width + "px";
    this.dom_object.style.height = this.size.height + "px";
    this.dom_object.style.backgroundColor = this.color.getRVBString();
}

class Rectangle extends Shape {
    draw() {
        super.draw();
        document.getElementById(CANVAS_ID).appendChild(this.dom_object);
    }
}

class Ellipse extends Shape {
    draw() {
        super.draw();
        this.dom_object.style.borderRadius = "50%";
        document.getElementById(CANVAS_ID).appendChild(this.dom_object);
    }
}

class Triangle extends Shape {
    draw() {
        super.draw();
        this.dom_object.style.backgroundColor = "rgba(0,0,0,0)";
        this.dom_object.innerHTML = '<svg viewBox="0 0 100 100" fill="'+this.color.getRVBString()+'" width="100%" height="100%" preserveAspectRatio="none"><polygon points="50,0 100,100 0,100">"</svg>';
        document.getElementById(CANVAS_ID).appendChild(this.dom_object);
    }
}


