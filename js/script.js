$(function () {
    $('.burger').on('click', function () {
      $('.nav').slideToggle();
    });
  
    $('#openModal').on('click', function () {
      $('.modal').fadeIn();
    });
  
    $('.close, .modal').on('click', function (e) {
      if (e.target === e.currentTarget) {
        $('.modal').fadeOut();
      }
    });
  });