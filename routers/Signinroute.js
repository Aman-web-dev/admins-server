const express = require("express");
const app = express();
app.use(express.json());
const { body, validationResult } = require('express-validator')
const router = express.Router();
const bcrypt = require('bcryptjs');
const User= require("../models/User")
const logger = require('./Logger')


router.post('/create', [
    body('user_name', 'Small user_name').isLength({ min: 4 }),
    body('email', 'enter a valid email').isEmail(),
    body('password', 'Small Password').isLength({ min: 5 })
  ],
  
    async (req, res) => {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        console.log(errors);
        return res.status(400).json({ errors: errors.array() });
      }
      const salt = await bcrypt.genSalt(10);
      let secPass = await bcrypt.hash(req.body.password, salt)
  
      try {
        const newUser = User.create({
          user_name: req.body.user_name,
          constituency: req.body.constituency,
          email: req.body.email,
          password: secPass,
          role:req.body.role
        })
        console.log(newUser);
        logger.log('info', `User Signed Up ${req.body.user_name}`);
        return res.status(201).json(newUser)
      } catch (error) {
        res.send(error)
        console.log(error);
        logger.log('error', `This is The Error  ${error}`);
        console.log(error).json(error)
      }
    })  
    
    module.exports=router;