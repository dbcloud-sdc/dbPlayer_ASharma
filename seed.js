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
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  songname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  artistname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imgurl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  hashtag: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  timeelapsed: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  starttime: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  songlength: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  decibel: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  comment: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});


Song.sync({ force: true }).then(() => {
  const songs = [];
  for (let i = 1; i < 101; i + 1) {
    const songMaker = Song.build({
      songname: faker.random.words(),
      artistname: faker.name.findName(),
      imgurl: `https://s3-us-west-1.amazonaws.com/songimages/photos/simg${i}.jpg`,
      hashtag: faker.random.words(),
      timeelapsed: faker.date.past(),
      starttime: 0,
      songlength: faker.random.number(),
      decibel: faker.random.number(),
      comment: faker.lorem.sentence(),
    }).save();
    songs.push(songMaker);
  }
  return Promise.all(songs);
})
  .catch(err => console.log(err));
