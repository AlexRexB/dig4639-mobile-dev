import "./index.css"

class Task {
    constructor(props) {
        this.props = props;
        this.element = document.createElement("div");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        this.onClick = this.onClick.bind(this);
        checkbox.addEventListener("change",this.onClick);

        this.element.appendChild(checkbox);
        let span = document.createElement("span");
        this.element.appendChild(span);
        span.innerHTML = this.props.content;
        this.element.className = "task";
    }
    onClick(e) {
        var myString = ""
        if(myString != "") {
            console.log("INPUT IS TRUE");
        }
        console.log(this);
        console.log(e.target);
        console.log();
    }
    render() {
        return this.element;
    }
}

export default Task;