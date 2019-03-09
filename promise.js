const request = require('request');


function asyancFunc1() {
    return new Promise(function (resolve, reject) {

        request('https://nsl.lenovo.com.cn/task/taskcountfind', (error, response, body) => {

            if (!error && response.statusCode == 200) {
                resolve(body) // 请求成功的处理逻辑
            } else {
                reject(error);
            }
        });
    });
}
function asyancFunc2() {
    return new Promise(function (resolve, reject) {

        request('https://nsl.lenovo.com.cn/task/cityinfo', (error, response, body) => {

            if (!error && response.statusCode == 200) {
                resolve(body) // 请求成功的处理逻辑
            } else {
                reject(error);
            }
        });
    });
}

function asyancFunc3() {
    return new Promise((resolve, reject)=> {

      setTimeout(()=>{
        reject("执行完毕");
      },1000);
    });
}


asyancFunc1().then(
    function (value) {
        console.log(value);
        return asyancFunc2();
    }).then(function (value) {
        console.log(value);
        return asyancFunc3();
    }). then(function (value) {
        console.log(value);
    }).catch(function (error) {
        console.log(error);
    })

//