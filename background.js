
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.active) {
        // videoList = document.getElementsByTagName('ytd-rich-item-renderer');
        // videoList.forEach((video, index) => {
        //     let fetchedData = video.children[0].children[0].children[0];
        //     let videoTitle = fetchedData.children[1].children[1].children[0].innerText;
        //     let videoData = fetchedData.children[0].children[0];
        //     let videoLink = videoData.href;
        //     let videoThumbNail = videoData.children[0].children[0].children[0].src;

        //     let videoObj = {
        //         link: videoLink,
        //         title: videoTitle,
        //         thumbnail: videoThumbNail
        //     }
        // videoArr.push(videoObj);
        // alert(videoObj.link)
        // });


    }
})