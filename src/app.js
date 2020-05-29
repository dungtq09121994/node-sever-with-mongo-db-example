

 const config = require('./config');
 const app = require('./process')
  


const expressValidator  = require('express-validator');
// app.use(expressValidator);


// app.use()
  // start sever
 app.listen(config.port, () => {
        console.log("Sever started on port : "+config.port);
 })



