function preload(arrayOfImages) {
    $(arrayOfImages).each(function () {
        $('<img/>')[0].src = this;
        // Alternatively you could use:
        // (new Image()).src = this;
    });
}

// Usage:

preload([
    'css/img/brick.JPG',
    'css/img/brick2.JPG',
    'css/img/brick3.JPG',
    'css/img/hero-alt.JPG',
    'css/img/hero-alt2.JPG',
    'css/img/hero-alt3.JPG',
    'css/img/hero-alt4.JPG',
    'css/img/park-bw.JPG',
    'css/img/park-kiss.JPG',
    'css/img/park-pray.JPG',
    'css/img/park-rose.JPG',
    'css/img/park-rose2.JPG',
    'css/img/park.JPG',
    'css/img/park3.JPG',
    'css/img/park4.JPG',
    'css/img/park7.JPG',
    'css/img/peek-a-boo.JPG',
    'css/img/peek-a-boo2.JPG',
    'css/img/pond-back.JPG',
    'css/img/skyline-brent.JPG',
    'css/img/skyline-bw.JPG',
    'css/img/skyline-tierra.JPG',
    'css/img/skyline-tierra02.JPG',
    'css/img/skyline.JPG',
    'css/img/skyline2.JPG',
    'css/img/skyline3.JPG',
    'css/img/skyline4.JPG'
]);

