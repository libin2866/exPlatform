/**
 * @author: libin
 * @date: 15/11/9.
 */

$(function () {
    var preTab = $('#user-manage'), currentTab, currentId = 1;
    var hostUrl = "/DistributedPlatForm";
    var tabBar = $('.tab-banner');
    var currentUser;
    checkLogin();

    function checkLogin() {
        if (currentUser = JSON.parse(window.localStorage.getItem('userinfo'))) {
            //console.log(currentUser);
            //$(".edit-info").on('click', function () {
            //    window.location = "./uploadAlg.html?toedit&userid="+currentUser.userId;
            //});
            if(currentUser.userType!="1"){
                //alert("请先登录后继续");
                window.location="./userDetail.html";
            }
            refreshTab(1);
        }else{
            alert("请先登录后继续");
            window.location="../index.html";
        }
    }
    console.log('init');
    (function () {
        //var tabBar = $('.tab-banner');
        console.log(tabBar.find('#user-manage'));
        tabBar.find('#user-manage').on('click', function () {
            if (!$(this).hasClass('tab-activated')) {
                refreshTab(1);
                currentId = 1;
            }
        });
        tabBar.find('#app-manage').on('click', function () {
            //console.log('to refresh');
            if (!$(this).hasClass('tab-activated')) {
                refreshTab(2);
                currentId = 2;
            }
        });
        tabBar.find('#mod-manage').on('click', function () {
            if (!$(this).hasClass('tab-activated')) {
                refreshTab(3);
                currentId = 3;
            }
        });
        tabBar.find('#alg-manage').on('click', function () {
            if (!$(this).hasClass('tab-activated')) {
                refreshTab(4);
                currentId = 4;
            }

        });
        tabBar.find('.search-btn').on('click', function () {

            //console.log('to search');
            var txt = tabBar.find('#search-content').val();

            if (txt) {
                searchContent(txt);
            }

        });
        $('.back-btn').on('click', function () {
            window.history.go(-1);
        })
    })();
    function searchContent(keyword) {
        switch (currentId) {
            case 1:
                searchUser(keyword);
                break;
            case 2:
                searchApplication(keyword);
                break;
            case 3:
                searchModule(keyword);
                break;
            case 4:
                searchAlgorithm(keyword);
        }
    }
//TODO search each
    function searchUser(keyword) {
        console.log(keyword);
    }
    function  searchApplication(keyword){
        console.log(keyword);
    }
    function  searchModule(keyword){
        console.log(keyword);
    }
    function searchAlgorithm(keyword){
        console.log(keyword);
    }

    function refreshTab(tabid) {
        //console.log(tabid);
        if (preTab) preTab.removeClass('tab-activated');
        switch (tabid) {
            case 1:
                currentTab = tabBar.find('#user-manage');
                preTab = currentTab;
                $.ajax({
                    url: hostUrl + "/manage/getUser",
                    type: "get",
                    data: JSON.stringify(),
                    dataType: 'json',
                    success: function (resp) {
                        console.log(resp);
                        if (resp.status == "0") {
                            redrawUserTab(resp.data);
                        }
                    }
                });

                break;
            case 2:
                currentTab = tabBar.find('#app-manage');
                preTab = currentTab;
                $.ajax({
                    url: hostUrl + "/manage/getApplication",
                    type: "get",
                    data: JSON.stringify(),
                    dataType: 'json',
                    success: function (resp) {
                        console.log(resp);
                        if (resp.status == "0") {
                            redrawApplicationTab(resp.data);
                        }
                    }
                });
                break;
            case 3:
                currentTab = tabBar.find('#mod-manage');
                preTab = currentTab;
                $.ajax({
                    url: hostUrl + "/manage/getModule",
                    type: "get",
                    data: JSON.stringify(),
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
                    url: hostUrl + "/manage/getAlgorithm",
                    type: "get",
                    data: JSON.stringify(),
                    dataType: 'json',
                    success: function (resp) {
                        console.log(resp);
                        if (resp.status == "0") {
                            redrawAlgorithmTab(resp.data);
                        }
                    }
                });
                break;


        }
        currentTab.addClass('tab-activated');

    }

    function redrawUserTab(data) {
        var ulheader = $('#ul-header');
        var header = '<li class="four-col">用户名</li><li class="four-col">算法名称</li>' +
            '<li class="four-col">提交时间</li><li class="four-col">操作</li>';
        ulheader.html(header);
        var container = $('.container');
        var content = "";
        for (var i = 0; i < data.length; ++i) {
            content += '<ul class="input-ul"><li class="four-col">' + data[i].username + '</li><li class="four-col">' + data[i].algorithm + '</li><li class="four-col">' + data[i].postTime + '</li>' +
                '<li class="four-col"><a href="register.html?userId=' + data[i].id + '">编辑</a>&nbsp;<a href="javascript:void(0);" onclick="delUser(' + data[i].id + ')">删除</a></li>' + '</ul>'
        }
        container.html(content);
    }

    function redrawApplicationTab(data) {
        var ulheader = $('#ul-header');
        var header = '<li class="three-col">应用名称</li><li class="three-col">关联模块</li>' +
            '<li class="three-col">操作</li>';
        ulheader.html(header);
        var container = $('.container');
        var content = "";
        //console.log('redraw application');
        for (var i = 0; i < data.length; ++i) {
            content += '<ul class="input-ul"><li class="three-col">' + data[i].name + '</li><li class="three-col">';
            for (var j = 0; j < data[i].modules.length; ++j) {
                content += data[i].modules[j].name + " ";
                //console.log(data[i].modules[j].name);
            }
            content += '</li>' +
                '<li class="three-col"><a href="javascript:void(0);" onclick="delApplication(' + data[i].id + ')">删除</a></li>' + '</ul>';
        }
        container.html(content);
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
                '<li class="three-col"><a href ="uploadMod.html?modId="' + data[i].id + '">编辑</a>&nbsp;<a href="javascript:void(0);" onclick="delAlg(' + data[i].id + ')">删除</a></li>' + '</ul>';
        }
        container.html(content);
    }

    function redrawAlgorithmTab(data) {
        var ulheader = $('#ul-header');
        var header = '<li class="four-col">算法名称</li><li class="four-col">主程序</li>' +
            '<li class="four-col">提交时间</li><li class="four-col">操作</li>'
        ulheader.html(header);
        var container = $('.container');
        var content = "";
        for (var i = 0; i < data.length; ++i) {
            content += '<ul class="input-ul"><li class="four-col">' + data[i].algorithm + '</li><li class="four-col">' + data[i].username + '</li><li class="four-col">' + data[i].postTime + '</li>' +
                '<li class="four-col"><a href="uploadAlg.html?algId="' + data[i].id + '">编辑</a>&nbsp;<a href="javascript:void(0);" onclick="delAlg(' + data[i].id + ')">删除</a></li>' + '</ul>'
        }
        container.html(content);
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
                algorithmId:algId,
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
function  delApplication(appId){
    console.log('delAlg:'+appId);
    if(confirm("确定要删除该应用吗？"))
    {
        $.ajax({
            url: hostUrl + "/manage/delApplication",
            type: "post",
            data: JSON.stringify({
                applicationId:appId,
                userId: currentUser.userId
            }),
            dataType: 'json',
            success: function (resp) {
                console.log(resp);
                if (resp.status == "0") {
                    //redrawModuleTab(resp.data);
                    alert('删除成功!');
                    refreshTab(2);
                }else {
                    alert('删除失败!');
                }
            }
        });
    }
}
function  delUser(userId){
    console.log('delUser:'+userId);
    if(confirm("确定要删除该用户吗？"))
    {
        $.ajax({
            url: hostUrl + "/manage/delUser",
            type: "post",
            data: JSON.stringify({
                delUserId:userId,
                userId: currentUser.userId
            }),
            dataType: 'json',
            success: function (resp) {
                console.log(resp);
                if (resp.status == "0") {
                    //redrawModuleTab(resp.data);
                    alert('删除成功!');
                    refreshTab(1);
                }else {
                    alert('删除失败!');
                }
            }
        });
    }
}