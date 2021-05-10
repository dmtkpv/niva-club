export default {

    node (html) {
        const $node = document.createElement('div');
        $node.innerHTML = html;
        return $node.firstElementChild;
    },

    flat (item, result = [], include = false) {
        include && result.push(item);
        item.children.forEach(item => this.flat(item, result, true));
        return result;
    },

    offset (items, origin) {

        let offset = {
            width: origin.size,
            height: origin.size
        };

        items.forEach(item => {
            const { top, bottom, left, right } = item.getRect();
            const width = Math.max(Math.abs(left - origin.x), Math.abs(right - origin.x)) * 2;
            const height = Math.max(Math.abs(top - origin.y), Math.abs(bottom - origin.y)) * 2;
            if (width > offset.width) offset.width = width;
            if (height > offset.height) offset.height = height;
        })

        return offset
    }

}