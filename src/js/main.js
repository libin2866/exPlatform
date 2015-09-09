/**
 * Created by Libin on 2015/9/8.
 */

$(function () {
    var container = $('.main-container');
    var rightContainer = container.find('.right-area');
    rightContainer.find('#registerBtn').on('click', function () {
        console.log('to register');
    });
    rightContainer.find('#loginBtn').on('click', function () {
        console.log('to login');
        console.log(this);
        console.log($(this));
        $(this);
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

        rightContainer.find('.login-area').hide();
        rightContainer.find('.info-area').fadeIn().css("display", "inline-block");

        bindSideBarEvents();


    });

    function bindSideBarEvents() {
        var sidebar = rightContainer.find('.right-side-bar');
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


    }


});