$(window).scroll(function(){
    $("#logo").css("opacity", 1 - $(window).scrollTop() / 250);
  });

$(document).on('click', 'a', function(event){
    event.preventDefault();
    if('a'.length){
        $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);   
    }
});

function isScrolledIntoView(obj)
{
    var windowTop = $(window).scrollTop();
    var windowBottom = windowTop + $(window).height();

    var objTop = $(obj).offset().top;
    var objBottom = objTop + $(obj).height();

    return ((objBottom <= windowBottom) && (objTop >= windowTop));
}


// Check if it's time to start the animation.
function startAnimation() {
    var $obj = $('.animate');

    // If the animation has already been started
    if ($obj.hasClass('fade-in')) return;

    if (isElementInViewport($obj)) {
        // Start the animation
        $obj.addClass('fade-in');
    }
}
