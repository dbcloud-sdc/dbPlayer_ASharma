const express = require('express');
const path = require('path');
const db = require('./db');
const cors = require('cors');
var morgan = require('morgan');
var bodyParser = require('body-parser');

const app = express();
app.use(morgan());
// use the body parser middleware to put the application/json post bodies onto req.body
app.use(bodyParser.json());

const port = 3002;

app.use(cors());
app.use('/song/:songId', express.static(path.join(__dirname, 'dist')));

//  querySong, updateSong, deleteSong, createSong, readComments, updateComment, deleteComment, createComment


app.route('/api/v0/song')
  // create song
  .post()
  // read list of songs
  .get()


app.route('/api/v0/song/:songId')
  // read single song
  .get()
  // update song
  .put()
  // delete song
  .delete()

app.route('/api/v0/song/:songId/comment')
  // create comment for song :songId
  .post()
  // read comments for song :songId
  .get()

app.route('/api/v0/song/:songId/comment/:commentId')
  // update a single comment
  .put()
  // delete a single comment
  .delete()



//deal with a song
app.route('/song/:songId/api/song_id')
  //get a particular song
  .get((req, res) => {
    db.querySong(req.params.songId)
      .then(rows => {
        res.statusCode = 200;
        res.send(rows);
      })
      .catch(err => {
        console.log(err);
        res.statusCode(400);
        res.send(err);
      })
  })
  //create a song
  .post((req, res) => {
    console.log(req.body);
    console.log(typeof req.body);
    db.createSong(req.body)
      .then(rows => {
        res.statusCode = 201;
        res.send(rows);
      })
      .catch(err => {
        console.log(err);
        res.statusCode(400);
        res.send(err);
      })
  })
  //update a song 
  .put((req, res) => {
    db.updateSong(req.body)
      .then(rows => {
        res.statusCode = 200;
        res.send(rows);
      })
      .catch(err => {
        console.log(err);
        res.statusCode(400);
        res.send(err);
      })
  })

  //delete a song
  .delete((req, res) => {
    db.deleteSong(req.params.songId)
      .then(rows => {
        res.statusCode = 200;
        res.send(rows);
      })
      .catch(err => {
        console.log(err);
        res.statusCode(400);
        res.send(err);
      })
  });

//get associated comments
app.route('/song/:songId/api/song_comment')
  //get all comments
  .get((req, res) => {
    console.log(req.params.songId)
    db.readComments(req.params.songId)
      .then(rows => {
        res.statusCode = 200;
        res.send(rows);
      })
      .catch(err => {
        console.log(err);
        res.statusCode(400);
        res.send(err);
      })
  })
  //create a comment
  .post((req, res) => {
    db.createComment(req.body)
      .then(rows => {
        res.statusCode = 200;
        res.send(rows);
      })
      .catch(err => {
        console.log(err);
        res.statusCode(400);
        res.send(err);
      })
  })

  //update a comment
  .put((req, res) => {
    db.updateComment(req.body)
      .then(rows => {
        res.statusCode = 200;
        res.send(rows);
      })
      .catch(err => {
        console.log(err);
        res.statusCode(400);
        res.send(err);
      })
  })
  //delete a comment
  .delete((req, res) => {
    db.deleteComment(req.body)
      .then(rows => {
        res.statusCode = 200;
        res.send(rows);
      })
      .catch(err => {
        console.log(err);
        res.statusCode = 400;
        res.send(err);
      })
  })

app.listen(port, () => {
  console.log(`listening on ${port}`);
});