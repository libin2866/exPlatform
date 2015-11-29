/**
 * @author: libin
 * @date: 15/11/17.
 */
$(function () {
   var imgContainer = $('.result-contain');

    /**
     * 刷新图像
     * @param data
     */
    var currentUser;
    var currentImg= 0,imgList;
    checkLogin();
    checkEdit()
    $('.back-btn').on('click', function () {
        window.history.go(-1);
    });


    function checkLogin() {
        if (currentUser = JSON.parse(window.localStorage.getItem('userinfo'))) {
            //console.log(currentUser);
            //$(".edit-info").on('click', function () {
            //    window.location = "./uploadAlg.html?toedit&userid="+currentUser.userId;
            //});
        }else{
            alert("请先登录后继续");
            window.location="../index.html";
        }
    }

    function checkEdit() {
        console.log('check');
        //console.log(window.location.href);
        var url = window.location.href,
            arg = url.split('?')[1];
        if (!arg) {
            return;
        }
        if (/(\?)algId=\d*/.test(url)) {
            arg = arg.split('=')[1];
            console.log(arg);
            if (!arg) {
                return;
            }

            $.ajax({
                url: hostUrl + "/algorithm/getImg",
                type: "post",
                data: JSON.stringify({
                    algorithmId: arg
                }),
                dataType: 'json',
                success: function (resp) {
                    console.log(resp);
                    if (resp.status == "0") {
                        //redrawModuleTab(resp.data);
                        displayTitle(resp.data.title);
                        currentImg=0;
                        imgList=resp.data.imgList;
                        displayImg(imgList,currentImg);
                        $(".prev-pic-btn").on('click', function () {
                            prevImg();
                        });
                        $(".next-pic-btn").on('click', function () {
                            nextImg();
                        })
                    }
                }
            });

        }
        if (/(\?)modId=\d*/.test(url)) {
            arg = url.split('?')[1];

        }
    }

 function displayTitle(data){
     $(".alg-title").html(data);
 }
    function prevImg(){
        if(currentImg>0){
            currentImg--;
            if(currentImg==0){
                $(".prev-pic-btn").addClass('disabled-btn');
            }
            $(".next-pic-btn").removeClass('disabled-btn');

        }else{
            currentImg=0;
            $(".prev-pic-btn").addClass('disabled-btn');
            //alert("已经是第一张图像");
            //return;
        }
        displayImg(imgList,currentImg);
    }
    function nextImg(){
        if(currentImg<imgList.length-1){
            currentImg++;
            if(currentImg==imgList.length-1){
                $(".next-pic-btn").addClass('disabled-btn');
            }
            $(".prev-pic-btn").removeClass('disabled-btn');

        }else{
            currentImg=imgList.length-1;
            $(".next-pic-btn").addClass('disabled-btn');
            //alert("已经是最后一张图像");
            //return;
        }
        displayImg(imgList,currentImg);
    }

    function displayImg(data,pos){
        $("#dest-img-disp").attr('src',data[pos].src).on('click', function () {
            showLargeImg(data[pos].src);
        });
    }

    function  showLargeImg(data){
        console.log('showImg');
        $(".white_overlay").fadeIn(300).on("click", function () {
            hideLargeImage();
        });
        $(".icons-container-pop").fadeIn(300);
        //console.log()
        $("#large-img-disp").attr('src',data);

    }
    function hideLargeImage(){
        $(".white_overlay").fadeOut(200);
        $(".icons-container-pop").fadeOut(200);
    }



});

function resizeImg(element, maxWidth, maxHeight){
    if(element.width > maxWidth || element.height > maxHeight){
        if(element.width / element.height > maxWidth / maxHeight){
            element.width = maxWidth;
        }else{
            element.height = maxHeight;
        }
    }
    //return element;
}