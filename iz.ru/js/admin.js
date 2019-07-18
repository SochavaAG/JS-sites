(function ($, Drupal, setting) {
    'use strict';

    // Блокирует кнопку статуса в форме редактирования ноды
    $('select#edit-field-status').prop('disabled', true );
    $('label[for="edit-field-status"]').hide();
    // Меняет цвет кнопки редактирования ноды
    let status = $('select#edit-field-status').val();
    if (status == 'published') {
        $('select#edit-field-status').addClass('fix-bg-green')
    } else if (status == 'writing') {
        $('select#edit-field-status').addClass('fix-bg-yellow')
    } else if (status == 'editing') {
        $('select#edit-field-status').addClass('fix-bg-orange')
    } else if (status == 'deleted') {
        $('select#edit-field-status').addClass('fix-bg-red')
    } else if (status == 'scheduled') {
        $('select#edit-field-status').addClass('fix-bg-blue')
    } else if (status == 'releasing') {
        $('select#edit-field-status').addClass('fix-bg-purple')
    }

    // В визредакторе для модуля "linkit" проверка на "не верный адрес URL"
    $(window)
        .on('dialog:aftercreate', function() {
            var $btn = jQuery('.editor-linkit-dialog button.js-form-submit:eq(0),.editor-link-dialog button.js-form-submit:eq(0)'),
                    $input = jQuery('.editor-linkit-dialog input[class*="form-linkit"][type="text"],.editor-link-dialog input[id^="edit-attributes-href"]'),
                    $label = $input.prev('label'),
                    $error = $('<span/>'),
                    value = '',
                    spaceLen = 0;
            $error
                .css({
                    'font-style': 'italic',
                    'font-size': '0.9em',
                    'line-height': '1.1',
                    'font-weight': 'normal',
                    'color': 'red',
                    'padding': '0px 5px'
                })
                .addClass('error')
                .text('не верный формат ссылки');
            var disabledBtnFunc = function(bool, btn) {
                if (bool) {
                    btn.attr('disabled', 'disabled');
                } else {
                    btn.removeAttr('disabled');
                }
            }
            var highlightInputFunc = function(bool, input) {
                var label = input.prev('label');                
                if (bool) {
                    input.css({
                        'background-color': 'rgba(255,0,0,0.2)'
                    });
                    if(label.find('.error').length === 0) {
                        label.append($error);
                    }
                } else {
                    input.css({
                        'background-color': 'rgba(255,255,255,1.0)'
                    });
                    if(label.find('.error').length > 0) {
                        label.find('.error').remove();
                    }
                }
            }
            if ($btn && $btn.length) {
                $btn.trigger('mouseenter');
                $btn.on('mouseenter', function(e) {
                    var $this = $(this);
                    value = $input.val();
                    spaceLen = value.trim().replace(/\S+/g, '').length;
                    if(spaceLen > 0) {
                        $input.css({
                            'background-color': 'rgba(255,0,0,0.2)'
                        });
                        return false;
                    }
                    disabledBtnFunc(spaceLen > 0, $this);
                    return true;
                });
            }
            if ($input && $input.length) {
                if ($btn && $btn.length) {
                    spaceLen = $input.val().trim().replace(/\S+/g, '').length;
                    highlightInputFunc(spaceLen > 0, $input);
                    disabledBtnFunc(spaceLen > 0, $btn);
                }
                $input
                    .on('input propertychange', function() {
                        var $this = $(this);
                        value = $this.val();
                        spaceLen = value.trim().replace(/\S+/g, '').length;
                        highlightInputFunc(spaceLen > 0, $this);
                        disabledBtnFunc(spaceLen > 0, $btn);
                    });
            }
        });

})(jQuery, Drupal, drupalSettings);
