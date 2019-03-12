const { Pool } = require('pg');
const { user, password } = require('./config.js');

const pool = new Pool({

  user: user,
  host: process.env.DB_HOST || '',
  database: 'player',
  password: password,
  port: process.env.DB_PORT || 5432
});

pool.on('error', (err, client) => {
  console.error('unexpected error', err)
  process.exit(-1)
})



const readASong = (songid) => {
  const query = 'SELECT * from song where id = $1';
  const params = [songid];
  return pool.connect()
    .then(client => {
      return client.query(query, params)
    })
    .then(res => {
      client.release();
      return res.rows;
    })
    .catch(e => {
      client.release()
      return e.stack;
    });
};

const createSong = (songdata) => {
  // destructure the songdata into its fields
  const { songname, artistname, aimgurl, hashtag, timeelapsed, thelength, decibel, songurl } = songdata;
  const query = 'insert into song(songname, artistname, aimgurl, hashtag, timeelapsed, thelength, decibel, songurl) values ($1, $2, $3, $4, $5, $6, $7, $8) returning id';
  return pool.connect()
    .then(client => {
      return client.query(query, [songname, artistname, aimgurl, hashtag, timeelapsed, thelength, decibel, songurl])
    })
    .then(res => {
      client.release()
      return res.rows;
    })
    .catch(err => {
      client.release();
      return err.stack;
    })
}

//cascade delete should handle the associated records deletion
const deleteSong = (songid) => {
  const query = 'delete from song where id = $1';
  const songidparam = [songid];
  return pool.connect()
    .then(client => {
      return client.query(query, [songid])
    })
    .then(res => {
      client.release();
      return res.rows;
    })
    .catch(e => {
      client.release();
      return e.stack;
    })
}


const updateSong = (songdata) => {
  // destructure song
  const { id, songname, artistname, aimgurl, hashtag, timeelapsed, thelength, decibel, songurl } = songdata;
  const query = 'update song set (songname, artistname, aimgurl, hashtag, timeelapsed, thelength, decibel, songurl) = ($2, $3, $4, $5, $6, $7, $8, $9) where id = $1';
  return pool.connect()
    .then(client => {
      client.query(query, [id, songname, artistname, aimgurl, hashtag, timeelapsed, thelength, decibel, songurl]);
    })
    .then(res => {
      client.release();
      return res.rows;
    })
    .catch(e => {
      client.release();
      return e.stack
    })
}


const createComment = (commentdata) => {
  const { songid, commentimage, comment, commenttime, username } = commentdata;
  const query = "insert into songcomment (songid, commentimage, comment, commenttime, username) values ($1, $2, $3, $4, $5) returning id";
  return pool.connect()
    .then(client => {
      return client.query(query, [songid, commentimage, comment, commenttime, username])
    })
    .then(resp => {
      client.release();
      return resp.rows;
    })
    //console.log(resp)

    .catch(e => {
      return e.stack
    })
}



const deleteComment = (commentid) => {
  const { id } = commentid
  //console.log(id)
  const query = "delete from songcomment where id = $1";
  const commid = [id];
  return pool.connect()
    .then(client => {
      return client.query(query, commid)
    })
    .then(resp => {
      client.release();
      return resp.rows
    })
    .catch(e => {
      client.release();

      return e.stack;
    })
}
const updateComment = (commentdata) => {
  var { id, songid, commentimage, comment, commenttime, username } = commentdata;
  const query = 'update songcomment set (songid, commentimage, comment, commenttime, username) = ($2, $3, $4, $5, $6) where id = $1';
  return pool.connect()
    .then(client => {
      client.release();
      return client.query(query, [id, songid, commentimage, comment, commenttime, username])
    })
    .catch(err => {
      client.release();
      return err.stack;
    })
}


const readComments = (songid) => {
  const query = "select * from songcomment where songid = $1"
  const songparam = [songid];
  return pool.connect()
    .then(client => {
      return client.query(query, songparam)
    })
    .then(resp => {
      client.release();

      return resp.rows;
    })
    .catch(err => {
      client.release()
      return err.stack;
    })
}

module.exports = {
  readASong, updateSong, deleteSong, createSong, readComments, updateComment, deleteComment, createComment
}
