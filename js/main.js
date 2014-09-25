var anchor = document.getElementById('anchor');
var anchorText = anchor.innerText;
var linkLocation = anchor.getAttribute("href");
var textLocation;

window.onload = function(){
	anchor.innerHTML = anchorText + " <span id='link-location'>("+ linkLocation + ")</span>";
	textLocation = document.getElementById('link-location');
	textLocation.style.display = "none";
};

anchor.addEventListener("mouseover", showLink, false);
anchor.addEventListener("mouseout", hideLink, false);

function showLink(){
	textLocation.style.display = "inline-block";
};
function hideLink(){
	textLocation.style.display = "none";
};