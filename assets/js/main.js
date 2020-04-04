$(function() {
  function setCookie(name, value, minute) {
    var expires = "";
    if (minute) {
      var date = new Date();
      date.setTime(date.getTime() + (minute * 60 * 1000));
      expires = "; expires=" + date.toGMTString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  $(".notification .content button").click(function() {
    $(".notification").slideUp();
    $('html,body').animate({
      scrollTop: 0
    });
  });

  var formHeight = $('form').outerHeight();
  $(window).scroll(function(event) {
    var scroll = $(window).scrollTop();
    var height = $('html').height();
    if (height / 3 < scroll && !getCookie('closeForm')) {
      $('form').animate({
        top: $(window).height() - formHeight
      });
      $('form input').focus();
    }
  });

  $("#closeForm").click(function() {
    $("form")
      .stop(true, false).animate({
        top: $(window).height()
    });
    setCookie('closeForm', true, 10);
  });
});