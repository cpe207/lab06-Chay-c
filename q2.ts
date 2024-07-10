// const axios = require("axios");
import axios from "axios";

/* assign interface/type to the function definition properly */

interface UserProfile {
  id: number;
  name: string;
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface Todoresult {
  owner: string;
  title: string;
  completed: boolean;
}

  const getUser = async (userId: number): Promise<string> => {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
  
  try {
    const response = await axios.get<UserProfile>(url);
    const user = response.data;
    return user.name;
  } catch (error) {
    return 'INVALID USER ID';
  }
};

const getTodo = async (todoId: number): Promise<Todoresult | string> => {
  const url = `https://jsonplaceholder.typicode.com/todos/${todoId}`;

  try {
    const response = await axios.get<Todo>(url);
    const todo = response.data;
    
    const ownerName = await getUser(todo.userId);
    if (ownerName === 'INVALID USER ID') {
      return 'INVALID TODO ID';
    }

    return {
      owner: ownerName,
      title: todo.title,
      completed: todo.completed
    };
  } catch (error) {
    return 'INVALID TODO ID';
  }
};

// Test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

// Run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;
