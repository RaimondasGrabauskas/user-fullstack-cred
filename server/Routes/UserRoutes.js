const express = require('express');
const User = require('../modules/userModule');
const router = express.Router();


// create new user route

router.post('/api/user/new', async (req, res) => {

  const newUserDetails = req.body;
  console.log('newUserDetails', newUserDetails);
  
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

router.put('/api/user/edit/:id', async (req, res) => {
  const userId = req.params.id;
  const detailsToEdit = req.body;

  try {
    const updateResult = await User.findByIdAndUpdate(userId, detailsToEdit);
    res.json(updateResult);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;