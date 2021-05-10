import $ from '../helpers/utils'
import render from '../helpers/render'
import Item from './item'
const loader = `<svg class="mm-loader"><circle r="50%" cx="50%" cy="50%"/></svg>`

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
        this.$loader = $.node(loader);
        this.$link = $.node(this.content);
        this.$link.classList.add('mm-link');
        this.$link.addEventListener('click', event => this.map.click(this));

        this.children = this.children.map(options => new Item(options, this, map));
        this.offset = $.offset(this.children, this);

        this.$node.appendChild(this.$link);
        this.$node.appendChild(this.$loader)
        this.map.$node.appendChild(this.$node);
        this.load();

    }

    load () {

        const $circle = this.$loader.querySelector('circle');
        const $images = this.$node.getElementsByTagName('img');
        const length = $circle.getTotalLength();

        $circle.style.transition = 'none';
        $circle.style.strokeDasharray = length;
        $circle.style.strokeDashoffset = length;

        let loaded = 0;

        const update = () => {
            loaded++;
            $circle.style.transition = '';
            $circle.style.strokeDashoffset = length - loaded / $images.length * length;
            if (loaded !== $images.length) return;
            $circle.ontransitionend = () => this.$loader.classList.add('loaded');
        }

        for (let i = 0; i < $images.length; i++) {
            $images[i].onload = update;
            $images[i].onerror = update;
        }

    }

}