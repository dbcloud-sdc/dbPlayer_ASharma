require('newrelic');

const express = require('express');

const app = express();
const PORT = 8081;
const router = express.Router();
const db = require('../server/db.js');
const Song = require('../server/db.js').Song;


// accept all requests following the :id/api prefix
router.use('/:id/api', (req, res, next) => {
  // acknowledge
  console.log('request received');
  next();
});

// //validate that the param in the url is valid (validation should be is finite, is a number, and possibly not negative or within a certain range (this last part is for later))
// router.param((param, idValidator) => {
//   return (req, res, next) => {
//     if (idValidator(val)) {
//       next();
//     }
//     else {
//       res.sendStatus(400);
//     }
//   }
// });

// validation - true if both conditions are met;
router.param('id', (candidateID) => {
  console.log('performing validation on parameter id');
  return !isNaN(parseFloat(candidate)) && isFinite(candidate);
});

router.route('/:id/api/song_id')
  .get((req, res, next) => {

  })
  .patch((req, res, next) => {

  })
  .post((req, res, next) => {

  })
  .delete((req, res, next) => {

  });

router.route(':id/api/song_url')
  .get((req, res, next) => {

  })
  .put((req, res, next) => {

  })
  .post((req, res, next) => {

  })
  .delete((req, res, next) => {

  });

router.route(':id/api/song_comment_img')

  .get((req, res, next) => {

  })
  .put((req, res, next) => {

  })
  .post((req, res, next) => {

  })
  .delete((req, res, next) => {

  });

router.route(':id/api/song_comment')

  .get((req, res, next) => {

  })
  .put((req, res, next) => {

  })
  .post((req, res, next) => {

  })
  .delete((req, res, next) => {

  });

app.use(router);
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
