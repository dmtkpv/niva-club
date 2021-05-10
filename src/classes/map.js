import $ from '../helpers/utils'
import Root from './root'

export default class MindMap {



    // -------------------
    // Defaults
    // -------------------

    get defaults () {
        return {
            padding: 0,
            line: 10,
            minScale: 0.5
        }
    }



    // -------------------
    // Constructor
    // -------------------

    constructor (selector, options, data) {

        Object.assign(this, this.defaults, options);

        this.$node = document.querySelector(selector);
        this.$node.classList.add('mm');

        this.scale = 1;
        this.data = data;
        this.root = new Root(data, this);
        this.items = $.flat(this.root);
        this.offset = $.offset(this.items, this.root);

        this.resize();
        window.addEventListener('resize', () => this.resize());

    }



    // -------------------
    // Click
    // -------------------

    click (item) {

        if (item.link) {
            return window.open(item.link)
        }

        this.items.forEach(_item => {
            if (_item.level === item.level && _item !== item) {
                _item.active = false;
            }
            if (_item.level > item.level) {
                _item.active = false;
                _item.hide();
            }
        })

        if (item.active) {
            item.active = false;
            this.zoomTo(item.parent);
        }
        else {
            item.active = true;
            item.children.forEach(item => item.show());
            this.zoomTo(item);
        }

    }



    // -------------------
    // Helpers
    // -------------------

    getScale (offset) {
        const sw = this.$node.offsetWidth / (offset.width + this.padding * 2);
        const sh = this.$node.offsetHeight / (offset.height + this.padding * 2);
        return Math.min(sw, sh);
    }

    resize () {
        this.scale = Math.max(this.getScale(this.offset), this.minScale);
        this.root.$node.style.transition = 'none';
        this.root.$node.style.transform = `scale(${this.scale})`;
    }

    zoomTo (item) {
        if (this.scale > this.minScale) return;
        const parent = item.parent || { x: 0, y: 0 };
        const x = parent.x + item.x;
        const y = parent.y + item.y;
        const scale = Math.min(this.getScale(item.offset), this.scale);
        this.root.$node.style.transition = '';
        this.root.$node.style.transform = `scale(${scale}) translate(${-x}px, ${-y}px)`
    }

}