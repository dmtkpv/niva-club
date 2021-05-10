import $ from '../helpers/utils'
import render from '../helpers/render'
import Item from './item'

export default class Root {

    get defaults () {
        return {
            size: 0,
            scale: 1,
            classname: '',
            content: '',
            children: []
        }
    }

    constructor (data, map) {

        Object.assign(this, this.defaults, data);

        this.map = map;
        this.level = -1;
        this.x = 0;
        this.y = 0;

        this.parent = {};
        this.parent.x = 0;
        this.parent.y = 0;
        this.parent.offset = {};
        this.parent.offset.width = this.size;
        this.parent.offset.height = this.size;

        this.$node = render.item(this);
        this.$link = $.node(this.content);
        this.$link.classList.add('mm-link')
        this.$link.addEventListener('click', event => this.map.click(this));

        this.children = this.children.map(options => new Item(options, this, map));
        this.offset = $.offset(this.children, this);

        this.$node.appendChild(this.$link);
        this.map.$node.appendChild(this.$node);

    }

}