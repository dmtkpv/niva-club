import $ from '../helpers/utils'
import Item from './item'

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

    get origin () {
        const size = this.data.size;
        return {
            x: 0,
            y: 0,
            scale: 1,
            level: -1,
            offset: { width: size, height: size },
            $node: this.$node,
            size
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
        this.item = new Item(data, this.origin, this);
        this.items = $.flat(this.item);
        this.offset = $.offset(this.items, this.origin);

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
        this.item.$node.style.transition = 'none';
        this.item.$node.style.transform = `scale(${this.scale})`;
    }

    zoomTo (item) {
        if (this.scale > this.minScale) return;
        const parent = item.parent || { x: 0, y: 0 };
        const x = parent.x + item.x;
        const y = parent.y + item.y;
        const scale = Math.min(this.getScale(item.offset), this.scale);
        this.item.$node.style.transition = '';
        this.item.$node.style.transform = `scale(${scale}) translate(${-x}px, ${-y}px)`
    }

}