/**
 * Created by Libin on 2015/9/9.
 */

var hostUrl ="/DistributedPlatForm";
$(function () {
    var container = $('.main-container');
    checkEdit();
    var currentUser;
    function newUserAction() {
        console.log('new');
        container.find('.new-user').on('click', function () {
            var values = {
                username: container.find('.username').val(),
                password: container.find('.password').val(),
                repass: container.find('.re-password').val(),
                companyInfo: container.find('.compinfo').val(),
                mobilePhone: container.find('.phone').val(),
                email: container.find('.email').val(),
            };
            //console.log(values);
            if (!values.username || !values.password || !values.repass || !values.companyInfo || !values.mobilePhone || !values.email) {
                container.find('.error-info').text('您还有信息未输入完全，请补充');
            }
            if (values.password != values.repass) {
                container.find('.error-info').text('两次输入密码不一致');
            }

            $.ajax({
                url:  hostUrl +"/user/UserServlet",
                type: "post",
                data: JSON.stringify(values),
                success: function (resp) {
                    console.log(resp);
                    var resp = JSON.parse(resp);
                    if (resp.status == '0') {
                        alert('注册成功!');
                        location.href = "../index.html";
                    } else {
                        alert("注册失败,请检查输入内容后重试!");
                        return;
                    }
                }
            })
        });
    }

    function editUserAction() {
        container.find('.edit-user').on('click', function () {
            var values = {
                userId: currentUser.userId,
                username: container.find('.username').val(),
                password: container.find('.password').val(),
                repass: container.find('.re-password').val(),
                companyInfo: container.find('.compinfo').val(),
                mobilePhone: container.find('.phone').val(),
                email: container.find('.email').val(),
            };
            //console.log(values);
            if (!values.username || !values.password || !values.repass || !values.companyInfo || !values.mobilePhone || !values.email) {
                container.find('.error-info').text('您还有信息未输入完全，请补充');
            }
            if (values.password != values.repass) {
                container.find('.error-info').text('两次输入密码不一致');
            }

            $.ajax({
                url: hostUrl + "/user/edit",
                type: "post",
                data: JSON.stringify(values),
                dataType:"json",
                success: function (resp) {
                    console.log(resp);
                    //var resp = JSON.parse(resp);
                    //console.log(resp);
                    if (resp.status == '0') {
                        currentUser.username=values.username;
                        currentUser.companyInfo=values.companyInfo;
                        currentUser.mobilePhone=values.mobilePhone;
                        currentUser.email=values.email;
                        localStorage.removeItem("userinfo");
                        localStorage.setItem("userinfo", JSON.stringify(currentUser));//存储用户信息到localstorage
                        alert('编辑成功!');
                        location.href = "../index.html";
                    } else {
                        alert("编辑失败,请检查输入内容后重试!" + resp.data);
                        return;
                    }
                }
            })
        });
    }


    function checkEdit() {
        console.log('check');
        console.log(window.location.href);
        var url = window.location.href,
            arg = url.split('?')[1];
        if (!arg) {
            newUserAction();
            return;
        }
        if (/(\?)userId=\d*/.test(url)) {
            arg = arg.split('=')[1];
            console.log(arg);
            if (!arg) {
                return;
            }

            if (currentUser = JSON.parse(window.localStorage.getItem('userinfo'))) {
                container.find('.username').val(currentUser.username);
                container.find('.compinfo').val(currentUser.companyInfo);
                container.find('.phone').val(currentUser.mobilePhone);
                container.find('.email').val(currentUser.email);
                var str = '<button class="purple-btn edit-user">确认编辑</button>';
                $("#control-area").html(str);
                editUserAction();
            }
            else {
                alert('请先注册或者登录后继续操作');
                window.location = "../index.html";
            }

        } else {
            newUserAction();
        }
    }

    container.find('.back-btn').on('click', function () {
        location.href = "../index.html";
    })
});