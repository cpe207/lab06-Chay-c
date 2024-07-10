// const axios = require("axios");
import axios from 'axios';

interface UserProfile {
  id: number;
  name: string;
  username: string;

}

const getUser = async (userId: number): Promise<string> => {
  const link = `https://jsonplaceholder.typicode.com/users/${userId}`;
  
  try {
    const respon = await axios.get<UserProfile>(link);
    const user = respon.data;
    return `${user.name}`;
  } catch (error) {
    return 'INVALID USER ID';
  }
};

// Test case
const input1 = 1;
const input2 = 100;

// Run
getUser(input1).then((result) => console.log(result)); // Should log the name of the user with ID 1
getUser(input2).then((result) => console.log(result)); // Should log 'INVALID USER ID'

// Export the function
export default getUser;