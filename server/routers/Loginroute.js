const express = require("express");
const app = express();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = 'secretadmin123';
const User =require('../models/User')
const router = express.Router(); 
app.use(express.json());


router.post('/login', [
    body('email', 'invalidEmail').isEmail(),
    body('password', 'invalidPassword').isLength({ min: 6 })
  ]
    , async (req, res) => {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        console.log(errors);
        return res.status(400).json({ errors: errors.array() });
      }
      const { email } = req.body
      try {
        const userData = await User.findOne({ email })
        if (!userData) {
          return res.status(500).json({ errors: "NOT FOUND ( try another Email )" })
        }


        const isMatch = bcrypt.compare(req.body.password,userData.password);



        if (!isMatch) {
          return res.status(500).json({ errors: "Wrong Password" })
        }
        const data = {
          user: {
            id: userData.id,
            name: userData.user_name,
            email: userData.email,
            role: userData.role,
            constituency: userData.constituency
          }
        }
        const authToken = jwt.sign(data, secret)
        return res.status(201).json({ success: true, authToken: authToken,useremail:req.body })
      }
      catch (error) {
        // res.send(userData)
        console.log(error)
        return res.status(500).json(error)
      }
    })
    module.exports=router;
