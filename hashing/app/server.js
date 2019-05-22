'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();

fccTesting(app); //For FCC testing purposes

const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC -do not remove notes, place code between correct pair of notes.

const bcrypt = require('bcrypt');

bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => { 
bcrypt.compare(myPlaintextPassword, hash, (err, res) => { /*res == true or false*/ });
});

//END_ASYNC

//START_SYNC

/*
Hashing synchronously is just as easy to do but can cause lag 
if using it server side with a high cost or with hashing done 
very often. Hashing with this method is as easy as calling
*/
var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);

/*
Now to compare a password input with the new sync hash, you would use the compareSync method:
*/
var result = bcrypt.compareSync(myPlaintextPassword, hash);

//END_SYNC


app.listen(process.env.PORT || 3000, () => {});
