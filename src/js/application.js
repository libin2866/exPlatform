/**
 * @author: libin
 * @date: 15/12/1.
 */

var hostUrl ="/DistributedPlatForm";

$(function () {

    var currentUser;
    checkLogin();
    function checkLogin() {
        if (currentUser = JSON.parse(window.localStorage.getItem('userinfo'))) {
            getApplicationList(currentUser.userId);
        }
        else{
            alert('请先登录后继续');
            window.location="../index.html";
        }
    }
    function getApplicationList(userId) {
        $.ajax({
            url:hostUrl+"/application/getList",
            type:"post",
            data:JSON.stringify({
                userId:userId
            }),
            dataType:'json',
            success:function (resp) {
                console.log(resp);
                updateApplicationList(resp.data);
            }
        })

    }

    function  updateApplicationList(data){
        var container = $('.container');
        var content = "";
        //for (var i = 0; i < data.length; ++i) {
        //    content += '<ul class="input-ul"><li class="three-col">' + data[i].name + '</li><li class="four-col">' + data[i].username + '</li>' +
        //        '<li class="three-col"><a  href="'+data[i].resultUrl+'">进入</a></li>' + '</ul>'
        //}
        for (var i = 0; i < data.length; ++i) {
            content += '<ul class="input-ul"><li class="three-col">' + data[i].name + '</li><li class="three-col">';
            for (var j = 0; j < data[i].modules.length; ++j) {
                content += data[i].modules[j].name + " ";
                //console.log(data[i].modules[j].name);
            }
            content += '</li>' +
                '<li class="three-col"><a href="' + data[i].resultUrl + '">进入</a></li>' + '</ul>';
        }
        container.html(content);
    }
    $('.back-btn').on('click', function () {
        window.history.go(-1);
    })
});