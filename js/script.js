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

    $('#feedbackForm').on('submit', function(e) {
        e.preventDefault();

        const submitBtn = $(this).find('button[type="submit"]');
        submitBtn.prop('disabled', true).text('В процессе');
      
        setTimeout(() => {
            alert('Отправлено');
            $(this)[0].reset();
            $('.modal').fadeOut();
            submitBtn.prop('disabled', false).text('Отправить');
        }, 800);
    });

    $.getJSON('data/portfolio.json', function (data) {
        const container = $('#portfolioContainer');
      
        $.each(data, function (_, item) {
          container.append(`
            <div class="portfolio-card">
                <img src="${item.image}">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
            `);
        });
    });      
});