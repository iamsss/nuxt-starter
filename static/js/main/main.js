/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

function runAlert(message, isSuccess) {
  if (isSuccess) {
    $('#alert-modal-icon').hide()
    $('#success-modal-icon').show()
  } else {
    $('#success-modal-icon').hide()
    $('#alert-modal-icon').show()
  }
  $('#alert-modal').modal('show')
  $('#alert-message').text(message)
}

// eslint-disable-next-line no-unused-vars
function closeAlertModal() {
  $('#alert-modal').modal('hide')
}

function runConfirm(message) {
  $('#confirmModal').modal('show');
  $('#confirmMessage').text(message)
  return new Promise((resolve, reject) => {
    // (A)
    $('#confirmModalCancel').click(function () {
      $('#confirmModal').modal('hide')
      resolve(false)
    })
    $('#confirmModalOk').click(function () {
      $('#confirmModal').modal('hide')
      resolve(true)
    })
  })
}

(function (proxied) {
  window.alert = function () {
    // do something here
    return proxied.apply(this, arguments)
  }
})(runAlert)

