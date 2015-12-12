window.addEventListener("load", function() {

	var body = document.getElementsByTagName("body");

	var colorPink = document.getElementById("pinkBtn");
	var colorGold = document.getElementById("goldBtn");
	var colorBlue = document.getElementById("blueBtn");

	colorPink.onclick = switchPink;
	colorGold.onclick = switchGold;
	colorBlue.onclick = switchBlue;

	var colorBlock = document.getElementById("colorBg");

	function switchPink() {
		colorBlock.classList.add("pink-bg");
		colorBlock.classList.remove("gold-bg");
		colorBlock.classList.remove("blue-bg");
	}

	function switchGold() {
		colorBlock.classList.add("gold-bg");
		colorBlock.classList.remove("pink-bg");
		colorBlock.classList.remove("blue-bg");
	}

	function switchBlue() {
		colorBlock.classList.add("blue-bg");
		colorBlock.classList.remove("pink-bg");
		colorBlock.classList.remove("gold-bg");
	}

});
