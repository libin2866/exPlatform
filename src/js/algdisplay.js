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
        console.log(window.location.href);
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
                        displayImg(resp.data);
                    }
                }
            });

        }
        if (/(\?)modId=\d*/.test(url)) {
            arg = url.split('?')[1];

        }
    }

    function displayImg(data){
        var temp = '<img src='+data.src+' max-width="400px" max-height="400px"/>';
        imgContainer.html(temp);
        $.ajax({
            url: hostUrl + "/algorithm/getImg",
            type: "post",
            data: JSON.stringify({
                algorithmId: id
            }),
            dataType: 'json',
            success: function (resp) {
                console.log(resp);
                if (resp.status == "0") {
                    //redrawModuleTab(resp.data);
                    //fillAlgData(resp.data);
                    $('.result-img').attr('src',resp.src);

                }
            }
        });


    }
});