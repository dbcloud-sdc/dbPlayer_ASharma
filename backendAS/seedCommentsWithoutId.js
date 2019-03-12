const faker = require('faker');
const moment = require("moment");

const fs = require('fs');

const { Writeable, Readable } = require('stream');

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

class ReadComments extends Readable {
  constructor(options) {
    super(options);
    this.songsGoal = 1e7;
    this.songRowsGenerated = 0;
    this.commentsGenerated = 0;
    this.progressBarLength = 25;
    this.currPercent = 0;
    this.startTime = moment();
  }

  _read() {
    if (this.songsGoal <= this.songRowsGenerated) {
      console.log("songRowsGenerated " + this.songRowsGenerated);
      console.log("comments generated " + this.commentsGenerated);
      console.log(`${(Date.now() - this.startTime) / 1000} seconds`)
      this.push(null);
    } else {
      let container = '';
      //generate a random number of comments per song
      for (let j = 0; j < 35; j++) {
        const randomCommentNumber = Math.floor(Math.random() * 81);
        const songlength = getRandomIntInclusive(120, 620);
        this.songRowsGenerated++;
        for (let i = 0; i < randomCommentNumber; i++) {
          this.commentsGenerated++;
          const songid = this.songRowsGenerated;
          const commentimage = Math.floor(Math.random() * 200) + 1; // aws string link
          const comment = faker.lorem.sentence();
          const commenttime = getRandomIntInclusive(0, songlength); //presumably a number from song beginning aka 0 to song end
          const username = faker.name.findName();
          container += `${songid},${commentimage},${comment},${commenttime},${username}\n`;
        }
        this.song(songlength);
      }
      this.push(container);
      this._logPercentComplete();
    }
  }

  async song(length) {
    let songRow = '';
    const songname = faker.lorem.sentence(2); // string
    const artistname = faker.name.findName(); // String
    const imgurl = Math.floor(Math.random() * 200) + 1; // string
    const hashtag = faker.lorem.word();
    const timeelapsed = getRandomIntInclusive(1543846091489, 1551730028863);
    const decibel = getRandomIntInclusive(62, 80);
    const songurl = 1; // aws string link

    songRow += `${songname},${artistname},${imgurl},${hashtag},${timeelapsed},${length},${decibel},${songurl}\n`;
    fs.appendFile('songs.csv', songRow, (err) => {
      if (err) {
        throw err;
      }
    })
    //append to file songs.csv
  }

  _logPercentComplete() {
    // const currPercent = ((this.songRowsGenerated / this.songsGoal) * 100).toFixed(2);
    const currPercent = Math.floor((this.songRowsGenerated / this.songsGoal) * 100);
    if (this.currPercent !== currPercent) {
      this.currPercent = currPercent;
      const hashes = this._getHashes(currPercent);
      const spaces = this._getEmptySpaces(hashes);
      const timestamp = moment().format('HH:mm:ss');
      // const meta = `${timestamp} : ${this.filepath}`;
      const progressBar = `Data generation: |${hashes}${spaces}| ${currPercent}% Complete`;

      process.stdout.clearLine();
      process.stdout.cursorTo(0);
      if (currPercent === '100.00') {
        process.stdout.write(`${timestamp} : ${progressBar}\n`);
        console.log(`Success. Elapsed time since ${this.startTime.format('HH:mm:ss')}: ${moment().diff(this.startTime, 'seconds')} seconds\n`);
      } else {
        process.stdout.write(`${timestamp} : ${progressBar}`);
      }
    }
  }

  _getHashes(currPercent) {
    return '#'.repeat(Math.floor(currPercent / (100 / this.progressBarLength)));
  }

  _getEmptySpaces(hashes) {
    return ' '.repeat(this.progressBarLength - hashes.length);
  }
}


// var writestream = fs.createWriteStream('testcomments.csv');
// fs.writeFile('test.csv', '', (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('test csv created')
// });

var writestream = fs.createWriteStream('comments.csv');
fs.unlink('songs.csv', (err) => {
  if (err) {
    throw err;
  }
  fs.writeFile('songs.csv', '', (err) => {
    if (err) {
      throw err;
    }
    console.log('songs csv created')
  })
});

var readstream = new ReadComments();
readstream.pipe(writestream);

// "songid" FOREIGN KEY (songid) REFERENCES song(id) ON DELETE CASCADE
