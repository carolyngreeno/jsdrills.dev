window.addEventListener("load", function() {

	// store tabs variable
	var myTabs = document.querySelectorAll("ul.nav-tabs > li");

	function myTabClicks(tabClickEvent) {

		// iterate through each tab and remove the 'active' class
		for (var i = 0; i < myTabs.length; i++) {
			myTabs[i].classList.remove("active");
		}

		// store variable for clicked tab
		var clickedTab = tabClickEvent.currentTarget; 

		// add 'active' class to clicked tab
		clickedTab.classList.add("active");

		// prevent default click event from happening
		tabClickEvent.preventDefault();

		// store variable for each tab pane container
		var myContentPanes = document.querySelectorAll(".tab-pane");

		// for each instance of tab-pane, remove 'active' class
		for (i = 0; i < myContentPanes.length; i++) {
			myContentPanes[i].classList.remove("active");
		}

		var anchorReference = tabClickEvent.target;
		var activePaneId = anchorReference.getAttribute("href");
		var activePane = document.querySelector(activePaneId);

		activePane.classList.add("active");

	}

	for (i = 0; i < myTabs.length; i++) {
		myTabs[i].addEventListener("click", myTabClicks)
	}
});
