import axios from 'axios';
const getAllUsersUrl = 'http://localhost:4000/api/users';
const createUserUrl = 'http://localhost:4000/api/user/new';


export const getAllUsersData = async () => {
  try {
    const usersResult = await axios.get(getAllUsersUrl);
    return usersResult.data;
  } catch (err) {
    console.log(err);  
  }
};

export const createUser = async () => {
  try {
    const createResult = await axios.post(createUserUrl);
    return createResult.data;
  } catch (err) {
    console.log(err); 
  }
};
