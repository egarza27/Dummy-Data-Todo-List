let inputUserId = document.getElementById("userId");

let arrayOfTodos = [
  {
    userId: 14,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 20,
    id: 2,
    title: "delectus aut autem",
    completed: false,
  },
];

const fetchTodos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((response) => response.json())
    .then((json) => (arrayOfTodos = json));
};

const filterByUserId = (arr) => {
  // console.log(inputUserId.value)
  // console.log(typeof inputUserId.value)
  // console.log(arr)
  const filteredUsers = arr.filter((item) => {
    // console.log(item.completed)
    return item.userId === +inputUserId.value;
  });
  console.log(filteredUsers);
  arrayOfTodos = filteredUsers;
};

const filterComplete = (arr) => {
  const todoListComplete = document.getElementById("todo-list");
  todoListComplete.innerHTML = "";
  const filteredComplete = arr.filter((item) => {
    return item.completed === true;
  });
  console.log(filteredComplete);
  populateTodos(filteredComplete);
};

const filterNotComplete = (arr) => {
  const todoListNotComplete = document.getElementById("todo-list");
  todoListNotComplete.innerHTML = "";
  const filteredNotComplete = arr.filter((item) => {
    return item.completed === false;
  });
  console.log(filteredNotComplete);
  populateTodos(filteredNotComplete);
};

const logTodos = (arr) => {
  console.log(arrayOfTodos);
};

const populateTodos = (arr) => {
  document.getElementById("todo-list").innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    const list = document.getElementById("todo-list");
    const task = document.createElement("li");
    task.appendChild(document.createTextNode(arrayOfTodos[i].title));
    list.appendChild(task);
  }
};

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  filterByUserId(arrayOfTodos);
});
