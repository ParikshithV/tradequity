var express = require('express');
var SHA1 = require('sha1');
var connection = require('./config.js');
var app= express();

module.exports.login=function(req,res){
  var email= req.body.email;
  var password = req.body.password;
  var encrypted = SHA1(password);
  connection.query('SELECT * FROM userdetail_tB WHERE email = ?',[email], function (error, results, fields) {
  if (error) {
     console.log("error ocurred",error);
  }
  else{

          if(results.length >0)
          {


             if(results[0].password == encrypted)
               {
                return res.send("Successfully Login");
               }
              else
               {
                return res.send("Password incorrect");
               }
         }
  else
    {
    return res.send("Account does not exist");
    }
  }
  });
}
/*app.listen(4000,()=>{console.log('Listening on port 4000')
});*/