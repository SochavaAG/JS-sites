$(function () {
  $.validator.methods.email = function (value, element) {
    return (
      this.optional(element) ||
      /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(value)
    )
  }
  $('.contacts-page__form').validate({
    ignore: ':hidden:not(select)',
    rules: { fio: { required: true }, mail: { required: true, email: true } },
    highlight: function (element, errorClass) {
      switch ($(element)[0].name) {
        case 'fio':
          $('.name-validation').css('display', 'block')
          $('.name-validation')
            .children('.main-validation__text')
            .html('Enter your name')
          $('.main-input__name-label').addClass('main-input__text-label--error')
          break
        case 'mail':
          $('.email-validation').css('display', 'block')
          if (
            $('.main-input__email-label')
              .find('input[type="email"]')
              .val() === ''
          ) {
            $('.email-validation')
              .children('.main-validation__text')
              .html('Enter your email')
          } else {
            $('.email-validation')
              .children('.main-validation__text')
              .html('Please enter a valid email address')
          }
          $('.main-input__email-label').addClass(
            'main-input__text-label--error'
          )
          break
      }
    },
    unhighlight: function (element, errorClass) {
      switch ($(element)[0].name) {
        case 'fio':
          $('.name-validation').css('display', 'none')
          $('.main-input__name-label').removeClass(
            'main-input__text-label--error'
          )
          break
        case 'mail':
          $('.email-validation').css('display', 'none')
          $('.main-input__email-label').removeClass(
            'main-input__text-label--error'
          )
          break
      }
    },
    errorPlacement: function (error, element) {
      return true
    },
    submitHandler: function (form) {
      form = $('.contacts-page__form')
      event.preventDefault()
      data = form.serializeArray()
      clientTime = new Date()
      clientTimeZone =
        clientTime + ' UTC +' + -clientTime.getTimezoneOffset() / 60
      budgetValue = $('.main-dropdown-budget').attr('data-value')
      industryValue = $('.main-dropdown-industry').attr('data-value')
      formData = new FormData()
      $.each($("input[type='file']").prop('files'), function (i, file) {
        formData.append('file[]', file)
      })
      if (
        $('.main-dropdown-project__value-text').html() === 'Choose One' ||
        $('.main-dropdown-budget__value-text').html() === 'Choose One' ||
        $('.main-dropdown-industry__value-text').html() === 'Choose One'
      ) {
        return false
      }
      var fileCount = $('input[type="file"]').get(0).files.length

      var file = $('input[type="file"]').get(0).files[0]
      if (fileCount > 3) {
        return false
      }
      if ($('input[type="file"]').get(0) && fileCount) {
        if (
          file.size > 10000000 ||
          file.type === 'application/octet-stream' ||
          file.type === 'application/x-compressed' ||
          file.type === 'application/x-gzip' ||
          file.type === 'application/x-gzip' ||
          file.type === 'multipart/x-gzip' ||
          file.type === 'text/plain' ||
          file.type === 'application/x-javascript' ||
          file.type === 'application/javascript' ||
          file.type === 'application/ecmascript' ||
          file.type === 'text/javascript' ||
          file.type === 'text/ecmascript' ||
          file.type === 'application/x-compressed' ||
          file.type === 'application/x-zip-compressed' ||
          file.type === 'application/zip' ||
          file.type === 'multipart/x-zip' ||
          file.type === 'application/x-rar-compressed'
        ) {
          return false
        }
      }
      $.each(data, function (key, value) {
        formData.append(value.name, value.value)
      })
      formData.append('time_client', clientTimeZone)
      formData.append('budjet', budgetValue)
      formData.append('industry', industryValue)
      url = form.attr('action')
      $.ajax({
        type: 'POST',
        url: '/api/v1/mail',
        processData: false,
        contentType: false,
        data: formData,
        success: function () {
          dataLayer.push({ event: 'RequestSent' })
          // ADD SUCCES EVENT HERE!
        }
      })
      $('.contacts-page__form').css('display', 'none')
      $('.contacts-page__thanks').css('display', 'block')
    }
  })
  var dropdownValidation = function () {
    if ($('input[name="fio"]').val() === '') {
      $('.name-validation').css('display', 'block')
      $('.name-validation')
        .children('.main-validation__text')
        .html('Enter your name')
      $('.main-input__name-label').addClass('main-input__text-label--error')
    }
    if ($('input[name="mail"]').val() === '') {
      $('.email-validation').css('display', 'block')
      $('.email-validation')
        .children('.main-validation__text')
        .html('Enter your email')
    }
    if ($('.main-dropdown-project__value-text').html() === 'Choose One') {
      $('.project-validation').css('display', 'block')
      $('.project-validation')
        .children('.main-validation__text')
        .html('Select type of project')
      $('.main-dropdown-project').addClass('main-input__text-label--error')
    } else {
      $('.project-validation').css('display', 'none')
      $('.main-dropdown-project').removeClass('main-input__text-label--error')
    }
    if ($('.main-dropdown-budget__value-text').html() === 'Choose One') {
      $('.budget-validation').css('display', 'block')
      $('.budget-validation')
        .children('.main-validation__text')
        .html('Select your budget')
      $('.main-dropdown-budget').addClass('main-input__text-label--error')
    } else {
      $('.budget-validation').css('display', 'none')
      $('.main-dropdown-budget').removeClass('main-input__text-label--error')
    }
    if ($('.main-dropdown-industry__value-text').html() === 'Choose One') {
      $('.industry-validation').css('display', 'block')
      $('.industry-validation')
        .children('.main-validation__text')
        .html('Select your industry')
      $('.main-dropdown-industry').addClass('main-input__text-label--error')
    } else {
      $('.industry-validation').css('display', 'none')
      $('.main-dropdown-industry').removeClass('main-input__text-label--error')
    }
  }
  $('input[type="file"]').change(function () {
    var fileCount = $(this).get(0).files.length

    var file = $('input[type="file"]').get(0).files[0]
    if ($(this).get(0) && fileCount) {
      if (file.size > 10000000) {
        $('.main-input__file').addClass('main-input__file--error')
        $('.main-input__file-text').append(
          '<span class="main-input__file-text-item">Max file size 10MB</span>'
        )
        $('.main-input__file-text-item:first-of-type').remove()
      }
      if (
        file.type === 'application/octet-stream' ||
        file.type === 'application/x-compressed' ||
        file.type === 'application/x-gzip' ||
        file.type === 'application/x-gzip' ||
        file.type === 'multipart/x-gzip' ||
        file.type === 'text/plain' ||
        file.type === 'application/x-javascript' ||
        file.type === 'application/javascript' ||
        file.type === 'application/ecmascript' ||
        file.type === 'text/javascript' ||
        file.type === 'text/ecmascript' ||
        file.type === 'application/x-compressed' ||
        file.type === 'application/x-zip-compressed' ||
        file.type === 'application/zip' ||
        file.type === 'multipart/x-zip' ||
        file.type === 'application/x-rar-compressed'
      ) {
        $('.main-input__file').addClass('main-input__file--error')
        $('.main-input__file-text').append(
          '<span class="main-input__file-text-item">Incorrect file type</span>'
        )
        $('.main-input__file-text-item:first-of-type').remove()
      }
    }
  })
  $('button[type="submit"]').click(dropdownValidation)
  $('.main-dropdown').click(dropdownValidation)
  $('.contacts-page__form').change(dropdownValidation)
  var dropdown = $('.main-dropdown')

  var dropdownSelect = $('.main-dropdown__select')
  $(document).mouseup(function (e) {
    if (
      !$(dropdownSelect).is(e.target) &&
      $(dropdownSelect).has(e.target).length === 0
    ) {
      $(dropdown).removeClass('main-dropdown--active')
    }
  })
})
