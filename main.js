
const todos = [
  {
    id: 1,
    text: "Pay parents ensurance",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Search wife software",
    isCompleted: false,
  },
  {
    id: 3,
    text: "Buy groceries",
    isCompleted: false,
  },
];



todos.forEach(todo => console.log(todo.text));

const allTodosText = todos.map(function(todo){
    return todo.text
})
console.log(allTodosText);
 
