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
                        displayImg(resp.data[0]);
                    }
                }
            });

        }
        if (/(\?)modId=\d*/.test(url)) {
            arg = url.split('?')[1];

        }
    }



    function displayImg(data){
        $("#dest-img-disp").attr('src',data.src).on('click', function () {
            showLargeImg(data.src);
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