function toggleDarkTheme() {
	document.body.style.backgroundColor = "black";

	document.documentElement.style.setProperty("--surface-secondary", "black");
	document.documentElement.style.setProperty("--surface-primary", "black");
	document.documentElement.style.setProperty("--surface-tertiary", "black");
	// document.documentElement.style.setProperty("font-size", "18px");
}

toggleDarkTheme();

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.action === "toggleDarkTheme") {
		toggleDarkTheme();
	} else if (request.action === "changeFontSize") {
		const fontSize = request.fontSize + "px";
		document.documentElement.style.setProperty("font-size", fontSize);
	}
});
