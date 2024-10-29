// background.js
chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === "sync" && changes.img_url) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { newImageUrl: changes.img_url.newValue });
        });
    }
});
