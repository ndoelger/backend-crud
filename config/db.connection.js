const mongoose = require('mongoose');
const {MONGODB_URI} = process.env

mongoose.connect(MONGODB_URI)

const db = mongoose.connection

mongoose.connection.on("connected", () => console.log("Your are connected to mongoose"))