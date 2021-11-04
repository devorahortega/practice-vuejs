/* global Vue*/

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      name: "Daeve",
      showInfo: false,
      fruits: ["apple", "orange", "banana"],
      newFruit: "",
    };
  },
  methods: {
    changeMessage: function () {
      this.message = "Whoa....";
    },
    addNewFruit: function () {
      this.fruits.push(this.newFruit);
      this.newFruit = "";
    },
  },
});
