const axios = require("axios");

const getAllTodos = async () => {
  try {
    return await axios.get("/api/todo/read");
  } catch (error) {
    console.error(error);
  }
};

const addTodo = async (taskText) => {
  try {
    return await axios.post("/api/todo/create", {
      task: taskText,
    });
  } catch (error) {
    console.error(error);
  }
};

const editTodo = async (taskText, taskId) => {
  try {
    return await axios.put(`/api/todo/update/${taskId}`, {
      task: taskText,
    });
  } catch (error) {
    console.error(error);
  }
};

export { getAllTodos, addTodo, editTodo };
