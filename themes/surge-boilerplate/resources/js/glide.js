import Glide from '@glidejs/glide';

const glide = (carousel) => {
    return new Glide(carousel, {
        type: carousel.getAttribute('glide-type') || 'carousel',
        startAt: carousel.getAttribute('glide-start-at') || 0,
        gap: carousel.getAttribute('glide-gap') || 0,
        focusAt: carousel.getAttribute('glide-focus') || 0,
        autoplay: carousel.getAttribute('glide-autoplay') || false,
        breakpoints: {
            500: {
                perView: carousel.getAttribute('glide-slides-mobile') || 1
            },
            875: {
                perView: carousel.getAttribute('glide-slides-portrait-tablet') || 1
            },
            1024: {
                perView: carousel.getAttribute('glide-slides-landscape-tablet') || 1,
                touchAngle: carousel.getAttribute('glide-touch-angle-desktop') || 50
            },
            3200: {
                perView: carousel.getAttribute('glide-slides-desktop') || 1,
                touchAngle: carousel.getAttribute('glide-touch-angle-desktop') || 50,
                gap: carousel.getAttribute('glide-gap-desktop') || carousel.getAttribute('glide-gap') || 0
            }
        },
        arrows: {
            prev: '.glide__arrow--left',
            next: '.glide__arrow--right'
        }
    }).mount();
};

const carousels = document.body.querySelectorAll('.glide');

for (let i = 0; i < carousels.length; i++) {
    glide(carousels[i]);
}

if (typeof jQuery !== 'undefined') {
    jQuery.fn.delayChange = function(nDelay) {
        let timeout = 0;

        function shouldIgnore(event) {
            var mapIgnoredKeys = {
                9: true, // Tab
                16: true,
                17: true,
                18: true, // Shift, Alt, Ctrl
                37: true,
                38: true,
                39: true,
                40: true, // Arrows
                91: true,
                92: true,
                93: true, // Windows keys
            };
            return mapIgnoredKeys[event.which];
        }

        function fireChange($element) {
            if ($element.val() !== jQuery.data($element[0], 'value-last')) {
                jQuery.data($element[0], 'value-last', $element.val());
                $element.trigger('change');
            }
        }

        function clearPreviousTimeout() {
            timeout && clearTimeout(timeout);
        }

        return this.keydown(function(event) {
            !shouldIgnore(event) && clearPreviousTimeout();
        }).keyup(function(event) {
            if (shouldIgnore(event)) return;
            clearPreviousTimeout();
            let $e = $(this);
            timeout = setTimeout(() => fireChange($e), nDelay);
        });
    };
}