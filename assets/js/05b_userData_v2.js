function trackEvent(data) {
	console.log('TRACKED EVENT');
	console.log(data);
}

window.addEventListener("load", function() {

	// grab all links on page
	var allLinks = document.querySelectorAll('a');

	// add event listeners for mouseover and click to all links and call functions
	for (var i = 0; i < allLinks.length; i++) {
		allLinks[i].addEventListener('mouseover', handleNavHover);
		// allLinks[i].addEventListener('click', handleNavClick);
	}

	// create function for collecting user data when hovering on links
	function handleNavHover(e) {

		// get body tag
		var bodyTag = document.getElementsByTagName('body');
		// get current target's event
		var eventTarget = e.currentTarget;
		// get href for current target's event
		var eventLink = eventTarget.href;
		// get current target's event
		var currentEl = eventTarget;
		// get class of parent element
		var parentClass = currentEl.className;

		/* while the current element's class *IS* an empty string 
		   *AND* the parent node *ISN'T* the body tag
		   get the parent element and find the class name of that element */
		while (currentEl.className === '' && currentEl.parentNode !== bodyTag) {
			currentEl = currentEl.parentNode;
			parentClass = currentEl.className;
		}

		trackEvent('link-hover parent-class: "' + parentClass + '"; \n' + 'href: "' + eventLink + '";');
	}

/*	function handleNavClick (e) {
		var bodyTag = document.getElementsByTagName('body');
		var eventTarget = e.currentTarget;
		var eventLink = eventTarget.href;
		var eventParent = eventTarget.parentNode;
		var parentClass = eventParent.className;

		while (currentEl.className === '' && currentEl !== bodyTag) {
			currentEl = currentEl.parentNode;
			parentClass = currentEl.className;
		}

		trackEvent('link-click parent-class: "' + parentClass + '"; \n' + 'href: "' + eventLink + '";');

		e.preventDefault();

		setTimeout(function() {
			window.location = eventTarget.href;			
		}, 250);
	}*/
});
