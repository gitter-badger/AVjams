var User = require('../models/User');
/**
 * GET /
 * Home page.
 */
exports.index = function (req, res) {
    User.find(function (err, results) {
        if (err) {
            return err;
        } else {
            console.log(results[0]);
            res.render('home',
                {
                    title: 'Home',
                    user1: results[0],
                    user2: results[1]
                }
            );
        }
    });
};

exports.about = function(req,res,next){
  res.render('about')
};