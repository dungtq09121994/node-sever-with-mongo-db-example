const mongoose = require("mongoose");
const config   = require("../config");
const conn = mongoose.connection;
 mongoose.set('useCreateIndex', true);
 mongoose.connect(config.db_uri, { useNewUrlParser: true })
                        .then(() => {console.log("Connect database success!")})
                        .catch((err) => {console.log("Connect database exception : ", err)});

 
  conn.on('error', (err) => {
     console.log('DB connection error:', err.message);
  })

module.exports = conn;