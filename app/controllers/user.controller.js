/** ALL ACCESS - PUBLIC CONTENT */
exports.allAccess = (req, res) => {
    res.status(200).send({
        code: 200,
        message: "Public Content.."
    });
};

/** USER ACCESS - USER CONTENT */
exports.userBoard = (req, res) => {
    res.status(200).send({
        code: 200,
        message: "User Content.."
    });
};

/** MODERATOR ACCESS - MODERATOR CONTENT */
exports.modBoard = (req, res) => {
    res.status(200).send({
        code: 200,
        message: "Moderator Content.."
    });
};

/** ADMINISTRATOR ACCESS - ADMIN CONTENT */
exports.adminBoard = (req, res) => {
    res.status(200).send({
        code: 200,
        message: "Administrator Content.."
    });
};
