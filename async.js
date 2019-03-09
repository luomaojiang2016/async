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

async function Fn(){
    try{
        const value1 =await asyancFunc1();
        console.log(value1);
        const value2 =await asyancFunc2();
        console.log(value2);
        const value3 =await asyancFunc3();
        console.log(value3);
    }catch(error){
       console.log(error);
    }

}

Fn();