const btn = document.getElementById("videoLoader");
const btn2 = document.getElementById("getList");
const setHtmlData = (videoArr) => {
    videoArr.forEach((video,index) => {
        console.log('ddddd')
        let innerVideoHTML = `<div class="video_div" id="vid_${index}">
                                    <div class="thumbnail">
                                        <img src="${video.thumbnail}">
                                    </div>
                                    <div class="title">
                                        <a href="${video.link}">${video.title}</a>
                                    </div>
                             </div>`;
        let htmlEl = document.getElementById('playlist');

        htmlEl.innerHTML += innerVideoHTML + '</br>'; 
    });
}

btn.onclick = () => {
   
}


btn2.onclick = () => {
    chrome.storage.sync.get(['videoData'], function (res) {
        setHtmlData(res.videoData);
    });
}
