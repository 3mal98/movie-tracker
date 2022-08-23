const { DataTypes, db } = require('../db');

const User = db.define('user', {
    username: DataTypes.STRING,
    joined: DataTypes.INTEGER
});

module.exports = {User}

// completed!