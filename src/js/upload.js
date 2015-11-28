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
            $.ajax({
                url: hostUrl + "/manage/toEditAlgorithm",
                type: "post",
                data: JSON.stringify({
                    algorithmId: arg
                }),
                dataType: 'json',
                success: function (resp) {
                    console.log(resp);
                    if (resp.status == "0") {
                        //redrawModuleTab(resp.data);
                        fillAlgData(resp.data);
                    }
                }
            });

        }
        if (/(\?)modId=\d*/.test(url)) {
            arg = url.split('?')[1];
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
        $("#upload-alg-form").attr('action','/DistributedPlatForm/algorithm/addAlgorithm?userId='+currentUser.userId);
        //$(".submit-btn").on('click', uploadAlg);

        //$("#upload-alg-form").submit(function () {
        //    var formdata=new FormData(this);
        //    $.ajax({
        //        type:'POST',
        //        url: hostUrl + "/algorithm/addAlgorithm",
        //        data:formdata,
        //        /**
        //         *必须false才会自动加上正确的Content-Type
        //         */
        //        contentType:false,
        //        /**
        //         * 必须false才会避开jQuery对 formdata 的默认处理
        //         * XMLHttpRequest会对 formdata 进行正确的处理
        //         */
        //        processData:false
        //    }).then(function(resp){
        //        //doneCal
        //        console.log(resp);
        //        if(resp.status=="0"){
        //            alert("提交成功!");
        //            //location.reload();
        //        }
        //    },function(resp){
        //        //failCal
        //
        //    });
        //    return false;
        //});
        checkEdit();
    }

    function initMod() {
        console.log('mode');
        //$(".submit-btn").on('click', uploadMod);
        //$("#upload-mod-form").attr('action','/DistributedPlatForm/algorithm/addAlgorithm?userId='+currentUser.userId);
        checkEdit();
    }

    function uploadAlg() {
        var name = $("#alg-name").val(),
            mainApp = $("#alg-main").val(),
            belong = $("#alg-module").val(),
            desc = $(".text-area").val(),
            formData = new FormData($("#upload-alg-form")[0]);
        //console.log(form);
        console.log(name,mainApp,belong);
        if (!name || !mainApp || !belong) {
            alert('请先完善输入信息');
            //return;
        }

        $.ajax({
            url: hostUrl + "/algorithm/addAlgorithm",
            type: "post",
            data:formData,
            /**
             * 必须false才会避开jQuery对 formdata 的默认处理
             * XMLHttpRequest会对 formdata 进行正确的处理
             */
            processData : false,
            /**
             *必须false才会自动加上正确的Content-Type
             */
            contentType : false,
            //dataType: "formdata",
            success: function (resp) {
                console.log(resp);
                if(resp.status=="0"){
                    alert("提交成功!");
                    location.reload();
                }
            },
            error : function(responseStr) {
                alert("失败:" + JSON.stringify(responseStr));//将    json对象    转成    json字符串。
            }
        })
    }

    function uploadMod() {
        var name = $("#mod-name").val(),
            mainApp = $("#mod-main").val(),
            belong = $("#mod-application").val(),
            desc = $(".text-area").val(),
            formData = new FormData($("#upload-mod-form")[0]);
        if (!name || !mainApp || !belong) {
            alert('请先完善输入信息');
            return;
        }
        $.ajax({
            url: hostUrl + "/module/addModule",
            type: "post",
            //data: JSON.stringify({
            //    name: name,
            //    mainApp: mainApp,
            //    belong: belong,
            //    desc: desc
            //}),

            data:formData,
            processData : false,
            contentType : false,
            //dataType: "json",
            success: function (resp) {
                console.log(resp);
                if(resp.status=="0"){
                    alert("提交成功!");
                    location.reload();
                }
            }
        })
    }

    function fillAlgData(data) {
        $("#alg-name").val(data.name);
        $("#alg-main").val(data.className);
        $("#alg-module").val(data.belong);
        $(".text-area").val(data.desc);
    }

    function fillModData(data) {
        $("#mod-name").val(data.name);
        $("#mod-main").val(data.className);
        $("#mod-application").val(data.belong);
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