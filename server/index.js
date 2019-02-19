const express = require('express');
const path = require('path');
const db = require('./db.js');
const cors = require('cors');

const app = express();
const PORT = 2222;

app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/song_id', (req, res) => {
  db.getAllSongs()
    .then((song) => {
      res.status(200).send(song);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.get('/api/song_img', (req, res) => {
  db.getSongImg()
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
