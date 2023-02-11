const db = require('./connection');
const User = require('./user');
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
module.exports = {
    User,
    db
};