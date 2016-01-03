/* use variable 'jQuery' instead of '$' because it can be used by other stuff
'ready' is jquery shorthand event */
jQuery(document).ready(function($) {

	var cnfmCnclDltBtns = '.confirm-delete-button, .cancel-delete-button';
	var $btnsToHide = $(cnfmCnclDltBtns);
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

		var $btnParent = $this.parent();
		var $btnChildren = $btnParent.find(cnfmCnclDltBtns);

		$btnChildren.show();
	}


	// -----------------------------------------------------------------
	// CANCEL BUTTON
	// -----------------------------------------------------------------
	var $cnclBtn = $('.cancel-delete-button');
	$cnclBtn.on('click', handleCancelClick);

	function handleCancelClick(cnlBtnEvent) {
		// this is set to the event object's target <var $this = >
		// jquery version of object <$(this);>
		var $this = $(this);
		$this.hide();

		var $btnParent = $this.parent();
		var $btnChildren = $btnParent.find(cnfmCnclDltBtns);
		$btnChildren.hide();

		var $btnChildDlt = $btnParent.find('.delete-button');
		$btnChildDlt.show();

		cnlBtnEvent.preventDefault();
	}


	// -----------------------------------------------------------------
	// CONFIRM BUTTON
	// -----------------------------------------------------------------
	var $cnfmBtn = $('.confirm-delete-button');
	$cnfmBtn.on('click', handleConfirmClick);

	function handleConfirmClick(cnfmBtnEvent) {
		var $this = $(this);
		$this.hide();

		var $btnRow = $this.parent();
		var $btnRowParent = $btnRow.parent().hide();

		cnfmBtnEvent.preventDefault();
	}


	// -----------------------------------------------------------------
	// VALIDATE TEXT INPUTS ON BLUR
	// -----------------------------------------------------------------
	var $txtInputs = $('.text-input');

	$txtInputs.on('blur', valTextInputs);
	$txtInputs.on('focus', valRemoveInv);

	function valTextInputs(validEvt) {
		var $this = $(this);

		if ($this.val() === '') {
			$this.addClass('required');

			var $btnRow = $this.parent();
			var $inputErr = $('<p class="input-field-error-msg">This is a required field.</p>');
			$btnRow.append($inputErr);
		}
	}

	function valRemoveInv(validEvt) {
		var $this = $(this);
		$this.removeClass('required');

		var $btnRow = $this.parent();
		$btnRow.find('.input-field-error-msg').remove();
	}


	// -----------------------------------------------------------------
	// SUBMIT FORM
	// -----------------------------------------------------------------
	var $submitEvt = $('#checklist');
	$submitEvt.on('submit', handleSubmitClick);

	function handleSubmitClick(validEvt) {
		var inputValid = true;
		var $this = $(this);
		var $formObj = $('#checklist');
		var $remErr = $formObj.find('.error-message').remove();
		var $textInputs = $this.find('.text-input');

		$textInputs.each(function(){
			var $this = $(this);
	
			if ($this.val() === '') {
				$txtInputs.addClass('required');
				inputValid = false;
			} else {
				$txtInputs.removeClass('required');
			}
		});

		if (!inputValid) {
			var $errorMsg = $('<p class="required">Please fix the errors in the highlighted fields.</p>');
			$submitEvt.append($errorMsg)

			validEvt.preventDefault();
		}
	}
});
