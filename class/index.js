class Component {
    constructor(selector) {
        this.el = document.querySelector(selector);
    }

    show() {
        this.el.style.display = "none";
    }

    hide() {
        this.el.style.display = "block";
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector) 
            this.el.style.width = this.el.style.height = options.size + "px";
            this.el.style.background = options.bg;        
    }
}

class Circle extends Box {
    constructor(options) {
        super(options) 
            this.el.style.borderRadius = "50%";
        
    }
}

const box1 = new Box({selector:".box1", size: 100, bg:"red"});
const box2 = new Box({selector:".box2", size: 100, bg:"green"});
const circle = new Circle({selector:".circle", size: 100, bg:"blue"});