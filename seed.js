const Sequelize = require('sequelize');
const faker = require('faker');
const { username, password } = require('./config.js');

const sequelize = new Sequelize('player', username, password, {
  host: 'localhost',
  dialect: 'mysql',
});

// sequelize.query('CREATE DATABASE player;');

const Song = sequelize.define('songplayer', {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  songname: {
    type: Sequelize.STRING(100),
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
    type: Sequelize.INTEGER(14),
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
    type: Sequelize.INTEGER(11),
    allowNull: false,
  },
  comment: {
    type: Sequelize.STRING(200),
    allowNull: false,
  },
});


Song.sync({ force: true }).then(() => {
  const songs = [];
  for (let i = 1; i <= 100; i += 1) {
    let songMaker = Song.build({
      songname: faker.random.words(),
      artistname: faker.name.findName(),
      imgurl: `https://s3-us-west-1.amazonaws.com/songimages/photos/simg${i}.jpg`,
      hashtag: faker.random.words(),
      timeelapsed: faker.random.number(),
      starttime: 0,
      songlength: faker.random.number(),
      decibel: faker.random.number(),
      comment: faker.lorem.sentence(),
    }).save();
    console.log(songs.length);
    console.log(songMaker);
    songs.push(songMaker);
  }
  return Promise.all(songs);
})
  .catch(err => console.log(err));
