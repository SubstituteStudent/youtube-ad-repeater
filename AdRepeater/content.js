
window.onload = () => {
    const targetNode = document.getElementById("movie_player") || document.body;
    selfObserver(targetNode);
};

function selfObserver(documentNode) {
    const observer = new MutationObserver(function () {
        adFunction();
    });

    const config = {
        subtree: true,
        childList: true,
    };

    // Start observing
    observer.observe(documentNode, config);
}

function adFunction() {
    let url = window.location.toString();
    let position = url.search("youtube.com/") + 12;
    
    if(url.substring(position, position + 5) === "watch")
    {
        if(document.querySelector("div.ad-showing"))
        {
            console.log("ad is playing");
        }
        else
        {
            console.log("video is playing");
            window.location.replace("https://youtu.be/URIbTD_PgvU?si=54I6G_5otwizRVCp");
        }
    }
    else
    {
        console.log("on the home page/not on a video")
    }
}
