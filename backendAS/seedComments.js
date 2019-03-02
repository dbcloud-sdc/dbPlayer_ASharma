const faker = require('faker');

const fs = require('fs');

const { Writeable, Readable } = require('stream');

class ReadComments extends Readable {
  constructor(options) {
    super(options);
    this.goal = 10 * 1000 * 1000 * 80;
    this.rowsgenerated = 0;
  }

  _read() {
    if (this.goal <= this.rowsgenerated + 1) {
      this.push(null);
    } else {
      let container = '';
      for (let i = 0; i < 1000; i++) {
        container += `${this.rowsgenerated}\n`;
        const commentimage = 'awsurl'; // aws string link
        const comment = faker.company.bs();
        const username = faker.name.findName();
        const songid = 'num';
        container += `${this.rowsgenerated},${commentimage},${comment},${username},${songid}`;
        this.rowsgenerated++;
      }
      this.push(container);
    }
  }
}


var writestream = fs.createWriteStream('songs.csv');
var readstream = new ReadSongs();
readstream.pipe(writestream);
