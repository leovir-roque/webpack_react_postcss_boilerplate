var express = require('express');
var router = express.Router();
var watson = require('watson-developer-cloud');

var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var natural_language_understanding = new NaturalLanguageUnderstandingV1({
  'username': '64bd9021-fa19-4234-b32b-a74755a88ab8',
  'password': 'KoizkXzepgRT',
  'version_date': '2017-02-27'
});

router.post('/', function(req, res) {
  var data = req.body;
  var speech = [];
  var targets = [];

  for (i = 0; i < data.length; i++) {
    targets.push(data[i].text_entry);
    speech = targets.join();
  }

  var parameters = {
    'html': JSON.stringify(speech),
    'features': {
      'emotion': {}
    }
  };

  natural_language_understanding.analyze(parameters, function(err, response) {
    if (err)
      console.log('error:', err);
    else
      res.send(response);
  });
})

module.exports = router;
