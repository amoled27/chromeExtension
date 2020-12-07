var videoList = document.getElementsByTagName('ytd-rich-item-renderer');
let videoArr = [];


for (let index = 0; index < videoList.length ; index++) {
    let fetchedData = videoList[index].children[0].children[0].children[0];
    let videoTitle = fetchedData.children[1].children[1].children[0].innerText;
    let videoData = fetchedData.children[0].children[0];
    let videoLink = videoData.href;
    let videoThumbNail = videoData.children[0].children[0].src;

    let videoObj = {
        link: videoLink,
        title: videoTitle,
        thumbnail: videoThumbNail
    }
    videoArr.push(videoObj);
    // console.log(videoObj)
}

chrome.storage.sync.set({videoData: videoArr}, function() {
  });

