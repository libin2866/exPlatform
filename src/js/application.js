/**
 * Created by Libin on 2015/11/6.
 */
var hostUrl="";
$(function () {
    var currentUser;
    checkLogin();
    function checkLogin() {
        if (currentUser = JSON.parse(window.localStorage.getItem('userinfo'))) {
            getApplicationList();
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

    function updateApplicationList(data){
        var list =data;
        var container=$(".container");
        var tmpHtml ="";
        for(var i=0;i<list.length;++i){
            tmpHtml+=' <ul class="input-ul"><li>'+list[i].name+'</li><li>';

            for(var j =0;j<list[i].module.length;++j){
                tmpHtml+='<span class="inner-li">'+ list[i].module[j].name ;
            }
            tmpHtml+= '</li><li><a target="_blank" href="'+list[i].resultUrl+'">展示</a></li></ul>';
        }
        container.html(tmpHtml);
    }


    $('.back-btn').on('click', function () {
        window.history.go(-1);
    })
});