/* global Vue */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      name: "Daeve",
      showInfo: false,
    };
  },
  methods: {
    changeMessage: function () {
      this.message = "Hello";
    },
  },
});

var app2 = new Vue({
  el: "#app-2",
  data: {
    message: "You loaded this page on " + new Date().toLocaleString(),
  },
});

var app3 = new Vue({
  el: "#app-3",
  data: {
    seen: true,
  },
});

var app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [{ text: "Learn JavaScript" }, { text: "Learn Vue" }, { text: "Build something awesome" }],
  },
});

var app5 = new Vue({
  el: "#app-5",
  data: {
    message: "Hello Vue.js!",
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
  },
});

var app6 = new Vue({
  el: "#app-6",
  data: {
    message: "Hello Vue!",
  },
});

var app7 = new Vue({
  el: "#app-7",
  data: {
    message: "Click this button!",
  },
  methods: {
    changeMessage: function () {
      this.message = "This is the message!";
    },
  },
});

var app8 = new Vue({
  el: "#app-8",
  data: {
    message: "Hello Vue!",
  },
});

var app9 = new Vue({
  el: "#app-9",
  data: {
    message: "Hello Vue!",
  },
});
