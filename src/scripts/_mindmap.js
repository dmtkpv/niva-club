const MindMap = (() => {



    // ----------------------
    // Crete element
    // ----------------------

    function createElement ({ angle, radius, scale, image }) {

        const $el = document.createElement('div');

        const $img = document.createElement('img');
        $img.src = image;
        $el.appendChild($img)

        const x = Math.cos(angle / 180 * Math.PI) * radius;
        const y = Math.sin(angle / 180 * Math.PI) * radius;

        $el.className = 'mm-item'
        $el.style.setProperty('--scale', scale);
        $el.style.transform = `translate(${x}px, ${y}px) scale(${scale})`

        $el.addEventListener('click', () => {
            $el.classList.toggle('active')
        })


        return $el;
    }



    // ----------------------
    // Item
    // ----------------------

    class Item {

        constructor (options, parent) {

            this.image = options.image;
            this.radius = options.radius || 0;
            this.angle = options.angle || 0;
            this.scale = options.scale || 0;



            this.$el = createElement(this);

            const $line = document.createElement('div');
            $line.className = 'mm-line';
            $line.style.transform = `rotate(${180 + this.angle}deg) scaleX(${this.radius / this.scale / 40})`
            this.$el.appendChild($line)


            this.children = options.children || [];
            this.children = this.children.map(options => new Item(options, this))
            parent.$el.appendChild(this.$el);


        }

    }



    // ----------------------
    // MindMap
    // ----------------------

    class MindMap {

        constructor (selector, options) {
            this.$el = document.querySelector(selector);
            this.$el.classList.add('mm');
            this.$el.style.setProperty('--size', options.size + 'px');
            this.$el.style.setProperty('--line', options.line + 'px');

            this.size = options.size;
            this.children = options.children.map(options => new Item(options, this))
        }

    }



    // ----------------------
    // Exports
    // ----------------------

    return MindMap;



})();


