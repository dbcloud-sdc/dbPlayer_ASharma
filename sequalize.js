const Sequelize = require('sequelize');
const { username, password } = require('./config.js');

const sequelize = new Sequelize('Player', username, password, {
  host: 'localhost',
  dialect: 'mysql',
});

const Song = sequelize.define('song', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  song_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  artist_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  img_url: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  hash_tag: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  start_time: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  song_length: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
