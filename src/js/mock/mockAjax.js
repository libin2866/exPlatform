/**
 * Created by Libin on 2015/10/29.
 */

var hotsUrl ="";
Mock.mock( hotsUrl+"/module/getList", function (options) {
    var data ={"code":"200",
            "data":[
                {"id":"01",
                    "name":"ajax模块1",
                    "algorithms":[
                        {
                            "id":"123",
                            "name":"SVN"
                        },
                        {
                            "id":"124",
                            "name":"HOG"
                        }
                    ],
                    "resultUrl":"http://www.baidu.com"
                },
                {"id":"01",
                    "name":"ajax模块2",
                    "algorithms":[
                        {
                            "id":"123",
                            "name":"SVN"
                        },
                        {
                            "id":"124",
                            "name":"HOG"
                        }
                    ],
                    "resultUrl":"http://www.baidu.com"
                }
            ]
        };
    console.log(options);
    return data;
} );