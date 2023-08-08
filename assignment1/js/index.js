$(document).ready(function() {
    let $firstButton = $('<button>Show title</button>');
    $('body').append($firstButton);
    let buttonState = 'title';
    $firstButton.on('click', function(){
      if(buttonState === 'title') {
        let $titleText = $('<h1>Welcome to Image slider page</h1>');
        $('body').append($titleText);
        $firstButton.html('Show Image');
        buttonState = 'image';
      }
      else if(buttonState === 'image') {
        let $imageTag = $('<img alt="Image">');
        $imageTag.attr( "src", `img/1.jpg` );
        let currentImage = 1;
        $('body').append($imageTag);
        buttonState = 'end';
        let $sliderButton = $('<button>Next Image</button>');
        $('body').append($sliderButton);
        $sliderButton.on('click', function(){
          if(currentImage < 3) {
            currentImage += 1;
          }
          else {
            currentImage = 1;
          }
          $imageTag.attr( "src", `img/${currentImage}.jpg` );
        })
      }
      })
  });