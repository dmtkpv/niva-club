import $ from './utils'

export default {

    item ({ size }) {
        const s = size + 'px', m = size / -2 + 'px';
        return $.node(`<div class="mm-item" style="width: ${s}; height: ${s}; margin: ${m} 0 0 ${m}" />`);
    },

    line ({ radius, stroke }) {
        const w = radius + 'px', h =  stroke + 'px';
        const m = stroke / -2 + 'px', o = stroke / 2 + 'px';
        return $.node(`<div class="mm-line" style="width: ${w}; height: ${h}; margin: ${m} 0 0 ${m}; transform-origin: ${o} ${o}" />`);
    },

    link ({ link, classname, content }) {
        return $.node(`<a ${link ? `href="${link}"` : ''} class="mm-link ${classname}">${content}</a>`);
    },

    loader () {
        return $.node(`
            <svg class="mm-loader">
                <circle r="50%" cx="50%" cy="50%"/>
            </svg>
        `);
    }
}