window.loginWithToken = function(token) {
  if (/jail/i.test(window.location)) {
    return;
  }
  $.ajax({
    method: 'POST',
    url: '/user/loginWithToken',
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify({ token: token }),
    success: function(res) {
      if (/success/i.test(res)) {
        window.location.reload();
      }
    },
    error: function() {
      window.localStorage.removeItem('ottToken');
    }
  });
}

window.saveTenKeyData = function(results) {
  $.ajax({
    method: 'POST',
    url: '/api/saveTenKeyData',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(results)
  });
}

window.saveTypingTestData = function(results) {
  $.ajax({
    method: 'POST',
    url: '/api/saveTypingTestData',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(results)
  });
}

$(function() {
  var path = window.location.href;
  if ($('#publishButton')) {
    if (/\/\/test\./.test(path)) {
      $('#publishButton').show().on('click', function() { window.location = '/admin/publishSite' });
    }
  }
});