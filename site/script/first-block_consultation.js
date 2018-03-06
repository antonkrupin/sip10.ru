$(document).ready(() => {
    $('#form1').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form1.name.value == '' || document.form1.phone.value == '' ) {
        valid = false;
        return valid;
    }
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
    }).done(function() {
        $('.js-overlay-thank-you').fadeIn();
        $(this).find('input').val('');
        $('#form1').trigger('reset');
    });
    return false;
});
});
