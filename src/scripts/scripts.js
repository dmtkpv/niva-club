(() => {



    // ------------------
    // Templates
    // ------------------

    function toNode (html) {
        const $node = document.createElement('div');
        $node.innerHTML = html;
        return $node.firstElementChild;
    }

    function createItem ({ size }) {
        const s = size + 'px', m = size / -2 + 'px';
        return toNode(`<div class="mm-item" style="width: ${s}; height: ${s}; margin: ${m} 0 0 ${m}" />`);
    }

    function createLine ({ radius, stroke }) {
        const w = radius + 'px', h =  stroke + 'px';
        const m = stroke / -2 + 'px', o = stroke / 2 + 'px';
        return toNode(`<div class="mm-line" style="width: ${w}; height: ${h}; margin: ${m} 0 0 ${m}; transform-origin: ${o} ${o}" />`);
    }

    function createLink ({ link, classname, content }) {
        return toNode(`<a ${link ? `href="${link}"` : ''} class="mm-link ${classname}">${content}</a>`);
    }



    // ------------------
    // Click Handler
    // ------------------

    function click () {
        if (!this.children.length) return;
        this.active = !this.active;
        this.children.forEach(item => this.active ? item.activate() : item.deactivate());

    }



    // ------------------
    // Item Class
    // ------------------

    class Item {

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

        get parentDefaults () {
            return {
                s: 1,
                x: 0,
                y: 0,
                size: this.size
            }
        }

        get rect () {
            return {
                left: this.parent.x + this.x - this.size / 2,
                right: this.parent.x + this.x + this.size / 2,
                top: this.parent.y + this.y - this.size / 2,
                bottom: this.parent.y + this.y + this.size / 2,
            }
        }

        constructor (options, parent, style) {

            Object.assign(this, this.defaults, options);

            this.active = false;
            this.parent = Object.assign(this.parentDefaults, parent);
            this.x = Math.cos(this.angle / 180 * Math.PI) * this.radius;
            this.y = Math.sin(this.angle / 180 * Math.PI) * this.radius;
            this.s = this.parent.s * this.size / this.parent.size;
            this.stroke = style.line * this.s;

            this.$node = createItem(this);
            this.$line = createLine(this);
            this.$link = createLink(this);
            this.$link.addEventListener('click', click.bind(this));

            this.children = this.children.map(options => new Item(options, this, style));
            this.$node.appendChild(this.$line);
            this.$node.appendChild(this.$link);

            this.validate();
            // this.deactivate(false);
            this.activate();
            parent.$node.appendChild(this.$node);
        }



        activate () {
            this.$node.style.transform = `translate(${this.x}px, ${this.y}px)`;
            this.$line.style.transform = `rotate(${180 + this.angle}deg)`;
        }

        deactivate (deep = true) {
            this.$node.style.transform = `translate(0, 0)`;
            this.$line.style.transform = `rotate(${180 + this.angle}deg) scaleX(0)`;
            if (deep) {
                this.active = false;
                this.children.forEach(item => item.deactivate());
            }
        }

        validate () {
            this.children.length && this.link && alert('"link" not allowed here.');
        }

    }



    // ------------------
    // Helpers
    // ------------------

    function toFlat (item, result = []) {
        result.push(item);
        item.children.forEach(item => toFlat(item, result));
        return result;
    }

    function getRect (items) {

        const lefts = [], rights = [], tops = [], bottoms = [];

        items.forEach(item => {
            const { left, right, top, bottom } = item.rect;
            lefts.push(left);
            rights.push(right);
            tops.push(top);
            bottoms.push(bottom);
        })

        return {
            left: Math.min(...lefts),
            right: Math.max(...rights),
            top: Math.max(...tops),
            bottom: Math.min(...bottoms),
        }

    }


    const $map = document.getElementById('map');
    const $area = toNode('<div class="mm-area" />');
    const $image = toNode('<div class="mm-image" />');
    const map = new Item(Config.data, { $node: $image }, Config.style);
    const items = toFlat(map);
    const rect = getRect(items);
    console.log(rect);




    $area.appendChild($image);
    $map.appendChild($area);
    $map.classList.add('mm');


    function resize () {

        // const w = $map.offse

    }

    window.addEventListener('resize', resize);
    resize();



})();