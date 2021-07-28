import axios from 'axios';
const getAllUsersUrl = 'http://localhost:4000/api/users';
const createUserUrl = 'http://localhost:4000/api/user/new';
const editUserUrl  = 'http://localhost:4000/api/user/edit';
const deleteUserUrl = 'http://localhost:4000/api/user/delete';




export const getAllUsersData = async () => {
  try {
    const usersResult = await axios.get(getAllUsersUrl);
    return usersResult.data;
  } catch (err) {
    console.log(err);  
  }
};

export const createUser = async (detailsToCreateUser) => {
  try {
    const createResult = await axios.post(createUserUrl, detailsToCreateUser);
    return createResult.data;
  } catch (err) {
    console.log(err); 
  }
};

export const editUser = async (userId, detailsToEdit) => {
  try {
    const editResult = await axios.put(editUserUrl + '/' + userId, detailsToEdit);
    return editResult.data;
  } catch (err) {
    console.log(err); 
  }
};

export const deleteUser = async (userId) => {
  try {
    const deleteResult = await axios.delete(deleteUserUrl + '/' + userId);
    return deleteResult.data;
  } catch (err) {
    console.log(err);
  }
};
 

