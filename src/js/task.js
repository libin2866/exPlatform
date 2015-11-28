/**
 * @author: libin
 * @date: 15/11/27.
 */
var hostUrl ="/DistributedPlatForm";
$(function () {

    var currentUser;
    checkLogin();
    function checkLogin() {
        if (currentUser = JSON.parse(window.localStorage.getItem('userinfo'))) {
            getTaskList(currentUser.userId);
        }
        else{
            alert('请先登录后继续');
            window.location="../index.html";
        }
    }
    function getTaskList(userId) {
        $.ajax({
            url:hostUrl+"/task/getTask",
            type:"post",
            data:JSON.stringify({
                userId:userId
            }),
            dataType:'json',
            success:function (resp) {
                console.log(resp);
                updateTaskList(resp.data);
            }
        })

    }

    function  updateTaskList(data){
        var container = $('.container');
        var content = "";
        for (var i = 0; i < data.length; ++i) {
            content += '<ul class="input-ul"><li class="four-col">' + data[i].title + '</li><li class="four-col">' + data[i].time + '</li><li class="four-col">' + data[i].status + '</li>' +
                '<li class="four-col"><a id="' + data[i].id + '" href="algorithm.html?algId='+data[i].id+'">展示</a></li>' + '</ul>'
        }
        container.html(content);
    }
    $('.back-btn').on('click', function () {
        window.history.go(-1);
    })
})