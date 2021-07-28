const express = require('express');
const User = require('../modules/userModule');
const router = express.Router();


// create new user route

router.post('/api/user/new', async (req, res) => {
  const newUserDetails = {
    name: 'John',
    age: 25,
    email: 'john@gmail.com',
    password: 'codeacademy',
  };

  const newUser = new User(newUserDetails);

  try {
    const creatingNewUserResult = await newUser.save();
    res.json(creatingNewUserResult);
  } catch (err) {
    res.status(500).json(err)
  }

});



module.exports = router;