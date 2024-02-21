const jwt = require('jsonwebtoken');
const config = require('../config/auth.config');
const db = require('../models');
const User = db.user;
const Role = db.role;

verifyToken = (req, res, next) => {

    let token = req.session.token;

    if (!token) {

        return res.status(403).send({
            code: 403,
            message: "403 Forbidden, Not token provided!.."
        });
    }

    jwt.verify(token, config.secret, (err, decoded) => {

        if (err) {
            return res.status(401).send({
                code: 401,
                message: "401 Forbidden, Unauthorized!.."
            });
        }
        req.userId = decoded.id;

        next();
    });
};

isAdmin = (req, res, next) => {

    User.findById(req.userId).exec((err, user) => {

        if (err) {
            res.status(500).send({
                code: 500,
                message: "500, Unauthorized"
            });
            return;
        }

        Role.find({
            _id: {$in: user.roles},
        }, (err, roles) => {
            if (err) {
                res.status(500).send({
                    code: 500,
                    message: err
                });
                return;
            }

            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === 'admin') {
                    next();
                    return;
                }
            }

            res.status(403).send({
                code: 403,
                message: "403, Required Admin Role.."
            });

        });
    });
};

isModerator = (req, res, next) => {

    User.findById(req.userId).exec((err, user) => {

        if (err) {
            res.status(500).send({
                code: 500,
                message: err
            });
            return;
        }

        Role.find({
            _id: {$in: user.roles},

        }, (err, roles) => {

            if (err) {
                res.status(500).send({
                    code: 500,
                    message: err
                });
                return;
            }

            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "moderator") {
                    next();
                    return;
                }
            }

            res.status(403).send({
                code: 403,
                message: "403, Require Moderator Role!.."
            });

         });

    });
};

const authJwt = {
    verifyToken,
    isAdmin,
    isModerator
};

module.exports = authJwt;
