 module.exports = ({ env }) => ({
   host: env('HOST', '0.0.0.0'),
   port: env.int('PORT', 1337),
 });

// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://admin:<Mathys56!>@cluster0.z4ozg.mongodb.net/charles-cantin?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
