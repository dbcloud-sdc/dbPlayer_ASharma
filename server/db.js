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
  return new Promise((resolve, reject) => {
    const query = 'insert into song(commentimage, comment, commenttime, username) values ($1, $2, $3, $4) returning id';
    var insertSong = async function () {
      const client = await pool.connect();
      try {
        const res = await client.query(query, songdata);
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
    const query = 'delete from table where id = $1';
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
  return new Promise((resolve, reject) => {
    const query = 'update song set (commentimage, comment, commenttime, username) = ($2, $3, $4, $5) where id = $1';
    var updateIt = async function () {
      const client = await pool.connect();
      try {
        const resp = await client.query(query, songdata);
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
  return new Promise((resolve, reject) => {
    const query = "insert into songcomment (songid, commentimage, comment, commenttime, username) values ($2, $3, $4, $5) returning id";
    var insertComment = async function () {
      const client = await pool.comnnect();
      try {
        const resp = await client.query(query, commentdata);
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
  return new Promise((resolve, reject) => {
    const query = "delete from songcomment where commentid = $1";
    const commentid = [commentid];
    const deleteIt = async function () {
      const client = await pool.connect();
      try {
        const resp = await client.query(query, commendid);
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
  return new Promise((resolve, reject) => {
    const query = 'update comment set (songid, commentimage, comment, commenttime, username) = ($2, $3, $4, $5) where id = $1';
    var updateIt = async function () {
      const client = await pool.connect();
      try {
        const resp = await client.query(query, commentdata);
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
    const songparam = [songparam];
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
