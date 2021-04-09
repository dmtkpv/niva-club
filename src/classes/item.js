import $ from '../helpers/utils'
import render from '../helpers/render'

export default class Item {



    // ------------------
    // Defaults
    // ------------------

    get defaults () {
        return {
            radius: 0,
            angle: 0,
            size: 0,
            link: false,
            classname: '',
            content: '',
            children: []
        }
    }



    // ------------------
    // Constructor
    // ------------------

    constructor (options, parent, map) {

        Object.assign(this, this.defaults, options);

        this.map = map;
        this.parent = parent;
        this.level = this.parent.level + 1;
        this.x = Math.cos(this.angle / 180 * Math.PI) * this.radius;
        this.y = Math.sin(this.angle / 180 * Math.PI) * this.radius;
        this.scale = this.parent.scale * this.size / this.parent.size;
        this.stroke = this.map.line * this.scale;

        this.$node = render.item(this);
        this.$line = render.line(this);
        this.$link = $.node(this.content);
        this.$link.classList.add('mm-link')
        this.$link.addEventListener('click', event => this.map.click(this));

        this.children = this.children.map(options => new Item(options, this, map));
        this.offset = $.offset(this.children, this);

        this.$node.appendChild(this.$line);
        this.$node.appendChild(this.$link);

        this.validate();
        this.hide();

        parent.$node.appendChild(this.$node);
    }



    // ------------------
    // Activation
    // ------------------

    show () {
        this.$node.style.transform = `translate(${this.x}px, ${this.y}px)`;
        this.$line.style.transform = `rotate(${180 + this.angle}deg)`;
    }

    hide () {
        this.$node.style.transform = `translate(0, 0)`;
        this.$line.style.transform = `rotate(${180 + this.angle}deg) scaleX(0)`;
    }



    // ------------------
    // Helpers
    // ------------------

    validate () {
        this.children.length && this.link && alert('"link" not allowed here.');
    }

    getRect () {
        return {
            left: this.parent.x + this.x - this.size / 2,
            right: this.parent.x + this.x + this.size / 2,
            top: this.parent.y + this.y - this.size / 2,
            bottom: this.parent.y + this.y + this.size / 2
        }
    }

    hasChild (child) {
        if (child === this) return true;
        return this.children.find(item => item.hasChild(child));
    }


}