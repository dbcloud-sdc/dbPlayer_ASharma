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
});

const getAllSongs = () => {
  return Song.findAll();
};

const getSongImg = () => {
  return Song.findAll({
    attributes: ['imgurl'],
  });
};

module.exports = {
  getAllSongs, getSongImg,
};
