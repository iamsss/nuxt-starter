/* eslint-disable no-undef */

$(document).ready(function () {
  $('.modal').modal({
    dismissible: false
  })
})

function runAlert(message, isSuccess) {
  if (isSuccess) {
    $('#alertModalIcon').hide()
    $('#successModalIcon').show()
  } else {
    $('#successModalIcon').hide()
    $('#alertModalIcon').show()
  }
  $('#alertModal').modal('open')
  $('#alertMessage').text(message)
  // var a = await myFirstPromise();
  // console.log(a);
}

function closeAlertModal() {
  $('#alertModal').modal('close')
}

function runConfirm(message) {
  $('#confirmModal').modal('open')
  $('#confirmMessage').text(message)
  return new Promise((resolve, reject) => {
    // (A)
    $('#confirmModalCancel').click(function () {
      $('#confirmModal').modal('close')
      resolve(false)
    })
    $('#confirmModalOk').click(function () {
      $('#confirmModal').modal('close')
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

alert("i working");