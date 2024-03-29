function toggleDarkTheme() {
	document.body.style.backgroundColor = "black";

	document.documentElement.style.setProperty("--surface-secondary", "black");
	document.documentElement.style.setProperty("--surface-primary", "black");
	document.documentElement.style.setProperty("--surface-tertiary", "black");
	document.documentElement.style.setProperty("font-size", "18px");
	document.getElementById("prompt-textarea").style.backgroundColor = "black";
}
toggleDarkTheme();

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.action === "toggleDarkTheme") {
		toggleDarkTheme();
	}
});
