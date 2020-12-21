$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
  
    $('.image2').css({
      opacity: function() {
        var elementHeight = $(this).height();
        return 1 - (elementHeight - scrollTop) / elementHeight;
      }
    });
  });

function refreshTop() {
    $(document).ready(function(){
        $(this).scrollTop(0);
        });
}