/* global Vue */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      todos: [
        {
          userId: 1,
          id: 1,
          title: "Do the things",
          completed: false,
        },
        {
          userId: 1,
          id: 3,
          title: "Do the other things",
          completed: false,
        },
        {
          userId: 1,
          id: 2,
          title: "Do the more things",
          completed: false,
        },
      ],
    };
  },
  methods: {
    loadTodos: function () {},
  },
});
