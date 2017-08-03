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

$(function() {
    	$('.port-pic').on('click', function() {
			$('.enlargeImageModalSource').attr('src', $(this).attr('src'));
			$('#enlargeImageModal').modal('show');
		});
});