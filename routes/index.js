var express = require('express');
var router = express.Router();
var moment = require('moment');
moment().format();

/* GET home page. */
router.get('/', function (req, res, next) {
   res.render('index', {
      title: 'Time-stamp'
   });
});


router.get('/:time', function (req, res, next) {
   if (req.params.time.toLowerCase() === 'favicon.ico') {
      next();
   }
   else {
     
      var finalDate = moment(req.params.time);

      if (finalDate.isValid() === true) {
         var obj = {
            unix: finalDate.unix(),
            normal: moment(finalDate).format('LL')
         }
      }
      else {
         var obj = {
            unix: null,
            normal: null
         };
      }
      res.json(obj);
   }
});

module.exports = router;
