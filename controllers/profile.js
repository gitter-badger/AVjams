/**
 * Created by anonsmith on 2/3/2016.
 */
var _ = require('lodash');
var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var passport = require('passport');
var User = require('../models/User');


exports.getProfile = function (req, res, next) {
    var username = req.params.username;
    User.findOne({username: username}, function (err, profile) {
        if (err) {
            return next(err);
        } else {
            console.log(profile);
        }
        res.render('profile', {
            profile: profile
        });
    });
};