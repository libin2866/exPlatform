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
    function displayImg(data){
        var temp = '<img src='+data.src+' max-width="400px" max-height="400px"/>';
        imgContainer.html(temp);
    }
});