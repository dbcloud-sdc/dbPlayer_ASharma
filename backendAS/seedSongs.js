// seed
// define headers

const faker = require('faker');
const moment = require("moment");
const fs = require('fs');

const { Writeable, Readable } = require('stream');

class ReadSongs extends Readable {
  constructor(options) {
    super(options);
    this.goal = 10 * 1000 * 1000;
    this.rowsgenerated = 0;
    this.progressBarLength = 25;
    this.startTime = moment();
  }

  _read() {
    if (this.goal <= this.rowsgenerated + 1) {
      this.push(null);
    } else {
      let container = '';
      for (let i = 0; i < 1000; i++) {
        const songname = faker.lorem.sentence(2); // string
        const artistname = faker.name.findName(); // String
        const imgurl = faker.image.imageUrl(); // string
        const hashtag = faker.random.word();
        const timeelapsed = faker.date.past();
        const start = 0;
        const songlength = faker.random.number({ min: 120, max: 620 });
        const decibel = faker.random.number({ min: 62, max: 80 });
        const songurl = 'songurl'; // aws string link
        container += `${this.rowsgenerated},${songname},${artistname},${imgurl},${hashtag},${timeelapsed},${start},${songlength},${decibel},${songurl}/n`;
        this.rowsgenerated++;
      }
      this.push(container);
      this._logPercentComplete();

    }
  }

  _logPercentComplete() {
    const currPercent = ((this.rowsgenerated / this.goal) * 100).toFixed(2);
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

  _getHashes(currPercent) {
    return '#'.repeat(Math.floor(currPercent / (100 / this.progressBarLength)));
  }

  _getEmptySpaces(hashes) {
    return ' '.repeat(this.progressBarLength - hashes.length);
  }
}


var writestream = fs.createWriteStream('songs.csv');
var readstream = new ReadSongs();
readstream.pipe(writestream);



// const songname = faker.lorem.sentence(2); // string

// const artistname = faker.name.findName(); // String
// const imgurl = faker.image.imageUrl(); // string

// const hashtag = faker.random.word();
// const timeelapsed = faker.date.past();
// const start = 0;
// const songlength = faker.random.number({ min: 120, max: 620 });
// const decibel = faker.random.number({ min: 62, max: 80 });
// const songurl = ''; // aws string link


// required _write , _writev, _final


// const writeStream = fs.createWriteStream('atextfile.txt', { flags: 'w' });

// writeStream.write('hello world');

// const csvWriter = require('csv-write-stream');

// const writer = csvWriter();
// writer.pipe(fs.createWriteStream('songs.csv'));
// for (let i = 0; i < 10; i++) {
//   writer.write({ hello: faker.random.word(), foo: faker.random.number(1, 100), baz: faker.company.bs() });
// }
// writer.end();


// two records or one:

// compare the nesting

// const songname = faker.lorem.sentence(2); // string

// const artistname = faker.name.findName(); // String
// const imgurl = faker.image.imageUrl(); // string

// const hashtag = faker.random.word();
// const timeelapsed = faker.date.past();
// const start = 0;
// const songlength = faker.random.number({ min: 120, max: 620 });
// const decibel = faker.random.number({ min: 62, max: 80 });
// const songurl = ''; // aws string link


// // const songname	=
// // const comment	String
// // const username	String
// const commentimage = ''; // aws string link
// const comment = faker.company.bs();
// const username = faker.name.findName();
// const songid = 'num';
