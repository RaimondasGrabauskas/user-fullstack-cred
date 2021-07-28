const express = require('express');
const User = require('../modules/userModule');
const router = express.Router();


// create new user route

router.post('/api/user/new', async (req, res) => {
  const newUserDetails = {
    name: 'Arthur',
    age: 41,
    email: 'arthur@gmail.com',
    password: 'bestpassword',
  };

  const newUser = new User(newUserDetails);

  try {
    const creatingNewUserResult = await newUser.save();
    res.json(creatingNewUserResult);
  } catch (err) {
    res.status(500).json(err);
  }

});

// get all users

router.get('/api/users', async (req, res) => {
  try {
    const usersResult = await User.find();
    res.json(usersResult);
  } catch {
    res.status(500).json(err);
  }
});



module.exports = router;