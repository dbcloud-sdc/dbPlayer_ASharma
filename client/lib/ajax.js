import $ from 'jquery';

const getAllImages = (callback) => {
  $.get({
    url: `${window.location.pathname}api/song_img`,
    success: data => callback(null, data),
    error: err => callback(err),
  });
};

const getAllSongs = (callback) => {
  $.get({
    url: `${window.location.pathname}api/song_id`,
    success: data => callback(null, data),
    error: err => callback(err),
  });
};

const getAllCommentImages = (callback) => {
  $.get({
    url: `${window.location.pathname}api/song_comment_img`,
    success: data => callback(null, data),
    error: err => callback(err),
  });
};

const getAllComments = (callback) => {
  $.get({
    url: `${window.location.pathname}api/song_comment`,
    success: data => callback(null, data),
    error: err => callback(err),
  });
};

export default {
  getAllImages, getAllSongs, getAllCommentImages, getAllComments,
};
