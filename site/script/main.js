// Отправка заявки 
$(document).ready(() => {
	$('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
		if (document.form.name.value == '' || document.form.phone.value == '' ) {
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
			$('#form').trigger('reset');
		});
		return false;
	});

	$(".first-block__consultation-show").click(function(){
		$(".first-block__consultation").show(800);
	});
	$("#close").click(function(){
		$(".schedule_1").hide(800);
	});
	$(".third-block__consultation-show").click(function(){
		$(".third-block__consultation").show(800);
	});
	$("#close_free_train_form").click(function(){
		$(".free_train_form").hide(800);
	});
});


