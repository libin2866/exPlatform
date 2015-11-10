/**
 * Created by Libin on 2015/9/8.
 */
var hotsUrl ="";
$(function () {
    var container = $('.main-container');
    var centerContainer = container.find('.icons-container');
    var rightContainer = container.find('.right-area');
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
        var loginData ={
            username:username,
            password:password
        }
        userLogin(loginData);
    });

    function userLogin(loginData){
        $.ajax({
            url:hotsUrl+"/user/UserLoginServlet",
            type:"post",
            data:JSON.stringify(loginData),
            dataType:'json',
            success:function (resp) {
                //console.log(resp);
                //updateModuleList(resp.data);
                if(resp.status==0){
                    rightContainer.find('#password').val("");
                    rightContainer.find('.login-area').hide();
                    rightContainer.find('.info-area').fadeIn("normal", bindSideBarEvents).css("display", "inline-block");
                    fillUserInfo(resp.data);
                }else{
                    rightContainer.find('.error-info').text("用户名或密码错误！");

                }
            }
        })
    }
    function fillUserInfo(data){
       var infoContainer = rightContainer.find(".person-content");
        infoContainer.find("#sys-user").html(data.username||"请重新登陆");
        infoContainer.find("#sys-email").html(data.email||"无");
        infoContainer.find("#sys-company").html(data.companyInfo||"无");
        infoContainer.find("#sys-mobile").html(data.mobilePhone||"无");
        localStorage.setItem("userinfo",JSON.stringify(data));//存储用户信息到localstorage
    }
    function fillSysInfo(userid){
        var infoContainer = rightContainer.find(".system-content");
        $.ajax({
            url:hotsUrl+"/getSystemInfo",
            type:"get",
            dataType:'json',
            success:function (resp) {
                console.log(resp);
                //updateModuleList(resp.data);
                var data=resp.data;
                if(resp.status==0){
                    infoContainer.find("#cpu-num").html(data.cpu);
                    infoContainer.find("#hd-num").html(data.dsik);
                    infoContainer.find("#ram-num").html(data.ram);
                    infoContainer.find("#ram-usage").html(data.ramUsage);
                    infoContainer.find("#online-num").html(data.userOnline);
                }

            }
        })

    }
    function fillTaskInfo(userid){
        var infoContainer = rightContainer.find(".task-content");

        $.ajax({
            url:hotsUrl+"/getTaskInfo",
            type:"get",
            data:JSON.stringify(),
            dataType:'json',
            success:function (resp) {
                console.log(resp);
                //updateModuleList(resp.data);
                var data=resp.data;
                if(resp.status==0){
                    var running = "";
                    var finished = "";
                    for(var i=0;i<resp.data.running.length;++i){
                        running+="<li>"+resp.data.running[i].name+"</li>";
                    }
                    for(i=0;i<resp.data.finished.length;++i){
                        finished+="<li>"+resp.data.finished[i].name+"</li>";
                    }
                    infoContainer.find("#running-task").html(running);
                    infoContainer.find("#finished-task").html(finished);
                }else{
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
        var tar = el.target||el.srcElement;
        if($(tar)[0].tagName =="SPAN"){
           var id =$(el.target).attr("data-id");
            console.log(id);
            showDialogue();
        }
    });

    $('.left-pointer').on('click', function (el) {
        var leftPageData = {col11:"test",col12:"test2",col3:"test3",
        col21:"test12",col22:"test22",col23:"test23",
            col31:"test31",col32:"test32",col33:"test33"
        }

    });
   function refreshPointPageData(data){
       var ul1 = $('.first-line');
       var tempPage1 ="";
       for(var i =0;i<3;++i){
           tempPage1+='<li><span data-id="'+data[i].id+'">'+data[i].name+'</span></li>';
       }
       ul1.html(tempPage1);
       var ul2 = $('.second-line');
       tempPage1="";
       for(i =0;i<3;++i){
           tempPage1+='<li><span data-id="'+data[i+3].id+'">'+data[i+3].name+'</span></li>';
       }
       ul2.html(tempPage1)
   }
    /**
     * 显示弹窗
     */
    function showDialogue(){
        //TODO 增加图标
        var icons = {
            data:[{
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
    function hideDialogue(){
        $(".white_overlay").fadeOut(200);
        $(".icons-container-pop").fadeOut(200);
    }

    /**
     * 生成弹窗的Icons
     * param:data
     */
    function createIcons(data){
        var iconBoxr=container.find(".icons-container-pop").find(".box");
        iconBoxr.html("");
        var items = "";
        for(var i=0;i<data.length;++i){
            items+='<div class="inner-cell"><div class="wrap"><i class="inner-icon"></i><p class="title">'
                +data[i].title+'</p></div></div>';
        }

    }

    /**
     * 界面最右边的tab切换
     */
    function bindSideBarEvents() {

        var sidebar = rightContainer.find('.right-side-bar');
        sidebar.prev().on('click', function () {
           console.log('to logout');

            rightContainer.find('.info-area').hide();
            rightContainer.find('.login-area').fadeIn();

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

    if(localStorage.getItem("userinfo")){
        var userinfo =localStorage.getItem("userinfo");
    }



});