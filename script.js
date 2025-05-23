window.onload = function() {
    let index = 0;
    const images = document.querySelectorAll('.carrosselConteudo img');
    const totalImages = images.length;

    function showNextImage() {
        images.forEach((img, i) => {
            img.style.opacity = (i === index) ? '1' : '0';
        });
        index = (index + 1) % totalImages;
    }

    showNextImage();
    setInterval(showNextImage, 6000);
};


window.onload = function() {
    let index = 0;
    const images = document.querySelectorAll('.publicidade img');
    const totalImages = images.length;

    function showNextImage() {
        images.forEach((img, i) => {
            img.style.opacity = (i === index) ? '1' : '0';
        });
        index = (index + 1) % totalImages;
    }

    showNextImage();

    setInterval(showNextImage, 6000);
};
