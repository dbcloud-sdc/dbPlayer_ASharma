const fs = require("fs");
const request = require("request");


const download = async (uri, filename, callback) => {
  request.head(uri, (err, res, body) => {
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

let count = 1;
function populateFolder() {
  if (count === 201) {
    return console.log('done!');
  }
  download('https://loremflickr.com/50/50', `commentImages/c${count}.jpg`, () => {
    console.log('done');
    count += 1;
    populateFolder();
  });
}
populateFolder();


// download('https://loremflickr.com/500/500', `songImages/s${count}.jpg`, () => {
