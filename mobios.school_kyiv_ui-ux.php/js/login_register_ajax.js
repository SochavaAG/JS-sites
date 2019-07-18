


var loginForm = $("#loginForm");
loginForm.submit(function(e){
    e.preventDefault();
    var formData = loginForm.serialize();

    $.ajax({
        url:'/auth/login',
        type:'POST',
        data:formData,
        success:function(data){
            if(data.redirect !==undefined){
                window.location  = data.redirect;
            }
        },
        error: function (data) {
            if(data.responseJSON !== undefined)
            {
                $('#login-error').html(data.responseJSON.error);
            }
        }
    });
});


var registerForm = $("#registerForm");
registerForm.submit(function(e){
    e.preventDefault();
    var formData = registerForm.serialize();

    $.ajax({
        url:'/auth/register',
        type:'POST',
        data:formData,
        success : function(){
            window.location = '/';
            swal('Поздравляем', 'Вы успешно зарегистрировались','success');

            }
        ,
        error: function (data) {
            if(data.responseJSON !== undefined)
            {
               $.each(data.responseJSON, function (message, el){
                   $('#register-error').html(el);
               });

            }
        }
    });
});
