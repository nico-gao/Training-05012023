/**
 * JQuery - library
 * 1. DOM traversal, manipulation
 * 2. Event handling
 * 3. Ajax
 * library, framework
 * library: React, JQuery, axios
 * framework: Angular, Vue, Express
 */

// const button = document.querySelector("button.continue");
// button.innerHTML = "Next Step...";
// button.addEventListener("click", () => {
//   alert("hi");
// });

// $("button.continue")
//   .html("Next Step...")
//   .on("click", () => {
//     alert("hi");
//   });

// console.log($);
// console.log($("button.continue"));

// const $$ = function (selector) {
//   const element = document.querySelector(selector);
//   return {
//     html(innerHTML) {
//       element.innerHTML = innerHTML;
//       return this;
//     },
//     on(eventType, cb) {
//       element.addEventListener(eventType, cb);
//       return this;
//     },
//   };
// };

// const button = $$("button.continue")
//   .html("Next Step...")
//   .on("click", () => {
//     alert("hi");
//   });

//   const button1 = $$("button1");

// console.log(button === button1); // false;
// console.log(button.html === button1.html); // false

const $$ = function (selector) {
  class MyJQueryElement {
    constructor(selector) {
      const elements = document.querySelectorAll(selector);
      console.log(elements); // nodelist
      this.elements = elements;
    }
    html(innerHTML) {
      this.elements.forEach((element) => {
        element.innerHTML = innerHTML;
      });
      return this;
    }
    on(eventType, cb) {
      this.elements.forEach((element) => {
        element.addEventListener(eventType, cb);
      });
      return this;
    }
    show() {
      // this.element.style.display = "";

      this.elements.forEach((element) => {
        element.style.removeProperty("display");
      });

      return this;
    }
    hide() {
      this.elements.forEach((element) => {
        element.style.display = "none";
      });

      return this;
    }
  }
  return new MyJQueryElement(selector);
};

const button = $$("button.continue")
  .html("Next Step...")
  .on("click", () => {
    alert("hi");
  });

const box = $$(".box");
$$("#hide").on("click", () => {
  box.hide().show().hide();
});
$$("#show").on("click", () => {
  box.show().hide().show();
});

$$("button").html("button");

// console.log(button);
// console.log(button.html === button1.html); // true

// const obj = {
//   name: 'nicole',
//   html(){
//     return this;
//   },
//   on(){
//     return this
//   }
// }

// obj.html().on();
// obj.on();

// var hiddenBox = $( "#banner-message" );
// $( "#button-container button" ).on( "click", function( event ) {
//   hiddenBox.show();
// });

// ajax - a technique to send and get data from a server asynchronously
$.ajax({
  url: "/api/getWeather",
  data: {
    // query parameter
    zipcode: 97201,
  },
  success: function (result) {
    $("#weather-temp").html("<strong>" + result + "</strong> degrees");
  },
});
