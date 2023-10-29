import Frag from './js-frag.js';

const frag = new Frag({
    canvas: document.querySelector('canvas'),
    fragColor: (x, y) => {
        const dx = x - 0.5;
        const dy = y - 0.5;
        const dist = Math.sqrt(dx**2 + dy**2);
        if (dist > 0.5) {
            return '#111';
        }
        return `rgb(${x*255|0}, ${y*255|0}, 255)`;
    },
    bounds: {
        top: 1,
        bottom: 0,
        left: -0.5,
        right: 1.5,
    },
});

frag.bindMove();
frag.bindZoom();
