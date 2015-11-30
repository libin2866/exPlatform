/**
 * @author: libin
 * @date: 15/11/13.
 */
var currentUser;
$(function () {
    var leftContainer = $('.left-area');
    var tabBar = leftContainer.find('.tab-banner');
    var preTab = $('#alg-manage'), currentTab, currentId = 4;
    var hostUrl = "/DistributedPlatForm";

    checkLogin();

    function checkLogin() {
        if (currentUser = JSON.parse(window.localStorage.getItem('userinfo'))) {
            //console.log(currentUser);
            $(".edit-info").on('click', function () {
                window.location = "register.html?userId=" + currentUser.userId;
            });
            console.log('test');
            fillUserInfo(currentUser);
            refreshTab(4);

        } else {
            alert("请先登录后继续");
            window.location = "../index.html";
        }
    }

    $(".upload-algorithm").html('上传算法').on('click', function () {
        window.location = "./uploadAlg.html";
    });

    (function () {
        tabBar.find('#alg-manage').on('click', function () {
            if (!$(this).hasClass('tab-activated')) {
                refreshTab(4);
                currentId = 4;
            }
        });
        tabBar.find('#mod-manage').on('click', function () {
            if (!$(this).hasClass('tab-activated')) {
                refreshTab(3);
                currentId = 3;
            }
        });
        $('.back-btn').on('click', function () {
            //window.history.go(-1);
            window.location = "../index.html";
        })
    })();
    function fillUserInfo(data) {
        var infoContainer = $(".person-content");
        infoContainer.find("#sys-user").html(data.username || "请重新登陆");
        infoContainer.find("#sys-email").html(data.email || "无");
        infoContainer.find("#sys-company").html(data.companyInfo || "无");
        infoContainer.find("#sys-mobile").html(data.mobilePhone || "无");
        localStorage.setItem("userinfo", JSON.stringify(data));//存储用户信息到localstorage
        //infoContainer.find('.edit-info').on('click', function () {
        //    if(data.userType=="1"){
        //        window.location = './page/managePage.html';
        //    }else{
        //        window.location = './page/userDetail.html';
        //    }
        //
        //})
        infoContainer.find(".upload-algorithm").on('click', function () {
            window.location = './page/uploadAlg.html';
        })
    }

    function refreshTab(tabid) {
        if (preTab) preTab.removeClass('tab-activated');
        switch (tabid) {
            case 3:
                currentTab = tabBar.find('#mod-manage');
                preTab = currentTab;
                $.ajax({
                    url: hostUrl + "/user/getModule",
                    type: "post",
                    data: JSON.stringify({userId: currentUser.userId}),
                    dataType: 'json',
                    success: function (resp) {
                        console.log(resp);
                        if (resp.status == "0") {
                            redrawModuleTab(resp.data);
                        }
                    }
                });
                break;
            case 4:
                currentTab = tabBar.find('#alg-manage');
                preTab = currentTab;
                $.ajax({
                    url: hostUrl + "/user/getAlgorithm",
                    type: "post",
                    data: JSON.stringify({userId: currentUser.userId}),
                    dataType: 'json',
                    success: function (resp) {
                        console.log(resp);
                        if (resp.status == "0") {
                            redrawAlgorithmTab(resp.data);
                        }
                    }
                });
                break;
            default:
                return;
        }
        currentTab.addClass('tab-activated');
    }


    function redrawModuleTab(data) {
        var ulheader = $('#ul-header');
        var header = '<li class="three-col">模块名称</li><li class="three-col">关联算法</li>' +
            '<li class="three-col">操作</li>'
        ulheader.html(header);
        var container = $('.container');
        var content = "";
        //console.log('redraw application');
        for (var i = 0; i < data.length; ++i) {
            content += '<ul class="input-ul"><li class="three-col">' + data[i].name + '</li><li class="three-col">';
            for (var j = 0; j < data[i].algorithms.length; ++j) {
                content += data[i].algorithms[j].name + " ";
                //console.log(data[i].modules[j].name);
            }
            if (data[i].resultUrl) {
                content += '</li>' +
                    '<li class="three-col"><a  href="' + data[i].resultUrl + '">运行</a>&nbsp;<a   href ="uploadMod.html?modId=' + data[i].id + '">编辑</a>&nbsp;<a href="javascript:void(0);" onclick="delMod(' + data[i].id + ')">删除</a></li>' + '</ul>';

            } else {
                content += '</li>' +
                    '<li class="three-col"><a   href="alg_display.html?modId=' + data[i].id + '">运行</a>&nbsp;<a   href ="uploadMod.html?modId=' + data[i].id + '">编辑</a>&nbsp;<a href="javascript:void(0);" onclick="delMod(' + data[i].id + ')">删除</a></li>' + '</ul>';
            }
        }
        container.html(content);

        $(".upload-algorithm").html('上传模块').on('click', function () {
            window.location = "./uploadMod.html";
        });
    }

    function redrawAlgorithmTab(data) {
        var ulheader = $('#ul-header');
        var header = '<li class="four-col">算法名称</li><li class="four-col">主程序</li>' +
            '<li class="four-col">提交时间</li><li class="four-col">操作</li>';
        ulheader.html(header);
        var container = $('.container');
        var content = "";
        for (var i = 0; i < data.length; ++i) {
            if (data[i].resultUrl) {
                content += '<ul class="input-ul"><li class="four-col">' + data[i].algorithm + '</li><li class="four-col">' + data[i].main + '</li><li class="four-col  font14">' + data[i].postTime + '</li>' +
                    '<li class="four-col"><a href ="' + data[i].resultUrl + '">运行</a>&nbsp;<a  href ="uploadAlg.html?algId=' + data[i].id + '">编辑</a>&nbsp;<a href="javascript:void(0);" onclick="delAlg(' + data[i].id + ')" >删除</a></li>' + '</ul>'
            } else {
                content += '<ul class="input-ul"><li class="four-col">' + data[i].algorithm + '</li><li class="four-col">' + data[i].main + '</li><li class="four-col  font14">' + data[i].postTime + '</li>' +
                    '<li class="four-col"><a href ="alg_display.html?algId=' + data[i].id + '">运行</a>&nbsp;<a  href ="uploadAlg.html?algId=' + data[i].id + '">编辑</a>&nbsp;<a href="javascript:void(0);" onclick="delAlg(' + data[i].id + ')">删除</a></li>' + '</ul>'
            }

        }
        container.html(content);
        $(".upload-algorithm").html('上传算法').on('click', function () {
            window.location = "./uploadAlg.html";
        });
    }




});

function  delMod(modId){
    console.log('delMod');
    console.log(modId);
    if(confirm("确定要删除吗？")){
        $.ajax({
            url: hostUrl + "/manage/delModule",
            type: "post",
            data: JSON.stringify({
                moduleId:modId,
                userId: currentUser.userId
            }),
            dataType: 'json',
            success: function (resp) {
                console.log(resp);
                if (resp.status == "0") {
                    //redrawModuleTab(resp.data);
                    alert('删除成功!');
                    refreshTab(3);
                }else {
                    alert('删除失败!');
                }
            }
        });
    }
}
function  delAlg(algId){
    console.log('delAlg');
    console.log(algId);
    if(confirm("确定要删除吗？"))
    {
        $.ajax({
            url: hostUrl + "/manage/delAlgorithm",
            type: "post",
            data: JSON.stringify({
                moduleId:algId,
                userId: currentUser.userId
            }),
            dataType: 'json',
            success: function (resp) {
                console.log(resp);
                if (resp.status == "0") {
                    //redrawModuleTab(resp.data);
                    alert('删除成功!');
                    refreshTab(4);
                }else {
                    alert('删除失败!');
                }
            }
        });
    }
}