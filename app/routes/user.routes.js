const controller = require('../controllers/user.controller');
const { authJwt } = require("../middlewares");

module.exports = function (app) {

    /** HANDLE HEADERS */
    app.use(function (req, res, next) {
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, Content-Type, Accept'
        );

        next();
    });

    /** ACCESS PUBLIC CONTENT */
    app.get('/api/test/all', controller.allAccess);

    /** ACCESS USER CONTENT */
    app.get('/api/test/user', [ authJwt.verifyToken ], controller.userBoard);

    /** ACCESS MODERATOR CONTENT */
    app.get('/api/test/mod', [ authJwt.verifyToken, authJwt.isModerator ], controller.modBoard);

    /** ACCESS ADMIN CONTENT */
    app.get('/api/test/admin', [ authJwt.verifyToken, authJwt.isAdmin ], controller.adminBoard);

};
