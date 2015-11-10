/**
 * Created by Libin on 2015/10/29.
 */

var hostUrl = "";
/**
 * Mock for index ajax
 */
Mock.mock(hostUrl + "/user/UserLoginServlet", function (options) {
    var data = {
        "status": "0",
        "data": {
            "userId": "0001",
            "username": "testAjax",
            "email": "test@fudan.edu.cn",
            "companyInfo": "Fudan University",
            "mobilePhone": "13700001234"
        }
    };
    return data;
});

Mock.mock(hostUrl + "/getSystemInfo", function (options) {
    var data = {
        "status": "0",
        "data": {
            "cpu": "4",
            "disk": "999G",
            "ram": "64G",
            "ramUsage": "50%",
            "userOnline": "10"
        }
    }
    return data;
})

Mock.mock(hostUrl + "/getTaskInfo", function (options) {
    var data = {
        "status": "0",
        "responseText": "错误信息",
        "data": {
            "running": [
                {
                    "id": "123",
                    "name": "HOG检测90%展示"
                },
                {
                    "id": "124",
                    "name": "svn检测90%展示"
                }
            ],
            "finished": [
                {
                    "id": "123",
                    "name": "SVN检测完成"
                },
                {
                    "id": "124",
                    "name": "HOG检测完成"
                }
            ]
        }
    }
    return data;
});

Mock.mock(hostUrl+"/", function (options) {

});
/**
 * mock Module
 */
Mock.mock(hostUrl + "/module/getList", function (options) {
    var data = {
        "code": "200",
        "data": [
            {
                "id": "01",
                "name": "ajax模块1",
                "algorithms": [
                    {
                        "id": "123",
                        "name": "SVN"
                    },
                    {
                        "id": "124",
                        "name": "HOG"
                    }
                ],
                "resultUrl": "http://www.baidu.com"
            },
            {
                "id": "01",
                "name": "ajax模块2",
                "algorithms": [
                    {
                        "id": "123",
                        "name": "SVN"
                    },
                    {
                        "id": "124",
                        "name": "HOG"
                    }
                ],
                "resultUrl": "http://www.baidu.com"
            }
        ]
    };
    console.log(options);
    return data;
});
