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
      text: taskText,
    });
  } catch (error) {
    console.error(error);
  }
};

const editTodo = async (taskText, taskId) => {
  try {
    return await axios.put(`/api/todo/update/text/${taskId}`, {
      text: taskText,
    });
  } catch (error) {
    console.error(error);
  }
};

const editTodoStatus = async (taskStatus, taskId) => {
  try {
    return await axios.put(`/api/todo/update/status/${taskId}`, {
      status: taskStatus,
    });
  } catch (error) {
    console.error(error);
  }
};

const removeTodo = async (taskId) => {
  try {
    return await axios.delete(`/api/todo/delete/${taskId}`);
  } catch (error) {
    console.error(error);
  }
};

export { getAllTodos, addTodo, editTodo, editTodoStatus, removeTodo };
