function trackEvent(data) {
	console.log('TRACKED EVENT');
	console.log(data);
}

window.addEventListener("load", function() {

	var allLinks = document.querySelectorAll('a');

	for (var i = 0; i < allLinks.length; i++) {
		allLinks[i].addEventListener('mouseover', handleNavHover);
		allLinks[i].addEventListener('click', handleNavClick);
	}

	function handleNavHover(e) {
		// var bodyTag = document.getElementsByTagName('body');
		var bodyTag = document.getElementsByTagName('body')[0];
		var eventTarget = e.currentTarget;
		var eventLink = eventTarget.href;
		var currentEl = eventTarget;
		var parentClass = currentEl.className;

		while (currentEl.className === '' && currentEl !== bodyTag) {
			currentEl = currentEl.parentNode;
			parentClass = currentEl.className;
		}

		trackEvent('link-hover parent-class: "' + parentClass + '"; \n' + 'href: "' + eventLink + '";');
	}

	function handleNavClick (e) {
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
	}
});
