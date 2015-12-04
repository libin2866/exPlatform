/**
 * Created by Libin on 2015/10/29.
 */

var hostUrl = "/DistributedPlatForm";
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
            "userType": "0"//1:admin 0:user
        }
    };
    return data;
});

Mock.mock(hostUrl + "/getSystemInfo", function (options) {
    var data = {
        "status": "0",
        "data": {
            "cluster": "4",
            "cpu": "4",
            "disk": "999G",
            "diskUsage": "10%",
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
                    "name": "HOG检测90%不展示"
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

Mock.mock(hostUrl + "/getIndexPage", function (options) {
    console.log(options);
    var data = {
        "status": "0",
        "data": {
            "pageData": [
                {"id": "001", "name": "智能交通1", "type": "application"}, {
                    "id": "002",
                    "name": "智慧校园",
                    "type": "application"
                }, {"id": "002", "name": "反恐维稳", "type": "application"},
                {"id": "003", "name": "行人检测2", "type": "module"}, {
                    "id": "004",
                    "name": "车辆检测",
                    "type": "module"
                }, {"id": "005", "name": "图像分析", "type": "module"},
                {"id": "006", "name": "视频图像3", "type": "algorithm"}, {
                    "id": "007",
                    "name": "深度学习",
                    "type": "algorithm"
                }, {"id": "008", "name": "机器学习", "type": "algorithm"}
            ],
            "maxPage": "3"//返回最大页数
        }
    };
    return data;
});
Mock.mock(hostUrl + "/getGridData", function (options) {
    console.log(options);
    var data = {
        "status": "0",
        "data": {
            "moduleData": [{"id": "003", "name": "行人检测", "icon": "icon-url"}, {
                "id": "004",
                "name": "车辆检测",
                "icon": "icon-url"
            }, {"id": "005", "name": "图像分析", "icon": "icon-url"}]
        }
    };
    return data;

});
Mock.mock(hostUrl + "/getGridData2", function (options) {
    console.log(options);
    var data = {
        "status": "0",
        "data": {
            "algorithmData": [{"id": "003", "name": "行人检测2", "icon": "icon-url"}, {
                "id": "004",
                "name": "车辆检测1",
                "icon": "icon-url"
            }, {"id": "005", "name": "图像分析11", "icon": "icon-url"}]
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
 * 应用部分
 */
Mock.mock(hostUrl + "/application/getList", function () {
    var data = {
        " status ": "0",
        "data": [
            {
                "id": "01",
                "name": "应用1",
                "modules": [
                    {
                        "id": "123",
                        "name": "模块1"
                    },
                    {
                        "id": "124",
                        "name": "模块2"
                    }
                ],
                "resultUrl": "http://www.baidu.com"
            },
            {
                "id": "01",
                "name": "应用2",
                "modules": [
                    {
                        "id": "123",
                        "name": "模块1"
                    },
                    {
                        "id": "124",
                        "name": "模块2"
                    }
                ],
                "resultUrl": "http://www.baidu.com"
            }, {
                "id": "01",
                "name": "应用1",
                "modules": [
                    {
                        "id": "123",
                        "name": "模块1"
                    },
                    {
                        "id": "124",
                        "name": "模块2"
                    }
                ],
                "resultUrl": "http://www.baidu.com"
            }, {
                "id": "01",
                "name": "应用1",
                "modules": [
                    {
                        "id": "123",
                        "name": "模块1"
                    },
                    {
                        "id": "124",
                        "name": "模块2"
                    }
                ],
                "resultUrl": "http://www.baidu.com"
            }, {
                "id": "01",
                "name": "应用1",
                "modules": [
                    {
                        "id": "123",
                        "name": "模块1"
                    },
                    {
                        "id": "124",
                        "name": "模块2"
                    }
                ],
                "resultUrl": "http://www.baidu.com"
            }, {
                "id": "01",
                "name": "应用1",
                "modules": [
                    {
                        "id": "123",
                        "name": "模块1"
                    },
                    {
                        "id": "124",
                        "name": "模块2"
                    }
                ],
                "resultUrl": "http://www.baidu.com"
            }, {
                "id": "01",
                "name": "应用1",
                "modules": [
                    {
                        "id": "123",
                        "name": "模块1"
                    },
                    {
                        "id": "124",
                        "name": "模块2"
                    }
                ],
                "resultUrl": "http://www.baidu.com"
            }, {
                "id": "01",
                "name": "应用1",
                "modules": [
                    {
                        "id": "123",
                        "name": "模块1"
                    },
                    {
                        "id": "124",
                        "name": "模块2"
                    }
                ],
                "resultUrl": "http://www.baidu.com"
            }, {
                "id": "01",
                "name": "应用1",
                "modules": [
                    {
                        "id": "123",
                        "name": "模块1"
                    },
                    {
                        "id": "124",
                        "name": "模块2"
                    }
                ],
                "resultUrl": "http://www.baidu.com"
            }, {
                "id": "01",
                "name": "应用1",
                "modules": [
                    {
                        "id": "123",
                        "name": "模块1"
                    },
                    {
                        "id": "124",
                        "name": "模块2"
                    }
                ],
                "resultUrl": "http://www.baidu.com"
            }, {
                "id": "01",
                "name": "应用1",
                "modules": [
                    {
                        "id": "123",
                        "name": "模块1"
                    },
                    {
                        "id": "124",
                        "name": "模块2"
                    }
                ],
                "resultUrl": "http://www.baidu.com"
            }, {
                "id": "01",
                "name": "应用1",
                "modules": [
                    {
                        "id": "123",
                        "name": "模块1"
                    },
                    {
                        "id": "124",
                        "name": "模块2"
                    }
                ],
                "resultUrl": "http://www.baidu.com"
            }, {
                "id": "01",
                "name": "应用1",
                "modules": [
                    {
                        "id": "123",
                        "name": "模块1"
                    },
                    {
                        "id": "124",
                        "name": "模块2"
                    }
                ],
                "resultUrl": "http://www.baidu.com"
            },
        ]
    };
    return data;

});

/**
 * 算法部分
 */
Mock.mock(hostUrl + "/algorithm/getList", function () {
    var data = {
        " status ": "0",
        "data": [
            {
                "id": "01",
                "title": "SVN",
                "time": "2015-08-15 09:00",
                "username": " 测试",
                "downloadUrl": "http://www.baidu.com"
            },
            {
                "id": "01",
                "title": "HOG",
                "time": "2015-08-15 09:00",
                "username": "测试",
                "downloadUrl": "http://www.baidu.com"
            },
            {
                "id": "01",
                "title": "HOG",
                "time": "2015-08-15 09:00",
                "username": "测试",
                "downloadUrl": "http://www.baidu.com"
            },
            {
                "id": "01",
                "title": "HOG",
                "time": "2015-08-15 09:00",
                "username": "测试",
                "downloadUrl": "http://www.baidu.com"
            },
            {
                "id": "01",
                "title": "HOG",
                "time": "2015-08-15 09:00",
                "username": "测试",
                "downloadUrl": "http://www.baidu.com"
            },
            {
                "id": "01",
                "title": "HOG",
                "time": "2015-08-15 09:00",
                "username": "测试",
                "downloadUrl": "http://www.baidu.com"
            },
            {
                "id": "01",
                "title": "HOG",
                "time": "2015-08-15 09:00",
                "username": "测试",
                "downloadUrl": "http://www.baidu.com"
            },
            {
                "id": "01",
                "title": "HOG",
                "time": "2015-08-15 09:00",
                "username": "测试",
                "downloadUrl": "http://www.baidu.com"
            },
            {
                "id": "01",
                "title": "HOG",
                "time": "2015-08-15 09:00",
                "username": "测试",
                "downloadUrl": "http://www.baidu.com"
            },
            {
                "id": "01",
                "title": "HOG",
                "time": "2015-08-15 09:00",
                "username": "测试",
                "downloadUrl": "http://www.baidu.com"
            },
            {
                "id": "01",
                "title": "HOG",
                "time": "2015-08-15 09:00",
                "username": "测试",
                "downloadUrl": "http://www.baidu.com"
            },
            {
                "id": "01",
                "title": "HOG",
                "time": "2015-08-15 09:00",
                "username": "测试",
                "downloadUrl": "http://www.baidu.com"
            },
            {
                "id": "01",
                "title": "HOG",
                "time": "2015-08-15 09:00",
                "username": "测试",
                "downloadUrl": "http://www.baidu.com"
            },
            {
                "id": "01",
                "title": "HOG",
                "time": "2015-08-15 09:00",
                "username": "测试",
                "downloadUrl": "http://www.baidu.com"
            },
            {
                "id": "01",
                "title": "HOG",
                "time": "2015-08-15 09:00",
                "username": "测试",
                "downloadUrl": "http://www.baidu.com"
            },
            {
                "id": "01",
                "title": "HOG",
                "time": "2015-08-15 09:00",
                "username": "测试",
                "downloadUrl": "http://www.baidu.com"
            },
            {
                "id": "01",
                "title": "HOG",
                "time": "2015-08-15 09:00",
                "username": "测试",
                "downloadUrl": "http://www.baidu.com"
            }
        ]
    };
    return data;
});
Mock.mock(hostUrl + "/algorithm/addAlgorithm", function () {
    var data = {
        " status ": "0",
    };
    return data;
});
Mock.mock(hostUrl + "/algorithm/editAlgorithm", function () {
    var data = {
        " status ": "0",
    };
    return data;
});


/**
 *管理页面
 */
Mock.mock(hostUrl + "/manage/getUser", function (options) {
    var data = {
        "status": "0",
        "data": [
            {
                "id": "01",
                "username": "用户1",
                "algorithm": "算法2",
                "algorithmUrl": "http://www.baidu.com",
                "postTime": "2015-08-20 19：20：11"

            },
            {
                "id": "02",
                "username": "用户2",
                "algorithm": "算法3",
                "algorithmUrl": "http://www.baidu.com",
                "postTime": "2015-08-20 19：20：11"
            }
        ]
    };
    return data;
});

Mock.mock(hostUrl + "/manage/getApplication", function (options) {
    var data = {
        "status": "0",
        "data": [
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

Mock.mock(hostUrl + "/manage/getModule", function (options) {
    var data = {
        "status": "0",
        "data": [
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

Mock.mock(hostUrl + "/manage/getAlgorithm", function (options) {
    var data = {
        "status": "0",
        "data": [
            {
                "id": "01",
                "username": "用户1",
                "algorithm": "算法2",
                "algorithmUrl": "http://www.baidu.com",
                "postTime": "2015-08-20 19：20：11"

            },
            {
                "id": "02",
                "username": "用户2",
                "algorithm": "算法3",
                "algorithmUrl": "http://www.baidu.com",
                "postTime": "2015-08-20 19：20：11"
            }
        ]
    };
    return data;
});

Mock.mock(hostUrl + "/user/getModule", function (options) {
    var data = {
        "status": "0",
        "data": [
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

Mock.mock(hostUrl + "/user/getAlgorithm", function (options) {
    var data = {
        "status": "0",
        "data": [
            {
                "id": "01",
                "main": "Main",
                "algorithm": "算法2",
                "resultUrl": "http://www.baidu.com",
                "postTime": "2015-08-20 19：20：11"

            },
            {
                "id": "02",
                "main": "Main",
                "algorithm": "算法3",
                "resultUrl": "",
                "postTime": "2015-08-20 19：20：11"
            },
            {
                "id": "01",
                "main": "Main",
                "algorithm": "算法2",
                "resultUrl": "http://www.baidu.com",
                "postTime": "2015-08-20 19：20：11"

            },
            {
                "id": "02",
                "main": "Main",
                "algorithm": "算法3",
                "resultUrl": "",
                "postTime": "2015-08-20 19：20：11"
            }, {
                "id": "01",
                "main": "Main",
                "algorithm": "算法2",
                "resultUrl": "http://www.baidu.com",
                "postTime": "2015-08-20 19：20：11"

            },
            {
                "id": "02",
                "main": "Main",
                "algorithm": "算法3",
                "resultUrl": "",
                "postTime": "2015-08-20 19：20：11"
            }, {
                "id": "01",
                "main": "Main",
                "algorithm": "算法2",
                "resultUrl": "http://www.baidu.com",
                "postTime": "2015-08-20 19：20：11"

            },
            {
                "id": "02",
                "main": "Main",
                "algorithm": "算法3",
                "resultUrl": "",
                "postTime": "2015-08-20 19：20：11"
            }, {
                "id": "01",
                "main": "Main",
                "algorithm": "算法2",
                "resultUrl": "http://www.baidu.com",
                "postTime": "2015-08-20 19：20：11"

            },
            {
                "id": "02",
                "main": "Main",
                "algorithm": "算法3",
                "resultUrl": "",
                "postTime": "2015-08-20 19：20：11"
            }, {
                "id": "01",
                "main": "Main",
                "algorithm": "算法2",
                "resultUrl": "http://www.baidu.com",
                "postTime": "2015-08-20 19：20：11"

            },
            {
                "id": "02",
                "main": "Main",
                "algorithm": "算法3",
                "resultUrl": "",
                "postTime": "2015-08-20 19：20：11"
            }, {
                "id": "01",
                "main": "Main",
                "algorithm": "算法2",
                "resultUrl": "http://www.baidu.com",
                "postTime": "2015-08-20 19：20：11"

            },
            {
                "id": "02",
                "main": "Main",
                "algorithm": "算法3",
                "resultUrl": "",
                "postTime": "2015-08-20 19：20：11"
            }, {
                "id": "01",
                "main": "Main",
                "algorithm": "算法2",
                "resultUrl": "http://www.baidu.com",
                "postTime": "2015-08-20 19：20：11"

            },
            {
                "id": "02",
                "main": "Main",
                "algorithm": "算法3",
                "resultUrl": "",
                "postTime": "2015-08-20 19：20：11"
            }, {
                "id": "01",
                "main": "Main",
                "algorithm": "算法2",
                "resultUrl": "http://www.baidu.com",
                "postTime": "2015-08-20 19：20：11"

            },
            {
                "id": "02",
                "main": "Main",
                "algorithm": "算法3",
                "resultUrl": "",
                "postTime": "2015-08-20 19：20：11"
            }
        ]
    };
    return data;
});

Mock.mock(hostUrl + "/algorithm/getImg", function (options) {
    var data = {
        "status": "0",
        "data": {
            "imgList": [
                {
                    //"src": "http://image.dili360.com/nh/jcjx/2010/6_26253935_20101012134156.jpg",
                    "src": "http://pic.58pic.com/58pic/11/23/24/45q58PICHpA.jpg",
                },
                {
                    "src": "http://image.dili360.com/nh/jcjx/2010/6_26253935_20101012134156.jpg",
                    //"src": "http://pic.58pic.com/58pic/11/23/24/45q58PICHpA.jpg",
                },
            ],
            "title": "SVN算法"
        }
    };
    return data;
});

Mock.mock(hostUrl + "/task/getTask", function (options) {
    var data = {
        "status": "0",
        "data": [
            {
                "id": "01",
                "title": "Main",
                "status": "finish",
                "resultUrl": "http://www.baidu.com",
                "time": "2015-08-20 19：20：11"

            },
            {
                "id": "01",
                "title": "Main",
                "status": "finish",
                "resultUrl": "http://www.baidu.com",
                "time": "2015-08-20 19：20：11"

            },
        ]
    };
    return data;
});

Mock.mock(hostUrl + "/manage/toEditAlgorithm", function (options) {
    var data = {
        "status":"0",
        "data": {
            "name": "test",
            "content": "",//需要用文件上传 待定
            "className": "SVN",
            "modules": [
                {
                    "id": "123",
                    "name": "模块1"
                }
            ],
            "desc": "这个是描述"

        }
    };

        return data;
});

Mock.mock(hostUrl + "/manage/toEditModule", function (options) {
    var data = {
        "status": "0",//  成功：0  失败：1
        "data": {
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
            "mainClass":"TestClass",
            "moduleUrl": "http://www.baidu.com",
            "postTime": "2015-08-20 19：20：11",
            "desc":"test"
        }
    };
    return data;
});

Mock.mock(hostUrl + "/manage/delModule", function (options) {
    var data = {
        "status": "0",//  成功：0  失败：1
    };
    return data;
});

Mock.mock(hostUrl + "/manage/delAlgorithm", function (options) {
    var data = {
        "status": "0",//  成功：0  失败：1
    };
    return data;
});

Mock.mock(hostUrl + "/user/edit", function (options) {
    var data = {
        "status": "0",//  成功：0  失败：1
    };
    return data;
});