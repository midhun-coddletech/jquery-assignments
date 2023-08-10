$(document).ready(function() {
    setInterval(changeImage, 3000);
    let imageCounter = 1;
    $('input[name="slider-button"]').on('click', function() {
        let imageNumber = $('input[name="slider-button"]:checked').val();
        $('#slider-image').attr( "src", `img/${imageNumber}.jpg` );
    });
    function changeImage() {
        if (imageCounter < 5) {
            imageCounter += 1;
        } else {
            imageCounter = 1;
        }
        $('#slider-image').attr( "src", `img/${imageCounter}.jpg` );
        $(`#button${imageCounter}`).prop('checked', true);
    }
});
