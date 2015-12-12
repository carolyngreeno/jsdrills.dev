jQuery(document).ready(function() {

	var myTabs 				= $("ul.nav-tabs > li");
	var tab1				= $("ul.nav-tabs > li:nth-child(1)");
	var tab2				= $("ul.nav-tabs > li:nth-child(2)");
	var tab3				= $("ul.nav-tabs > li:nth-child(3)");
	var myContentPanes 		= $(".tab-pane");
	var tab1Pane			= $("#tab-1");
	var tab2Pane			= $("#tab-2");
	var tab3Pane			= $("#tab-3");

	$(tab1).click(function() {
		$(myTabs).removeClass("active");
		$(this).addClass("active");
		$(myContentPanes).removeClass("active");
		$(tab1Pane).addClass("active");
	});

	$(tab2).click(function() {
		$(myTabs).removeClass("active");
		$(this).addClass("active");
		$(myContentPanes).removeClass("active");
		$(tab2Pane).addClass("active");
	});

	$(tab3).click(function() {
		$(myTabs).removeClass("active");
		$(this).addClass("active");
		$(myContentPanes).removeClass("active");
		$(tab3Pane).addClass("active");
	});

	$("button").click(function(){
		$("p").hide();
		alert("The paragraph is now hidden");
	});

});
