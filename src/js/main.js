/**
 * Created by Libin on 2015/9/8.
 */

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
        rightContainer.find('#password').val("");
        rightContainer.find('.login-area').hide();
        rightContainer.find('.info-area').fadeIn("normal", bindSideBarEvents).css("display", "inline-block");
    });
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

    function showDialogue(){
        $(".white_overlay").fadeIn(300).on("click", function () {
            hideDialogue();
        });
        $(".icons-container-pop").fadeIn(300);
    }
    function hideDialogue(){
        $(".white_overlay").fadeOut(200);
        $(".icons-container-pop").fadeOut(200);
    }

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
            }
        })


    }//bindSideEvents






});