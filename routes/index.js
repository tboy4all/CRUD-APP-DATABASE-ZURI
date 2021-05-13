const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;    

const { user } = require('../models/user');
// Get All users
router.get('/api/users', (req, res) => {
    user.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});


// Add user
router.post('/api/user/add', (req, res) => {
    const emp = new user({
        name: req.body.name,
        email: req.body.email,
        country: req.body.country
    });
    emp.save((err, data) => {
        if(!err) {
          
            res.status(200).json({code: 200, message: 'User Added Successfully', addUser: data})
        } else {
           console.log(err);
        }
    });
});

// Update user
router.put('/api/user/update/:id', (req, res) => {
    const emp = {
        name: req.body.name,
        email: req.body.email,
        country: req.body.country
    };
    Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'User Updated Successfully', updateUser: data})
        } else {
            console.log(err);
        }
    });
});

// Delete user
router.delete('/api/user/:id', (req, res) => {
    Employee.findByIdAndRemove(req.params.id, (err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'user deleted', deleteUser: data})
        } else {
            console.log(err);
        }
    });
});

module.exports = router;