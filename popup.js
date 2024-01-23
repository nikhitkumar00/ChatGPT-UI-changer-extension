// popup.js

document.getElementById("toggleButton").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "toggleDarkTheme" });
    });
});

document.getElementById("applyButton").addEventListener("click", function () {
    const fontSize = document.getElementById("fontSizeInput").value;
    if (fontSize) {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "changeFontSize", fontSize });
        });
    }
});
