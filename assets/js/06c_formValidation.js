// HOMEWORK 12/11/15
// form submission w/ jquery
	// work on inline error messages
	// removing row like we just did
// specifically adding and removing elements
// and adding and removing the error messages

/* use variable 'jQuery' instead of '$' because it can be used by other stuff
'ready' is jquery shorthand event */
jQuery(document).ready(function($) {

	var $btnsToHide = $('.confirm-delete-button, .cancel-delete-button');
	$btnsToHide.hide();
	/* NOTES: https://learn.jquery.com/events/event-delegation/ */


	// -----------------------------------------------------------------
	// DELETE BUTTON
	// -----------------------------------------------------------------
	var $dltBtn = $('.delete-button');
	$dltBtn.on('click', handleDeleteClick);
	// NOTES: can take optional second argument is more flexible
	// on is the preferred syntax for creating event listeners in jQuery

	function handleDeleteClick(dltBtnEvent) {
		var $this = $(this);
		$this.hide();

		$.each($('.confirm-delete-button, .cancel-delete-button'), function() { 
			$(this).show();
		});
	}


	// -----------------------------------------------------------------
	// CANCEL BUTTON
	// -----------------------------------------------------------------
	var $cnclBtn = $('.cancel-delete-button');
	$cnclBtn.on('click', handleCancelClick);

	function handleCancelClick(cnlBtnEvent) {
		var $this = $(this);
		$this.hide();

		$.each($('.confirm-delete-button'), function() {
			$(this).hide();
		});

		$.each($('.delete-button'), function() {
			$(this).show();
		});

		cnlBtnEvent.preventDefault();
	}


	// -----------------------------------------------------------------
	// CONFIRM BUTTON
	// -----------------------------------------------------------------
	var $cnfmBtn = $(".confirm-delete-button");
	$cnfmBtn.on('click', handleConfirmClick);

	function handleConfirmClick(cnfmBtnEvent) {
		var $this = $(this);
		$this.hide();

		var $btnRow = $(this).parent();
		var $btnRowParent = $btnRow.parent().hide();

		cnfmBtnEvent.preventDefault();
	}


	// -----------------------------------------------------------------
	// VALIDATE TEXT INPUTS ON BLUR
	// -----------------------------------------------------------------
	var allTextInputs = document.querySelectorAll(".text-input");

	for (var i = 0; i < allTextInputs.length; i++) {
		allTextInputs[i].addEventListener("blur", valTextInputs);
		allTextInputs[i].addEventListener("focus", valRemoveInv);
	}

	function valTextInputs(validEvt) {
		if (validEvt.target.value === "") {
			validEvt.target.classList.add("required");
		}

		if (validEvt.target.value === "") {
			var inputParent = validEvt.target.parentNode;
			var inputChildren = inputParent.children;
			var inputErr = document.createElement('p');
			inputErr.classList.add('input-field-error-msg');
			inputErr.innerHTML = 'This is a required field.';
			inputParent.appendChild(inputErr);
		}
	}

	function valRemoveInv(validEvt) {
		validEvt.target.classList.remove("required");
		validEvt.target.classList.remove('input-field-valid');

		var remInputErrPar = validEvt.target.parentNode;
		var remInputErr = remInputErrPar.querySelector('.input-field-error-msg');

		if (remInputErr !== null) {
			remInputErr.classList.remove('input-field-valid-msg');
			remInputErrPar.removeChild(remInputErr);
		}
	}

	// -----------------------------------------------------------------
	// SUBMIT FORM
	// -----------------------------------------------------------------
	var submitEvt = document.getElementById("checklist");
	submitEvt.addEventListener("submit", handleSubmitClick); 

	function handleSubmitClick(validEvt) {
		var inputValid = true;
		var formObj = document.getElementById('checklist');
		var remErr = formObj.querySelector('.error-message');

		if (remErr !== null) {
			formObj.removeChild(remErr);
		}

		for (var i = 0; i < allTextInputs.length; i++) {
			if (allTextInputs[i].value === "") {
				allTextInputs[i].classList.add("required");
				inputValid = false;
			} else {
				allTextInputs[i].classList.remove("required");
			}
		}

		if (!inputValid) {

			validEvt.preventDefault();			

			var errorMsg = document.createElement('div');
			errorMsg.classList.add('error-message');
			
			formObj.appendChild(errorMsg);
		}
	}

});
