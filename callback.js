//
const request = require('request');

function fn() {
    console.log(1);
}
setTimeout(fn, 1000);
const url = 'https://nsl.lenovo.com.cn/task/taskcountfind';
request(url, (error, response, body) => {

    if (!error && response.statusCode == 200) {
        console.log(body) // 请求成功的处理逻辑
    } else {
        console.log(error);
    }
});

//回调地狱
const url1 = 'https://nsl.lenovo.com.cn/task/taskcountfind';
const url2 = 'https://nsl.lenovo.com.cn/task/cityinfo';
request(url1, (error, response, body) => {
    const returnedTarget = {};
    if (!error && response.statusCode == 200) { 

        Object.assign(returnedTarget, body);
        request(url2, (error, response, body) => {

            if (!error && response.statusCode == 200) {

                Object.assign(returnedTarget, body);

                console.log(returnedTarget)

            } else {
                console.log(error);
            }
        });


    } else {
        console.log(error);
    }
});
