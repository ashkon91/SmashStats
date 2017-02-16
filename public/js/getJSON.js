var data = require('../data.json')
module.exports = function(req,res){
    var body = data;
   
    res.status(200).send(body);
}
