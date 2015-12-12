window.addEventListener("load", function() {

	var iOne = document.getElementById("itemOne");
	var iOnePrice = 60;
	window.iOneSub = 0;
	var iOneSubField = document.getElementById("itemOneSub");

	var iTwo = document.getElementById("itemTwo");
	var iTwoPrice = 25;
	window.iTwoSub = 0;
	var iTwoSubField = document.getElementById("itemTwoSub")

	var fTotal = 0;
	var fTotalField = document.getElementById("finalTotal");

	iOne.addEventListener("change", function () {
		calcSubTotal(iOne, iOnePrice, "iOneSub", iOneSubField);
	});

	iTwo.addEventListener("change", function () {
		calcSubTotal(iTwo, iTwoPrice, "iTwoSub", iTwoSubField);
	});

	function calcSubTotal(qField, iPrice, subName, subField) {	
		window[subName] = qField.value * iPrice / 100;
		subField.innerHTML = window[subName].toFixed(2);
		subField.classList.add("active-prices");
		calcTotal();
	}

	function calcTotal() {
		fTotal = iOneSub + iTwoSub;
		fTotalField.innerHTML = fTotal.toFixed(2);
		fTotalField.classList.add("active-prices");
	}
});
