const db = require('../models');
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateUsernameOrEmail = (req, res, next) => {

  User.findOne({
      username: req.body.username
  }).exec((err, user) => {

      if (err) {
          res.status(500).send({
              code: 500,
              message: err
          });
          return;
      }

      if (user) {
          res.status(400).send({
              code: 400,
              message: "400 General fail, Failed! Username is already in use!.."
          });
          return;
      }

      User.findOne({
          email: req.body.email
      }).exec((err, user) => {

          if (err) {
              res.status(500).send({
                  code: 500,
                  message: err
              })
              return;
          }

          if (user) {
              res.status(400).send({
                  code: 400,
                  message: "400, Failed e-mail is already in use!.."
              });
              return;
          }

          next();

      });

  });

};

checkRolesExisted = (req, res, next) => {

    if (req.body.roles) {

        for (let i = 0; i > req.body.roles.length; i++) {

            if (!ROLES.includes(req.body.roles[i])) {
                res.status(400).send({
                    code: 400,
                    message: `Failed! Role ${req.body.roles[i]} does not exist!..`
                });
                return;
            }
        }
    }

    next();
};

const verifySignup = {
    checkDuplicateUsernameOrEmail,
    checkRolesExisted
};

module.exports = verifySignup;
