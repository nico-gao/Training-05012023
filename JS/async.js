//javascript single threaded language: cannot execute code concurrently
//memory management:
/* 
  stack memory: fixed size, primitive data, reference to non primitive data,
  heap memory: non-primitive data

  immutable

  primitive data: stored(passed) by value
    string
    number
    boolean
  non primitive data: stored(passed) by reference(pointer)
    object
    array
    function

  
  callstack: execution context 

  javascript runtime: browser, node

  async code: 
    setTimeout(), timer
    fetch(), wait for response

    browser: web api
    node: node api, fs


  event loop: 
    callstack: sync code
    => webapi
    => message queue 
    

*/

// console.log("hello world");//1
// setTimeout(()=>{
//   console.log("2s later!");//3
// },2000);
// console.log("finally");//2

/* 
  callstack: 
    line39

    line40
    line40 will be taken care by webapi

    line43

    2000ms later: callback will be moved to message queue

    line41

    end

    callstack will constantly check the message queue when it's empty
    take the callback from message queue back to callstack
    execute the callback synchronously
*/

// console.log(1);

// setTimeout(() => {
//   console.log(2);
// },1000);

// console.log(3);

// setTimeout(() => {
//   console.log(4)
// },0);

// console.log(5);

// //13542

// const start = performance.now()
// setTimeout(() => {
//   const end = performance.now()
//   console.log(end - start)
// },0);

// let i = 0;
// while(i < 1000000000){
//   i++;
// }

//var: function scope
//let: block

// for(let i = 0; i < 5; i++){
//   setTimeout(() => {
//     console.log(i)
//   },i*1000)
// }

//55555
//closure

// var i = 0;
// while(i < 5){
//   let j = i;
//   setTimeout(() => {
//     console.log(j)
//   }, j * 1000)
//   i++;
// }

// for (var i = 0; i < 5; i++) {
//     (() => {
//         var j = i
//         setTimeout(() => {
//             console.log(j);
//         }, j * 1000);
//     })();
// }

// const closure = (() => {
//   let count = 0;
//   const getCount = () => count
//   const increment = () => count++
//   return {
//     getCount,
//     increment
//   }
// })()

// closure.increment();
// console.log(closure.getCount());

//callback pattern

//setTimeout: function, 2 args: function, number(option);

// const onReceived = (response) => {
//   console.log(response)
// }

// const mockFetch = (cb) => {
//   setTimeout(()=>{
//     cb("data")
//   }, 1000)
// }

// mockFetch(onReceived);

// const mockFetch2 = (cb) => {
//   setTimeout(()=>{
//     cb("data")
//   }, 1000)
// }
// const mockFetch3 = (cb) => {
//   setTimeout(()=>{
//     cb("data")
//   }, 1000)
// }

// //callback hell
// mockFetch(()=>{
//   mockFetch2(()=>{
//     mockFetch3(()=>{
//       console.log(9)
//       mockFetch4(()=>{
//         mockFetch5(()=>{
//           mockFetch6(()=>{
//             mockFetch7();
//             console.log(2)
//           });
//           console.log(2)
//         });
//         console.log(2)
//       });
//       console.log(2)
//     });
//     console.log(2)
//   })
//   console.log(1)
// })

//Promise: class/constructor function
//instance: object

//method: function of a class, class method(prototype method) (instance method)
//static method: function can be called from constructor function/class,
//function:

// const person = {name:"adam"};
// const name = "name";
// person["name"];
// person[name];
// person.name
// /*
//   a.b: a is object
//   a[b]: a array/object, b is number/string
//   a(b): a function

// */

// const arr= [1,2,3];
// arr.forEach((item)=>{
//   console.log(item)
// })

// //reverse engineer
// class MyPromise {
//   constructor(cb){
//     const resolveFn = () => {

//     }

//     const rejectFn = () => {

//     }

//     cb(resolveFn, rejectFn);

//   }

//   then(onResolved, onRejected){
//     return this;
//   }

//   catch(onRejected){
//     return this
//   }
//   finally(onFinally){
//     return this
//   }

//   static resolve(){

//   }

//   static reject(){

//   }

// }

// const mockFetch = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("data");
//         }, 1000);
//     });
// };

// /*
//   then
//   catch
//   finally
// */
// mockFetch()
//     .then((data) => {
//         console.log("1", data);
//         return mockFetch();
//     })
//     .catch((err) => {
//         console.log("catch", err);
//     })
//     .then((data) => {
//         console.log("2", data);
//         throw Error("err");
//         //return mockFetch()
//     })
//     .finally(() => {
//         console.log("finally");
//     })
//     .then(
//         (data) => {
//             console.log("3", data);
//         },
//         (err) => {
//             console.log("catch2", err);
//         }
//     );

// console.log(1); //sync
// new Promise((res, rej) => {
//     console.log(2);//sync
//     setTimeout(() => {
//         console.log(3);
//         res("data1");
//         console.log(4);
//     }, 1000);
//     console.log(5);//sync
// }).then((data) => {
//     console.log(6, data);
//     return new Promise((res, rej) => {
//         console.log(7);
//         setTimeout(() => {
//             console.log(8);
//             res("data2");
//             console.log(9);
//         }, 1000);
//         console.log(10);
//     });
//     console.log(11);
// });
// console.log(12);//sync

// //message queue: micro queue, macro queue

// setTimeout(() => {
//   console.log("settimeout callback");//async
// },0);

// new Promise((res, rej) => {
//   res()
// }).then(() => {
//   console.log("promise callback");//async
// });

//fetch, axios based promise
//XMLHttpRequest(ajax: async javascript and xml)

const XHR = (url, cb) => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      cb(xhttp.response);
    }
  };
  xhttp.open("GET", url);
  xhttp.send();
};

XHR("https://jsonplaceholder.typicode.com/todos/1", (data) => {
  console.log(1, data);
  XHR("https://jsonplaceholder.typicode.com/todos/1", (data) => {
    console.log(2, data);
    XHR("https://jsonplaceholder.typicode.com/todos/1", (data) => {
      console.log(3, data);
      XHR("https://jsonplaceholder.typicode.com/todos/1", (data) => {
        console.log(4, data);
        XHR("https://jsonplaceholder.typicode.com/todos/1", (data) => {
          console.log(5, data);
        });
      });
    });
  });
});

//fetch, method, body, url

//implement myFetch method

//fetch function, 2 args,

/* 
  1, 2, 5, 12, 3, 4, 6 data1, 7, 10, 8, 9
*/
