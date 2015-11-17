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
            "mobilePhone": "13700001234",
            "userType":"0"//1:admin 0:user
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

Mock.mock(hostUrl+"/getIndexPage", function (options) {
var data=
    {
        "status ":"0",
        "data":{
        "pageData":[
            {"id":"001","name":"智能交通"},{"id":"002","name":"智慧校园"},{"id":"002","name":"反恐维稳"},
            {"id":"003","name":"行人检测"},{"id":"004","name":"车辆检测"},{"id":"005","name":"图像分析"},
            {"id":"006","name":"视频图像"},{"id":"007","name":"深度学习"},{"id":"008","name":"机器学习"}
        ],
	    "maxPage":"3"//返回最大页数
        }
    };
return data;
});
/**
 * mock Module
 */
Mock.mock(hostUrl + "/module/getList", function (options) {
    var data = {
        "status": "0",
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


/**
 *管理页面
 */
Mock.mock(hostUrl+"/manage/getUser", function (options) {
    var data = {
        "status":"0",
        "data":[
            {"id":"01",
                "username":"用户1",
                "algorithm":"算法2",
                "algorithmUrl":"http://www.baidu.com",
                "postTime":"2015-08-20 19：20：11"

            },
            {"id":"02",
                "username":"用户2",
                "algorithm":"算法3",
                "algorithmUrl":"http://www.baidu.com",
                "postTime":"2015-08-20 19：20：11"
            }
        ]
    };
    return data;
});

Mock.mock(hostUrl+"/manage/getApplication", function (options) {
    var data = {
        "status":"0",
        "data":[
            {
                "id": "01",
                "name": "应用1",
                "modules": [
                    {
                        "id": "001",
                        "name": "模块1"
                    },
                    {
                        "id": "002",
                        "name": "模块2"
                    }
                ],
                "appUrl": "http://www.baidu.com",
                "postTime": "2015-08-20 19：20：11"
            },
            {
                "id": "02",
                "name": "应用2",
                "modules": [
                    {
                        "id": "002",
                        "name": "模块2"
                    },
                    {
                        "id": "003",
                        "name": "模块3"
                    }
                ],
                "appUrl": "http://www.baidu.com",
        "postTime": "2015-08-20 19：20：11"
    }]
    };
    return data;
});

Mock.mock(hostUrl+"/manage/getModule", function (options) {
    var data = {
        "status":"0",
        "data":[
            {
                "id": "01",
                "name": "模块1",
                "algorithms": [
                    {
                        "id": "001",
                        "name": "算法1"
                    },
                    {
                        "id": "002",
                        "name": "算法2"
                    }
                ],
                "moduleUrl": "http://www.baidu.com",
                "postTime": "2015-08-20 19：20：11"
            },
            {
                "id": "02",
                "name": "模块22",
                "algorithms": [
                    {
                        "id": "002",
                        "name": "算法2"
                    },
                    {
                        "id": "003",
                        "name": "算法3"
                    }

                ],
                "appUrl": "http://www.baidu.com",
                "postTime": "2015-08-20 19：20：11"
            }]
    };
    return data;
});

Mock.mock(hostUrl+"/manage/getAlgorithm", function (options) {
    var data = {
        "status":"0",
        "data":[
            {"id":"01",
                "username":"用户1",
                "algorithm":"算法2",
                "algorithmUrl":"http://www.baidu.com",
                "postTime":"2015-08-20 19：20：11"

            },
            {"id":"02",
                "username":"用户2",
                "algorithm":"算法3",
                "algorithmUrl":"http://www.baidu.com",
                "postTime":"2015-08-20 19：20：11"
            }
        ]
    };
    return data;
});

Mock.mock(hostUrl+"/user/getModule", function (options) {
    var data = {
        "status":"0",
        "data":[
            {
                "id": "01",
                "name": "模块1",
                "algorithms": [
                    {
                        "id": "001",
                        "name": "算法1"
                    },
                    {
                        "id": "002",
                        "name": "算法2"
                    }
                ],
                "moduleUrl": "http://www.baidu.com",
                "postTime": "2015-08-20 19：20：11"
            },
            {
                "id": "02",
                "name": "模块22",
                "algorithms": [
                    {
                        "id": "002",
                        "name": "算法2"
                    },
                    {
                        "id": "003",
                        "name": "算法3"
                    }

                ],
                "appUrl": "http://www.baidu.com",
                "postTime": "2015-08-20 19：20：11"
            }]
    };
    return data;
});

Mock.mock(hostUrl+"/user/getAlgorithm", function (options) {
    var data = {
        "status":"0",
        "data":[
            {"id":"01",
                "username":"用户1",
                "algorithm":"算法2",
                "algorithmUrl":"http://www.baidu.com",
                "postTime":"2015-08-20 19：20：11"

            },
            {"id":"02",
                "username":"用户2",
                "algorithm":"算法3",
                "algorithmUrl":"http://www.baidu.com",
                "postTime":"2015-08-20 19：20：11"
            }
        ]
    };
    return data;
});