$(function() {

  $('#openFeedbackButton').on('click', function() {
    $('#feedbackModal').css('display', 'block')
    setTimeout(function() {
      $('#feedbackModal').css('opacity', '1');
    });
  });

  $('#closeFeedbackButton').on('click', function() {
    $('#feedbackModal').css('opacity', '0');
    setTimeout(function() {
      $('#feedbackModal').css('display', 'none');
    }, 500);
  });

  $('#submitFeedbackButton').on('click', function(e) {
    e.preventDefault();
    var name = $('#feedbackName').val();
    var email = $('#feedbackEmail').val();
    var comment = $('#feedbackComment').val();
    if (!comment) { return };
    var data = {
      name: name,
      email: email,
      comment: comment
    };

    $.ajax({
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      url: '/api/submitFeedback',
      data: JSON.stringify(data),
      success: function() {
        $('#feedbackSuccessBox').show().text("Thank You For Your Feedback");
        $('#feedbackName').val('');
        $('#feedbackEmail').val('');
        $('#feedbackComment').val('');
        setTimeout(function() {
          $('#feedbackSuccessBox').text('').hide();
          $('#closeFeedbackButton').click();
        }, 3000);
      },
      error: function() {
        $('#feedbackSuccessBox').show().text("Thank You For Your Feedback");
        $('#feedbackName').val('');
        $('#feedbackEmail').val('');
        $('#feedbackComment').val('');
        setTimeout(function() {
          $('#feedbackSuccessBox').text('').hide();
          $('#closeFeedbackButton').click();
        }, 3000);
      }
    });

    window.localStorage.setItem('ottFeedback', true);
  });
});