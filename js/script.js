window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__nav'),
          openBtn = document.querySelector('.header__menu .open'),
          closeBtn = document.querySelector('.header__nav .close');

    openBtn.addEventListener('click', () => {
        menu.classList.add('nav_active');
    });

    closeBtn.addEventListener('click', () => {
        menu.classList.remove('nav_active');
    });

    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.3;
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,

                start = null;
            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));

                    document.documentElement.scrollTo(0, r);

                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });
});