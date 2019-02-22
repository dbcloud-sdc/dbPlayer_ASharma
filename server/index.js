const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./db.js');

const app = express();
const PORT = 8081;

app.use(cors());
app.use('/song/:songId', express.static(path.join(__dirname, '../client/dist')));
app.use(express.static(path.join(__dirname, '../client/dist')));


app.get('/song/:songId/api/song_id', (req, res) => {
  const { songId } = req.params;
  db.getAllSongs(songId)
    .then((song) => {
      res.status(200).send(song);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.get('/song/:songId/api/song_img', (req, res) => {
  const { songId } = req.params;
  db.getSongImg(songId)
    .then((img) => {
      res.status(200).send(img);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.get('/song/:songId/api/song_url', (req, res) => {
  const { songId } = req.params;
  db.getSongUrl(songId)
    .then((img) => {
      res.status(200).send(img);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.get('/song/:songId/api/song_comment', (req, res) => {
  db.getAllComments()
    .then((song) => {
      res.status(200).send(song);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.get('/song/:songId/api/song_comment_img', (req, res) => {
  db.getSongCommentImgs()
    .then((img) => {
      res.status(200).send(img);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.listen(PORT, () => {
  console.log(`NOW LISTENING ON PORT ${PORT}`);
});
