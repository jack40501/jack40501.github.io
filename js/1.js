    const preloadImg = (url) => {
        const img = new Image();
        if(img.complete) {
            //图片已经加载过了，可以使用图片
            //do something here
        }
        else {
            img.onload = function() {
                //图片首次加载完成，可以使用图片
                //do something here
            };
        }
        img.src = url('../img/素材/4.jpg');
    }
