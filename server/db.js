const { Pool, Client } = require('pg');

const pool = new Pool({

  user: 'moo',
  host: '',
  database: 'player',
  password: '',
  port: 5432

});

pool.on('error', (err, client) => {
  console.error('unexpected error', err)
  process.exit(-1)
})

const querySong = (songid) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * from song where id = $1';
    const params = [songid];
    var runQuery = async function () {
      const client = await pool.connect(); //return a connection 
      try {
        const res = await client.query(query, params); //setting res = to result of client.quert
        resolve(res.rows);
      } finally {
        client.release();
      }
    };
    runQuery()
      .catch(e => {
        reject(e.stack);
      });
  });
};


const createSong = (songdata) => {
  // destructure the songdata into its fields
  const { songname, artistname, aimgurl, hashtag, timeelapsed, thelength, decibel, songurl } = songdata;

  return new Promise((resolve, reject) => {
    const query = 'insert into song(songname, artistname, aimgurl, hashtag, timeelapsed, thelength, decibel, songurl) values ($1, $2, $3, $4, $5, $6, $7, $8) returning id';
    var insertSong = async function () {
      const client = await pool.connect();
      try {
        // make the query using all the songdata fields
        const res = await client.query(query, [songname, artistname, aimgurl, hashtag, timeelapsed, thelength, decibel, songurl]);
        resolve(res);
      }
      finally {
        client.release();
      }
    }
    insertSong()
      .catch(err => {
        reject(err.stack);
      })

  })
}

//cascade delete should handle the associated records deletion
const deleteSong = (songid) => {
  return new Promise((resolve, reject) => {
    const query = 'delete from song where id = $1';
    const songidparam = [songid];
    var deleteIt = async function () {
      const client = await pool.connect();
      try {
        const resp = await client.query(query, songidparam);
        resolve(resp);
      } finally {
        client.release();
      }
    }
    deleteIt()
      .catch(e => {
        reject(e.stack)
      })
  })
}

const updateSong = (songdata) => {
  // destructure song
  const { id, songname, artistname, aimgurl, hashtag, timeelapsed, thelength, decibel, songurl } = songdata;

  return new Promise((resolve, reject) => {
    const query = 'update song set (songname, artistname, aimgurl, hashtag, timeelapsed, thelength, decibel, songurl) = ($2, $3, $4, $5, $6, $7, $8, $9) where id = $1';
    var updateIt = async function () {
      const client = await pool.connect();
      try {
        const resp = await client.query(query, [id, songname, artistname, aimgurl, hashtag, timeelapsed, thelength, decibel, songurl]);
        resolve(resp);
      } finally {
        client.release();
      }
    }
    updateIt()
      .catch(e => {
        reject(e.stack)
      })
  })
}


const createComment = (commentdata) => {
  const { songid, commentimage, comment, commenttime, username } = commentdata;
  return new Promise((resolve, reject) => {
    const query = "insert into songcomment (songid, commentimage, comment, commenttime, username) values ($1, $2, $3, $4, $5) returning id";
    var insertComment = async function () {
      const client = await pool.connect();
      try {
        const resp = await client.query(query, [songid, commentimage, comment, commenttime, username]);
        //console.log(resp)
        resolve(resp);
      } finally {
        client.release();
      }
    }
    insertComment()
      .catch(e => {
        reject(e.stack)
      })
  })
}


const deleteComment = (commentid) => {
  const { id } = commentid
  //console.log(id)
  return new Promise((resolve, reject) => {
    const query = "delete from songcomment where id = $1";
    const commid = [id];
    const deleteIt = async function () {
      const client = await pool.connect();
      try {
        const resp = await client.query(query, commid);
        resolve(resp);
      } finally {
        client.release();
      }
    }
    deleteIt()
      .catch(e => {
        reject(e.stack);
      })

  })
}

const updateComment = (commentdata) => {
  var { id, songid, commentimage, comment, commenttime, username } = commentdata;
  return new Promise((resolve, reject) => {
    const query = 'update songcomment set (songid, commentimage, comment, commenttime, username) = ($2, $3, $4, $5, $6) where id = $1';
    var updateIt = async function () {
      const client = await pool.connect();
      try {
        const resp = await client.query(query, [id, songid, commentimage, comment, commenttime, username]);
        resolve(resp);
      } finally {
        client.release();
      }
    }
    updateIt()
      .catch(err => {
        reject(err.stack);
      })
  })
}

const readComments = (songid) => {
  return new Promise((resolve, reject) => {
    const query = "select * from songcomment where songid = $1"
    const songparam = [songid];
    var readAll = async function () {
      const client = await pool.connect();
      try {
        const respo = await client.query(query, songparam);
        resolve(respo)
      } finally {
        client.release();
      }
    }
    readAll()
      .catch(err => {
        reject(err.stack)
      })

  })
}

module.exports = {
  querySong, updateSong, deleteSong, createSong, readComments, updateComment, deleteComment, createComment
}
