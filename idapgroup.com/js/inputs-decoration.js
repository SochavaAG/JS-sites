$(function () {
  var mainInput = $('.main-input__text-input')
  var mainTextarea = $('.main-textarea')
  mainInput.focusin(function () {
    $(this)
      .parents('.main-input__text-label')
      .addClass('main-input__text-label--active')
  })
  mainInput.focusout(function () {
    $(this)
      .parents('.main-input__text-label')
      .removeClass('main-input__text-label--active')
    if ($(this).val() !== '') {
      $(this)
        .parents('.main-input__text-label')
        .addClass('main-input__text-label--text')
    } else {
      $(this)
        .parents('.main-input__text-label')
        .removeClass('main-input__text-label--text')
    }
  })
  mainTextarea.focusin(function () {
    $(this)
      .parents('.main-textarea__label')
      .addClass('main-textarea__label--active')
  })
  mainTextarea.focusout(function () {
    $(this)
      .parents('.main-textarea__label')
      .removeClass('main-textarea__label--active')
    if ($(this).val() !== '') {
      $(this)
        .parents('.main-textarea__label')
        .addClass('main-textarea__label--text')
    } else {
      $(this)
        .parents('.main-textarea__label')
        .removeClass('main-textarea__label--text')
      $(this).height('auto')
    }
  })
  mainTextarea.on('change drop keydown cut paste', function () {
    $(this).height('auto')
    $(this).height($(this).prop('scrollHeight') - 10)
  })
  var dropdownTrigger = $('.main-dropdown__value')
  var dropdownItem = $('.main-dropdown__select-item')
  var dropdownItemCheckbox = $('.main-input__checkbox-input--dropdown')
  dropdownTrigger.on('click', function () {
    $(this)
      .parents('.main-dropdown')
      .toggleClass('main-dropdown--active')
    return false
  })
  dropdownItem.on('click', function () {
    var mainParent = $(this).parents('.main-dropdown')
    var selfValue = $(this)
      .find('.main-dropdown__select-item-text')
      .html()
    var selfBudgetValue = $(this)
      .find('.budget-value')
      .attr('data-budget')
    if (!$(this).hasClass('main-dropdown__select-item--checkbox')) {
      mainParent.removeClass('main-dropdown--active')
      mainParent.find('.main-dropdown__value-text').html(selfValue)
      if ($(this).hasClass('budget-option')) {
        mainParent
          .addClass('main-dropdown--selected')
          .attr('data-value', selfBudgetValue)
      } else {
        mainParent
          .addClass('main-dropdown--selected')
          .attr('data-value', selfValue)
      }
    }
  })
  dropdownItemCheckbox.on('change', function () {
    var mainParent = $(this).parents('.main-dropdown')
    var checkboxes = mainParent.find(
      '.main-input__checkbox-input--dropdown:checked'
    )
    var checkboxesVal = ''
    if (checkboxes.length !== 0) {
      checkboxes.each(function () {
        if (checkboxes.length > 1) {
          checkboxesVal += $(this).attr('data-name') + ', '
        } else {
          checkboxesVal += $(this).attr('data-name')
        }
      })
    }
    if (checkboxes.length > 1) {
      checkboxesVal = checkboxesVal.substring(0, checkboxesVal.length - 2)
    }
    if (checkboxes.length >= 1) {
      mainParent.find('.main-dropdown__value-text').html(checkboxesVal)
      mainParent
        .addClass('main-dropdown--selected')
        .attr('data-value', checkboxesVal)
    } else {
      mainParent.find('.main-dropdown__value-text').html('Choose One')
      mainParent.removeClass('main-dropdown--selected').attr('data-value', null)
    }
  })
  var $mainInputs = $('.main-input__file-input')
  $mainInputs.on('change', function () {
    var fileNameWrap = $(this)
      .parents('.main-input__file')
      .find('.main-input__file-text')
    var names = []
    $(this)
      .parents('.main-input__file')
      .removeClass('main-input__file--error')
    $('.main-input__file-text-item').remove()
    if ($(this).get(0).files.length > 3) {
      $(this)
        .parents('.main-input__file')
        .addClass('main-input__file--error')
      fileNameWrap.append(
        '<span class="main-input__file-text-item">Maximum of 3 files</span>'
      )
    } else {
      for (var i = 0; i < $(this).get(0).files.length; ++i) {
        names.push($(this).get(0).files[i].name)
      }
      for (i = 0; i < names.length; i++) {
        fileNameWrap.append(
          '<span class="main-input__file-text-item">' + names[i] + '</span>'
        )
      }
    }
  })
})
