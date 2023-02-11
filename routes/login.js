const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport= require('passport');
// const User = require('../models/user');

router.get('/', (req, res) => {
    res.render('login');
});
router.post('/', (req, res) => {
    let userName = req.body.email;
    let password = req.body.password;
    const user = new User({
        email: userName,
        password: password
    });
    req.login(user, (err) => {
        if (err) {
            console.log(err);
        } else {
            passport.authenticate('local')(req, res, function () {
                res.redirect('/main');
            });
        }
    });
});
module.exports = router;
