const axios = require("axios");

const getAllTodos = async () => {
  try {
    return await axios.get("/api/todo/read");
  } catch (error) {
    console.error(error);
  }
};

export { getAllTodos };
