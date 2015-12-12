jQuery(document).ready(function() {

	var txtInput = $(".text-input");
	var dltBtn = $(".delete-button");
	var confDltBtn = $(".confirm-delete-button");
	var cancDltBtn = $(".cancel-delete-button");
	var successMsgDlt = $("span").text("This item has been deleted.");

	// hide confirm-delete and cancel-delete buttons on document ready
	$(document).ready(function() {
		$(confDltBtn).hide();
		$(cancDltBtn).hide();
		$("span").hide();
	});

	// show confirm-delete and cancel-delete buttons on delete-button click
	$(dltBtn).click(function() {
		$(this).parent().find(confDltBtn).show();
		$(this).parent().find(cancDltBtn).show();
	});

	// hide confirm-delete and cancel-delete on cancel-delete click
	$(cancDltBtn).click(function() {
		$(this).parent().find(confDltBtn).hide();
		$(this).parent().find(cancDltBtn).hide();
	});

	// hide all three buttons on confirm-delete click
	$(confDltBtn).click(function() {
		$(this).parent().find("a, input").hide();
		$(this).parent().find("span").show();
		successMsgDlt;
	});

	// grab the form element
	var myForm = $(".checklist");

	// grab the submit button element
	var sbmtBtn = $(".submit-button");

	$(sbmtBtn).click(function(valForm) {

		// use "each" to iterate through the array of text inputs defined above
		// use callback function — textInputEl — as argument
		// textInputEl is the "current" element in the collection
		$(myForm).find(txtInput).each(function(textInputEl) {

			// if value of .text-input is empty
			if (textInputEl.val() === "") {

				// add class "required"
				textInputEl.addClass("required");

				// prevent form from submitting
				valForm.preventDefault();
			}
		});
	});

});
