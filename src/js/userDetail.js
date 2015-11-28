/**
 * @author: libin
 * @date: 15/11/13.
 */

$(function(){
    var leftContainer = $('.left-area');
    var tabBar = leftContainer.find('.tab-banner');
    var preTab = $('#alg-manage'), currentTab, currentId = 4;
    var hostUrl ="/DistributedPlatForm";
    var currentUser;
    checkLogin();

    function checkLogin() {
        if (currentUser = JSON.parse(window.localStorage.getItem('userinfo'))) {
            //console.log(currentUser);
            $(".edit-info").on('click', function () {
            window.location = "./uploadAlg.html?toedit&userid="+currentUser.userId;
            });
        }else{
            alert("请先登录后继续");
            window.location="../index.html";
        }
    }
    $(".upload-algorithm").html('上传算法').on('click',function(){
        window.location = "./uploadAlg.html";
    });

    (function(){
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
            window.history.go(-1);
        })
    })();

    function refreshTab(tabid){
        if (preTab) preTab.removeClass('tab-activated');
        switch (tabid){
            case 3:
                currentTab = tabBar.find('#mod-manage');
                preTab = currentTab;
                $.ajax({
                    url: hostUrl + "/user/getModule",
                    type: "post",
                    data: JSON.stringify({userId:currentUser.userId}),
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
                    data: JSON.stringify({userId:currentUser.userId}),
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
            content += '</li>' +
                '<li class="three-col"><a id="' + data[i].id + '">演示</a>&nbsp;<a id="' + data[i].id + '">编辑</a>&nbsp;<a id="' + data[i].id + '">删除</a></li>' + '</ul>';
        }
        container.html(content);

        $(".upload-algorithm").html('上传模块').on('click', function () {
            window.location = "./uploadMod.html";
        });
    }
    function redrawAlgorithmTab(data) {
        var ulheader = $('#ul-header');
        var header = '<li class="four-col">用户名</li><li class="four-col">算法名称</li>' +
            '<li class="four-col">提交时间</li><li class="four-col">操作</li>';
        ulheader.html(header);
        var container = $('.container');
        var content = "";
        for (var i = 0; i < data.length; ++i) {
            content += '<ul class="input-ul"><li class="four-col">' + data[i].algorithm + '</li><li class="four-col">' + data[i].username + '</li><li class="four-col  font14">' + data[i].postTime + '</li>' +
                '<li class="four-col"><a id="' + data[i].id + '" href ="../page/alg_display.html?+id='+data[i].id+'">演示</a>&nbsp;<a id="' + data[i].id + '">编辑</a>&nbsp;<a id="' + data[i].id + '">删除</a></li>' + '</ul>'
        }
        container.html(content);
        $(".upload-algorithm").html('上传算法').on('click',function(){
            window.location = "./uploadAlg.html";
        });
    }

});

