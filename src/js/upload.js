/**
 * @author: libin
 * @date: 15/11/19.
 */

var hostUrl = "/DistributedPlatForm";
$(function () {
    //console.log($("#mod-name").length);

    $('.back-btn').on('click', function () {
        window.history.go(-1);
    });
    var currentUser;
    checkLogin();
    var globalId="";


    function checkLogin() {
        if (currentUser = JSON.parse(window.localStorage.getItem('userinfo'))) {
            //console.log(currentUser);
            //$(".edit-info").on('click', function () {
            //    window.location = "./uploadAlg.html?toedit&userid="+currentUser.userId;
            //});

        } else {
            alert("请先登录后继续");
            window.location = "../index.html";
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
            globalId=arg;
            $.ajax({
                url: hostUrl + "/manage/toEditAlgorithm",
                type: "post",
                data: JSON.stringify({
                    userId:currentUser.userId,
                    algorithmId: arg
                }),
                dataType: 'json',
                success: function (resp) {
                    console.log(resp);
                    if (resp.status == "0") {
                        //redrawModuleTab(resp.data);
                        $(document).attr("title","编辑算法");//修改title值
                        fillAlgData(resp.data);
                    }
                }
            });

        }
        if (/(\?)modId=\d*/.test(url)) {
            arg = url.split('=')[1];
            if (!arg) {
                return;
            }
            globalId=arg;
            $.ajax({
                url: hostUrl + "/manage/toEditModule",
                type: "post",
                data: JSON.stringify({
                    userId:currentUser.userId,
                    moduleId: arg
                }),
                dataType: 'json',
                success: function (resp) {
                    console.log(resp);
                    if (resp.status == "0") {
                        //redrawModuleTab(resp.data);
                        $(document).attr("title","编辑模块");//修改title值
                        fillModData(resp.data);
                    }
                }
            });
        }
    }

    /**
     * 根据页面内的元素判断目前加载的是算法还是模块上传页面.
     */
    if ($("#upload-alg-form").length) {
        initAlg();
    }
    if ($("#upload-mod-form").length) {
        initMod();
    }

    function initAlg() {
        console.log('alg');
        $('#user-id').val(currentUser.userId);
        $(".submit-btn").on('click', uploadAlg);


        checkEdit();
    }

    function initMod() {
        console.log('mode');
        $('#user-id').val(currentUser.userId);
        $(".submit-btn").on('click', uploadMod);
        //$(".submit-btn").on('click', uploadMod);
        //$("#upload-mod-form").attr('action','/DistributedPlatForm/algorithm/addAlgorithm?userId='+currentUser.userId);
        checkEdit();
    }

    function uploadAlg() {
        var name = $("#alg-name").val(),
            mainApp = $("#alg-main").val(),
            belong = $("#alg-module").val(),
            desc = $(".text-area").val(),
        upForm = $("#upload-alg-form");
        //formData = new FormData($("#upload-alg-form")[0]);
        //console.log(form);
        //console.log(name,mainApp,belong);
        if (!name || !mainApp || !belong) {
            alert('请先完善输入信息');
            return;
        }
        var tempUrl;
        if(globalId){
            tempUrl="/DistributedPlatForm/algorithm/editAlgorithm?userId="+currentUser.userId+"&algId="+globalId;
        }else{
            tempUrl="/DistributedPlatForm/algorithm/addAlgorithm?userId="+currentUser.userId;
        }

        var options = {
            url:tempUrl,
            success: function (resp) {
                console.log(resp);
               var  resp = JSON.parse(resp);
                if(resp.status=='0'){
                   if(globalId){
                      if( confirm('编辑成功,是否跳转到管理页?')){
                          window.location='userDetail.html';
                       }
                   } else{
                       if(confirm('上传成功,是否跳转到管理页?')){
                           window.location='userDetail.html';
                       }
                   }

                }
                else{
                    alert('上传失败，请重试！');
                }
            }
        };

        // ajaxForm
        upForm.ajaxForm(options);

        // ajaxSubmit
        $(".submit-btn").click(function () {
            upForm.ajaxSubmit(options);
        });

    }

    function uploadMod() {
        var name = $("#mod-name").val(),
            mainApp = $("#mod-main").val(),
            belong = $("#mod-application").val(),
            desc = $(".text-area").val(),
            upForm = $("#upload-mod-form");

        if (!name || !mainApp || !belong) {
            alert('请先完善输入信息');
            return;
        }
        var tempUrl;
        if(globalId){
            tempUrl="/DistributedPlatForm/algorithm/editModule?userId="+currentUser.userId+"&modId="+globalId;
        }else{
            tempUrl="/DistributedPlatForm/algorithm/addModule?userId="+currentUser.userId;
        }

        var options = {
            url:tempUrl,
            success: function (resp) {
                console.log(resp);
                var  resp = JSON.parse(resp);
                if(resp.status=='0'){
                    //alert('上传成功');
                    //window.location='userDetail.html';
                    if(globalId){
                        if( confirm('编辑成功,是否跳转到管理页?')){
                            window.location='userDetail.html';
                        }
                    } else{
                        if(confirm('上传成功,是否跳转到管理页?')){
                            window.location='userDetail.html';
                        }
                    }
                }
                else{
                    alert('上传失败，请重试！');
                }
            }
        };

        upForm.ajaxForm(options);

        // ajaxSubmit
        $(".submit-btn").click(function () {
            upForm.ajaxSubmit(options);
        });

    }

    function fillAlgData(data) {
        console.log(data);
        $("#alg-name").val(data.name);
        $("#alg-main").val(data.className);
        var temp= "";
        for(var i =0;i<data.modules.length;++i){
            temp+=data.modules[i].name+" ";
        }
        $("#alg-module").val(temp);
        $(".text-area").val(data.desc);
    }

    function fillModData(data) {
        console.log(data);
        $("#mod-name").val(data.name);
        $("#mod-main").val(data.className);
        var temp= "";
        for(var i =0;i<data.algorithms.length;++i){
            temp+=data.algorithms[i].name+" ";
        }
        $("#mod-application").val(data.temp);
        $(".text-area").val(data.desc);
    }

});
function selectFile(input) {
    var fileName = input.value;
    if (fileName.length > 1 && fileName) {
        var ldot = fileName.lastIndexOf(".");
        var type = fileName.substring(ldot + 1);

        if (type != "jar") {
            alert("您选择的文件类型是" + type + ",请选择 jar 后缀的文件");
            //清除当前所选文件www.111cn.net
            input.outerHTML = input.outerHTML.replace(/(value=\").+\"/i, "$1\"");
        }
    }
}