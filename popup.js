const btn = document.getElementById("videoLoader");
const setHtmlData = (videoArr) => {
    videoArr.forEach(video => {
        let innerVideoHTML = `<div class="video_div">
                                    <div class="thumbnail">
                                        <img src="${video.thumbnail}">
                                    </div>
                                    <div class="title">
                                        <a href="${video.link}">${video.title}</a>
                                    </div>
                             </div>`;
        document.getElementById('playlist').innerHTML = innerVideoHTML;
    });
}
btn.onclick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(tabs[0].id, { file: "getVideoData.js" });
    });
    setTimeout(function() {
        chrome.storage.sync.get(['videoData'], function(result) {
            this.setHtmlData(result)
          });
    }, 500);
}
