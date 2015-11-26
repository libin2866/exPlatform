/**
 * Created by Libin on 2015/9/9.
 */

$(function () {
   var container =$('.main-container');
    container.find('.new-user').on('click', function () {
        var values = {
            username:container.find('.username').val(),
            password:container.find('.password').val(),
            repass:container.find('.re-password').val(),
            companyInfo:container.find('.compinfo').val(),
            mobilePhone:container.find('.phone').val(),
            email:container.find('.email').val(),
        }
        console.log(values);
        if(!values.username||!values.password||!values.repass||!values.companyInfo||!values.mobilePhone||!values.email){
            container.find('.error-info').text('您还有信息未输入完全，请补充');
        }
        if(values.password!=values.repass){
            container.find('.error-info').text('两次输入密码不一致');
        }

        $.ajax({
            url:"/javaweb/UserServlet",
            type:"post",
            data:JSON.stringify(values),
            success:function (resp) {
                console.log(resp);
                if(resp.status=='0'){
                    alert('注册成功!');
                    location.href="../index.html";
                }else{
                    alert("注册失败,请检查输入内容后重试!");
                    return;
                }
            }
        })
    });
    container.find('.back-btn').on('click', function () {
        location.href="../index.html";
    })
});