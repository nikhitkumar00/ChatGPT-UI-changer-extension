function toggleDarkTheme() {
	document.body.style.backgroundColor = "black";

	document.documentElement.style.setProperty("--surface-secondary", "black");
	document.documentElement.style.setProperty("--surface-primary", "black");
	document.documentElement.style.setProperty("--surface-tertiary", "black");
}

toggleDarkTheme();

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.action === "toggleDarkTheme") {
		toggleDarkTheme();
	}
});
