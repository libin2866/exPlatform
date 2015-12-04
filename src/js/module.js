/**
 * @author: libin
 * @date: 15/12/1.
 */
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
            getModuleList(currentUser.userId);
        }
        else{
            alert('请先登录后继续');
            window.location="../index.html";
        }
    }
    function getModuleList(userId) {
        $.ajax({
            url:hostUrl+"/module/getList",
            type:"post",
            data:JSON.stringify({
                userId:userId
            }),
            dataType:'json',
            success:function (resp) {
                console.log(resp);
                updateModuleList(resp.data);
            }
        })

    }

    function  updateModuleList(data){
        var container = $('.container');
        var content = "";
        //for (var i = 0; i < data.length; ++i) {
        //    content += '<ul class="input-ul"><li class="four-col">' + data[i].title + '</li><li class="four-col">' + data[i].time + '</li><li class="four-col">' + data[i].username + '</li>' +
        //        '<li class="four-col"><a id="' + data[i].id + '" href="'+data[i].downloadUrl+'">下载</a></li>' + '</ul>'
        //}
        for (var i = 0; i < data.length; ++i) {
            content += '<ul class="input-ul"><li class="three-col">' + data[i].name + '</li><li class="three-col">';
            for (var j = 0; j < data[i].algorithms.length; ++j) {
                content += data[i].algorithms[j].name + " ";
                //console.log(data[i].modules[j].name);
            }
            content += '</li>' +
                '<li class="three-col"><a href ="' +data[i].downloadUrl+ '">下载</a></li>' + '</ul>';
        }
        container.html(content);
    }
    $('.back-btn').on('click', function () {
        window.history.go(-1);
    })
});