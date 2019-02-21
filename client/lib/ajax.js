import $ from 'jquery';

const getAllImages = (callback) => {
  $.get({
    url: '/api/song_img',
    success: data => callback(null, data),
    error: err => callback(err),
  });
};

const getAllSongs = (callback) => {
  $.get({
    url: '/api/song_id',
    success: data => callback(null, data),
    error: err => callback(err),
  });
};

export default {
  getAllImages, getAllSongs,
};
