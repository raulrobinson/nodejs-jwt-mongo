const express = require('express');
const cors = require('cors');
const cookieSession = require('cookie-session');
const app = express();

require('dotenv').config();

/** CORS ORIGINS */
const corsOptions = {
    origin: process.env.URL_ORIGIN
};

app.use(cors(corsOptions));

/** PARSE REQUESTS OF CONTENT-TYPE - APPLICATION/JSON */
app.use(express.json());

/** PARSE REQUESTS OF CONTENT-TYPE - APPLICATION/X-WWW-FORM-URLENCODED */
app.use(express.urlencoded({extended: true}));

/** USE COOKIE FOR SESSION AUTHENTICATION */
app.use(
    cookieSession({
        name: "rasysbox-session",
        secret: "COOKIE_SECRET",
        httpOnly: true
    })
);

const db = require('./app/models');
const Role = db.role;

/** CONNECT TO DATABASE MONGO */
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Successfully connect to MongoDB..')
        initial();
    })
    .catch(err => {
        console.error('Connection error: ', err)
        process.exit()
    });

/** ROUTE FOR TEST */
app.get("/", (req, res) => {
    res.json({"code": 200, "message": "Welcome to RASYSBOX application.."});
});

/** ROUTING */
require('./app/routes/user.routes')(app);
require('./app/routes/auth.routes')(app);

/** SET PORT */
const PORT = process.env.PORT || 8080;

/** LISTEN FOR REQUEST */
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}..`);
});

/** VALIDATE ROLE ASSIGNMENT */
function initial() {

    Role.estimatedDocumentCount((err, count) => {

        if (!err && count === 0) {

            new Role({
                name: 'user'
            }).save(err => {

                if (err) {
                    console.log('Error: ', err);
                }
                console.log("Added 'user' to roles collection..");

            });

            new Role({
                name: 'moderator'
            }).save(error => {

                if (err) {
                    console.log('Error: ', err);
                    console.log("Added 'moderator' to roles collection..");
                }

            });

            new Role({
                name: 'admin'
            }).save(err => {

                if (err) {
                    console.log('Error: ', err)
                }

                console.log("Added 'admin' to roles collection..")

            });
        }
    });

}
