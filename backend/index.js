const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const Datastore = require('nedb'),
  db = new Datastore({
    filename: 'db.json',
    autoload: true
  });

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.get('/', function (req, res) {
  db.find({}, {}, (err, docs) => {
    res.status(200).send(docs);
  });
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!')
});