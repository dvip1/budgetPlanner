const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

router.get('/', (req, res) => {
	if(req.isAuthenticated())res.redirect('/main');
	else
	res.render('register');
});
router.post('/', (req, res) => {
		const userData={
			email: req.body.email																																																	
		}
	User.register(userData, req.body.password, (err, user) => {
		if (err) {
			console.log(err);
			res.redirect('/register');
		} else {
			passport.authenticate('local')(req, res, function () {
				res.redirect('/main');
			});
		}
	});

});
module.exports = router;
