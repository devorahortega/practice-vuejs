/* global Vue , axios*/

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "This is the message!",
      todos: [],
      title: "" 
    };
  },
  created: function () {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
      console.log(response.data);
      this.todos = response.data;
    });
  },
  methods: {
    createTodo: function () {
      var params = { userId: 1, title: this.title, completed: false};
      axios.post("https://jsonplaceholder.typicode.com/todos", params).then(response) => {
        console.log(response.data);
        this.todos.push(response.data);
        this.title = ""
      });
    },
  },
});
