import $ from 'jquery';

const getAllImages = (callback) => {
  $.get({
    url: 'http://localhost:2222/api/song_img',
    success: data => callback(null, data),
    error: err => callback(err),
  });
};

export default {
  getAllImages,
};

// "https://s3-us-west-1.amazonaws.com/songimages/photos/
