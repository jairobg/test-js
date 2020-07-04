// Set canvas
let c = document.getElementById("canvasSquare");
let cf = c.getContext("2d");


function drawLine(color="#ff0000", initial_x=0, initial_y=0, final_x=0, final_y=300) {
  cf.beginPath();
  cf.strokeStyle = color;
  cf.moveTo(initial_x, initial_y);
  cf.lineTo(final_x, final_y);
  cf.stroke();
  cf.closePath();
}

for (let i = 1; i < 300; i++) {
  let goingUp = i * 10;
  let goingDown = 300 - goingUp;
  drawLine("#ff0000",0,goingUp,goingUp,300);
  drawLine("#ff0000",goingUp,0,300,goingUp);
  drawLine("#ff0000",goingUp,300,300,goingDown);
  drawLine("#ff0000",0,goingUp,goingDown,0);
}




/* 
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
 */