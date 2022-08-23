const { DataTypes, db } = require('../db');

const Film = db.define('film', {
    title: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    release_date: DataTypes.INTEGER
})

module.exports = {Film}

// completed!