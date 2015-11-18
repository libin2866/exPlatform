/**
 * Created by Libin on 2015/11/6.
 */
var hostUrl ="";
$(function () {

    var currentUser;
    checkLogin();
    function checkLogin() {
        if (currentUser = JSON.parse(window.localStorage.getItem('userinfo'))) {
            getAlgorithmList(currentUser.userId);
        }
        else{
            alert('请先登录后继续');
            window.location="../index.html";
        }
    }
    function getAlgorithmList(userId) {
        $.ajax({
            url:hostUrl+"/algorithm/getList",
            type:"post",
            data:JSON.stringify({
                userId:userId
            }),
            dataType:'json',
            success:function (resp) {
                console.log(resp);
                updateAlgorithmList(resp.data);
            }
        })

    }

    function  updateAlgorithmList(data){
        var container = $('.container');
        var content = "";
        for (var i = 0; i < data.length; ++i) {
            content += '<ul class="input-ul"><li class="four-col">' + data[i].title + '</li><li class="four-col">' + data[i].time + '</li><li class="four-col">' + data[i].username + '</li>' +
                '<li class="four-col"><a id="' + data[i].id + '" href="'+data[i].downloadUrl+'">下载</a></li>' + '</ul>'
        }
        container.html(content);
    }
    $('.back-btn').on('click', function () {
        window.history.go(-1);
    })
})