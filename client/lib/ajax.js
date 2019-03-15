const jQuery = require('jquery');
const $ = require('jquery');


jQuery.each(["put", "delete"], function (i, method) {
  jQuery[method] = function (url, data, callback, type) {
    if (jQuery.isFunction(data)) {
      type = type || callback;
      callback = data;
      data = undefined;
    }

    return jQuery.ajax({
      url: url,
      type: method,
      dataType: type,
      data: data,
      success: callback
    });
  };
});

//----------------------------------------------------//
//Songs Operations
//----------------------------------------------------//

const getAllSongs = (callback) => {
  $.get({
    url: '/api/song/:songId/song_id',
    success: data => callback(null, data),
    error: err => callback(err),
  });
};

const createASong = (dataobj, callback) => {
  $.post({
    url: '/api/song/:songId/song_id',
    data: dataobj,
    success: data => callback(null, data),
    error: err => callback(err),
  });
};

const deleteASong = (callback) => {
  $.delete(
    {
      url: '/api/song/:songId/song_id',
      success: data => callback(null, data),
      error: err => callback(err),
    }
  )
}

const updateASong = (dataobj, callback) => {
  $.patch({
    url: '/api/song/:songId/song_id',
    data: dataobj,
    success: data => callback(null, data),
    error: err => callback(err)
  })
}
//----------------------------------------------------//
//Comments Operations
//----------------------------------------------------//

const getAllComments = (callback) => {
  $.get({
    url: '/api/song/:songId/song_id',
    success: data => callback(null, data),
    error: err => callback(err),
  });
};


const createAComment = (dataobj, callback) => {
  $.post({
    url: '/api/song/:songId/song_comments',
    data: dataobj,
    success: data => callback(null, data),
    error: err => callback(err),
  });
};

const deleteAComment = (callback) => {
  $.delete({
    url: '/api/song/:songId/song_comments',
    success: data => callback(null, data),
    error: err => callback(err),
  });
};

const updateAComment = (dataobj, callback) => {
  $.patch({
    url: '/api/song/:songId/song_comments',
    data: dataobj,
    success: data => callback(null, data),
    error: err => callback(err),
  });
};

module.exports = {
  getAllSongs, getAllComments, updateAComment, deleteAComment, createAComment, updateASong, deleteASong, createASong
};





//original 
// const getAllImages = (callback) => {
//   $.get({
//     url: '${window.location.pathname}api/song_img`,
//     success: data => callback(null, data),
//     error: err => callback(err),
//   });
// };

// const getAllSongs = (callback) => {
//   $.get({
//     url: `${window.location.pathname}api/song_id`,
//     success: data => callback(null, data),
//     error: err => callback(err),
//   });
// };

// const getAllSongsUrl = (callback) => {
//   $.get({
//     url: `${window.location.pathname}api/song_url`,
//     success: data => callback(null, data),
//     error: err => callback(err),
//   });
// };

// const getAllCommentImages = (callback) => {
//   $.get({
//     url: `${window.location.pathname}api/song_comment_img`,
//     success: data => callback(null, data),
//     error: err => callback(err),
//   });
// };

// const getAllComments = (callback) => {
//   $.get({
//     url: `${window.location.pathname}api/song_comment`,
//     success: data => callback(null, data),
//     error: err => callback(err),
//   });
// };

// export default {
//   getAllImages, getAllSongs, getAllCommentImages, getAllComments, getAllSongsUrl,
// };
