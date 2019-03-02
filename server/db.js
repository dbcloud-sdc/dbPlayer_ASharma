const Sequelize = require('sequelize');
// const Seed = require('../seed.js');
const { username, password } = require('../config.js');


const sequelize = new Sequelize('player', username, password, {
  host: 'localhost',
  dialect: 'mysql',
});

const Song = sequelize.define('songplayer', {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  songname: {
    type: Sequelize.STRING(200),
    allowNull: false,
  },
  artistname: {
    type: Sequelize.STRING(32),
    allowNull: false,
  },
  imgurl: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  hashtag: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  timeelapsed: {
    type: Sequelize.DATE(),
    allowNull: false,
  },
  starttime: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
  },
  songlength: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
  },
  decibel: {
    type: Sequelize.INTEGER(3),
    allowNull: false,
  },
  comment: {
    type: Sequelize.STRING(200),
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING(32),
    allowNull: false,
  },
  songurl: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  commentimage: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
});
// get requests

const getAllSongs = songid => Song.findAll({
  where: {
    id: songid,
  },
});

const getSongImg = songid => Song.findAll({
  attributes: ['imgurl'],
  where: {
    id: songid,
  },
});

const getSongUrl = songid => Song.findAll({
  attributes: ['songurl'],
  where: {
    id: songid,
  },
});

const getAllComments = () => Song.findAll({
});

const getSongCommentImgs = () => Song.findAll({
  attributes: ['commentimage'],
});

// // patch

// const modifySong = (informationToUpdate, songid) => Song.findAll({
//   informationToUpdate,
//   where: {
//     id: songid,
//   },
// });

// // post


//

module.exports = {
  Song, getAllSongs, getSongImg, getAllComments, getSongCommentImgs, getSongUrl,
};
