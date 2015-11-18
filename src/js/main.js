/**
 * Created by Libin on 2015/9/8.
 */
var hostUrl = "";
$(function () {
    var container = $('.main-container');
    var centerContainer = container.find('.icons-container');
    var rightContainer = container.find('.right-area');
    var currentUser;
    checkLogin();

    function checkLogin() {
        if (currentUser = JSON.parse(window.localStorage.getItem('userinfo'))) {
            console.log(currentUser);
            rightContainer.find('.login-area').hide();
            rightContainer.find('.info-area').show("fast", bindSideBarEvents).css("display", "inline-block");
            fillUserInfo(currentUser);
        }
    }

    rightContainer.find('#registerBtn').on('click', function () {
        console.log('to register');
        location.href = './page/register.html';

    });
    rightContainer.find('#loginBtn').on('click', function () {
        var username = rightContainer.find('#username'),
            password = rightContainer.find('#password');
        if (!username.val()) {
            rightContainer.find('.error-info').text("请输入用户名！");
            return;
        }
        if (!password.val()) {
            rightContainer.find('.error-info').text("请输入密码！");
            return;
        }
        var loginData = {
            username: username,
            password: password
        };
        userLogin(loginData);
    });


    function userLogin(loginData) {
        $.ajax({
            url: hostUrl + "/user/UserLoginServlet",
            type: "post",
            data: JSON.stringify(loginData),
            dataType: 'json',
            success: function (resp) {
                //console.log(resp);
                //updateModuleList(resp.data);
                if (resp.status == 0) {
                    rightContainer.find('#password').val("");
                    rightContainer.find('.login-area').hide();
                    rightContainer.find('.info-area').fadeIn("normal", bindSideBarEvents).css("display", "inline-block");
                    fillUserInfo(resp.data);
                } else {
                    rightContainer.find('.error-info').text("用户名或密码错误！");
                }
            }
        })
    }

    function fillUserInfo(data) {
        var infoContainer = rightContainer.find(".person-content");
        infoContainer.find("#sys-user").html(data.username || "请重新登陆");
        infoContainer.find("#sys-email").html(data.email || "无");
        infoContainer.find("#sys-company").html(data.companyInfo || "无");
        infoContainer.find("#sys-mobile").html(data.mobilePhone || "无");
        localStorage.setItem("userinfo", JSON.stringify(data));//存储用户信息到localstorage
        infoContainer.find('.edit-info').on('click', function () {
            if(data.userType=="1"){
                window.location = './page/managePage.html';
            }else{
                window.location = './page/userDetail.html';
            }

        })
    }

    function fillSysInfo(userid) {
        var infoContainer = rightContainer.find(".system-content");
        $.ajax({
            url: hostUrl + "/getSystemInfo",
            type: "post",
            dataType: 'json',
            success: function (resp) {
                console.log(resp);
                //updateModuleList(resp.data);
                var data = resp.data;
                if (resp.status == 0) {
                    infoContainer.find("#cpu-num").html(data.cpu);
                    infoContainer.find("#hd-num").html(data.dsik);
                    infoContainer.find("#ram-num").html(data.ram);
                    infoContainer.find("#ram-usage").html(data.ramUsage);
                    infoContainer.find("#online-num").html(data.userOnline);
                }

            }
        })

    }

    function fillTaskInfo(userid) {
        var infoContainer = rightContainer.find(".task-content");

        $.ajax({
            url: hostUrl + "/getTaskInfo",
            type: "get",
            data: JSON.stringify(),
            dataType: 'json',
            success: function (resp) {
                console.log(resp);
                //updateModuleList(resp.data);
                var data = resp.data;
                if (resp.status == 0) {
                    var running = "";
                    var finished = "";
                    for (var i = 0; i < resp.data.running.length; ++i) {
                        running += "<li>" + resp.data.running[i].name + "</li>";
                    }
                    for (i = 0; i < resp.data.finished.length; ++i) {
                        finished += "<li>" + resp.data.finished[i].name + "</li>";
                    }
                    infoContainer.find("#running-task").html(running);
                    infoContainer.find("#finished-task").html(finished);
                } else {
                    console.log('get info error');
                }

            }
        })
    }

    /**
     * 中间图标区域的点击处理
     */
    centerContainer.on('click', function (el) {
        //console.log(el);
        // console.log(el.target);
        // console.log($(el.target)[0].tagName);
        // console.log(el.target.tagName);
        var tar = el.target || el.srcElement;
        if ($(tar)[0].tagName == "SPAN") {
            var id = $(el.target).attr("data-id");
            console.log(id);
            showDialogue(id);
        }
    });

    var currentPage=1;
    var maxpage=2;

    $('.left-pointer').on('click', function (el) {
        var leftPageData = [
            {id:'001',name:'test1'}, {id:'002',name:'test2'}, {id:'003',name:'test3'},
            {id:'004',name:'test4'}, {id:'005',name:'test5'}, {id:'006',name:'test6'},
            {id:'007',name:'test7'}, {id:'008',name:'test8'}, {id:'009',name:'test9'}
        ];
        if(currentPage>0){
            currentPage--;
        }
         getPageData(currentPage);
        //refreshPointPageData(leftPageData);
    });
    $('.right-pointer').on('click', function (el) {
        var leftPageData = [
            {id:'001',name:'1test1'}, {id:'002',name:'1test2'}, {id:'003',name:'1test3'},
            {id:'004',name:'1test4'}, {id:'005',name:'1test5'}, {id:'006',name:'1test6'},
            {id:'007',name:'1test7'}, {id:'008',name:'1test8'}, {id:'009',name:'1test9'}
        ];
        if(currentPage>=maxpage){
            currentPage=maxpage;
        }
        getPageData(currentPage);
        //refreshPointPageData(leftPageData);
    });

    function  getPageData(page){
        $.ajax({
            url: hostUrl +"/getIndexPage",
            type:"post",
            data:JSON.stringify({
                current:page
            }),
            dataType: 'json',
            success: function (resp) {
                console.log(resp);
                if(resp.status=="0"){
                    //console.log(resp.data);
                    maxpage = resp.data.maxPage;
                    refreshPointPageData(resp.data.pageData);
                }
            }
            }
        );
    }


    function refreshPointPageData(data) {
        console.log(data);
        var ul1 = $('.first-line');
        var tempPage1 = "";
        for (var i = 0; i < 3; ++i) {
            tempPage1 += '<li><span data-id="' + data[i].id + '">' + data[i].name + '</span></li>';
        }
        ul1.html(tempPage1);
        var ul2 = $('.second-line');
        tempPage1 = "";
        for (i = 0; i < 3; ++i) {
            tempPage1 += '<li><span data-id="' + data[i + 3].id + '">' + data[i + 3].name + '</span></li>';
        }
        ul2.html(tempPage1)
        var ul3 = $('.third-line');
        tempPage1 = "";
        for (i = 0; i < 3; ++i) {
            tempPage1 += '<li><span data-id="' + data[i + 6].id + '">' + data[i + 6].name + '</span></li>';
        }
        ul3.html(tempPage1)
    }

    /**
     * 显示弹窗
     */
    function showDialogue(id) {
        //TODO 增加图标

        console.log(id);
        var icons = {
            data: [{
                "title": "测试名字",
                "icon": "icon",//url?
                "url": "javascript:"
            }]
        };
        $(".white_overlay").fadeIn(300).on("click", function () {
            hideDialogue();
        });
        $(".icons-container-pop").fadeIn(300);
    }

    function hideDialogue() {
        $(".white_overlay").fadeOut(200);
        $(".icons-container-pop").fadeOut(200);
    }

    /**
     * 生成弹窗的Icons
     * param:data
     */
    function createIcons(data) {
        var iconBoxr = container.find(".icons-container-pop").find(".box");
        iconBoxr.html("");
        var items = "";
        for (var i = 0; i < data.length; ++i) {
            items += '<div class="inner-cell"><div class="wrap"><i class="inner-icon"></i><p class="title">'
                + data[i].title + '</p></div></div>';
        }

    }

    /**
     * 界面最右边的tab切换
     */
    function bindSideBarEvents() {

        var sidebar = rightContainer.find('.right-side-bar');
        sidebar.prev().on('click', function () {
            //console.log('to logout');
            rightContainer.find('.info-area').hide();
            rightContainer.find('.login-area').fadeIn();
            window.localStorage.clear();

        });
        sidebar.find('.person-info').on('click', function () {
            if ($(this).hasClass('current')) {
                return;
            } else {
                $(this).addClass('current');
                $(this).parent().find('.system-info').removeClass('current');
                $(this).parent().find('.task-info').removeClass('current');
                console.log(rightContainer);
                rightContainer.find('.system-content').hide();
                rightContainer.find('.task-content').hide();
                rightContainer.find('.person-content').fadeIn().css("display", "inline-block");
            }
        })

        sidebar.find('.system-info').on('click', function () {
            if ($(this).hasClass('current')) {
                return;
            } else {
                $(this).addClass('current');
                $(this).parent().find('.person-info').removeClass('current');
                $(this).parent().find('.task-info').removeClass('current');
                rightContainer.find('.person-content').hide();
                rightContainer.find('.task-content').hide();
                rightContainer.find('.system-content').fadeIn().css("display", "inline-block");
                fillSysInfo();
            }
        })
        sidebar.find('.task-info').on('click', function () {
            if ($(this).hasClass('current')) {
                return;
            } else {
                $(this).addClass('current');
                $(this).parent().find('.person-info').removeClass('current');
                $(this).parent().find('.system-info').removeClass('current');
                rightContainer.find('.person-content').hide();
                rightContainer.find('.system-content').hide();
                rightContainer.find('.task-content').fadeIn().css("display", "inline-block");
                fillTaskInfo();
            }
        })


    }//bindSideEvents

    var leftNavi =$('.left-navi');
    console.log(leftNavi.find('li'));
    leftNavi.find('li').eq(0).on('click', function () {
        if(currentUser){
            window.location="./page/application.html";
        }else{
            alert('请先登录或者注册!');
        }
    });
    leftNavi.find('li').eq(1).on('click', function () {
        if(currentUser){
            window.location="./page/module.html";
        }else{
            alert('请先登录或者注册!');
        }
    });
    leftNavi.find('li').eq(2).on('click', function () {
        console.log(currentUser);
        if(currentUser){
            window.location="./page/algorithm.html";
        }else{
            alert('请先登录或者注册!');
        }
    });

    //if (localStorage.getItem("userinfo")) {
    //    var userinfo = localStorage.getItem("userinfo");
    //}

});