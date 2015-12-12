// global function
function trackEvent(data) {
	console.log('tracked event:');
	console.log(data);
}

window.addEventListener("load", function() {

	// get all anchor tags
	var allLinks = document.querySelectorAll('a');

	// add eventListener to each nav item (to listen for handleNavClick function???)
	for (var i = 0; i < allLinks.length; i++) {
		allLinks[i].addEventListener('mouseover', handleNavHover);
		allLinks[i].addEventListener('click', handleNavClick);
	}

	// set up function to handle click event
	function handleNavHover(e) {
		var eventTarget = e.currentTarget;
		var eventLink = eventTarget.href;
		var eventParent = eventTarget.parentNode;
		var parentClass = eventParent.className;

		if (!parentClass) {
			parentClass = eventParent.parentNode.className; //parentClass is now grandParent's value

			if (!parentClass) {
				parentClass = eventParent.parentNode.parentNode.className;
			}
		}

		// while parentClass is empty and eventParent is not a body element
		// as long as these are true set the event parent variable to be its own parent

		trackEvent('link:hover: ' + 'parent class: ' + parentClass + '; ' + 'href: ' + eventLink + ';');
	}

	function handleNavClick (e) {
		var eventTarget = e.currentTarget;
		var eventLink = eventTarget.href;
		var eventParent = eventTarget.parentNode;
		var parentClass = eventParent.className;

		trackEvent('link:click: ' + 'parent class: ' + parentClass + '; ' + 'href: ' + eventLink + ';');
		e.preventDefault();

		// use javascript to reproduce native behavior
		// redirect window to value of eventTarget once data's been recorded
		setTimeout(function() {
			window.location = eventTarget.href;			
		}, 250);
	}
});
