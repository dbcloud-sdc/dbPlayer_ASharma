const faker = require('faker');

// two records or one:

// compare the nesting

const songname = faker.lorem.sentence(2); // string

const artistname = faker.name.findName(); // String
const imgurl = faker.image.imageUrl(); // string

const hashtag = faker.random.word();
const timeelapsed = faker.date.past();
const start = 0;
const songlength = faker.random.number({ min: 120, max: 620 });
const decibel = faker.random.number({ min: 62, max: 80 });
const songurl = ''; // aws string link


// const songname	=
// const comment	String
// const username	String
const commentimage = ''; // aws string link
const comment = faker.company.bs();
const username = faker.name.findName();
const songid = 'num';
