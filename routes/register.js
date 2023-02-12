const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

router.get('/', (req, res) => {
	res.render('register');
});
router.post('/', (req, res) => {
	User.register({ email: req.body.email }, req.body.password, (err, user) => {
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
