$(document).ready(function () {
    const images = [
        "url('./assets/img/newAssets/PROJECTS/VILE PARLE/1 (2).png')",
        "url('./assets/img/newAssets/PROJECTS/VILE PARLE/2 (2).png')",
        "url('./assets/img/newAssets/PROJECTS/VILE PARLE/3 (2).png')"
    ];

    let index = 0;

    const $slide = $('#hero_slide');

    // Set initial background image
    $slide.css('background-image', images[index]);

    setInterval(() => {
        index = (index + 1) % images.length;

        $slide.fadeOut(500, function () {
            $slide.css('background-image', images[index]);
            $slide.fadeIn(500);
        });

    }, 5000);
});
