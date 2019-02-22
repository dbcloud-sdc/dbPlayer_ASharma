import $ from 'jquery';

const getAllImages = (callback) => {
  $.get({
    url: 'http://cowie22-env.myqnebupcf.us-east-1.elasticbeanstalk.com/api/song_img',
    success: data => callback(null, data),
    error: err => callback(err),
  });
};

const getAllSongs = (callback) => {
  $.get({
    url: 'http://cowie22-env.myqnebupcf.us-east-1.elasticbeanstalk.com/api/song_id',
    success: data => callback(null, data),
    error: err => callback(err),
  });
};

export default {
  getAllImages, getAllSongs,
};
