# dbCloud : Player API v1.0

## <a style="color: #333333">Table of Contents</a>
* Songs CRUD
    * GET /:id/api/song_id
    * POST /:id/api/song_id
    * PUT /:id/api/song_id
    * DELETE /:id/api/song_id
* Comments CRUD
    * GET /:id/api/song_comment
    * POST /:id/api/song_comment
    * PUT /:id/api/song_comment
    * DELETE /:id/api/song_comment
* [**Change History**](#change-history)
<hr>

## SONGS
### `GET /:id/api/song_id`
Returns a `[ {Song} ]` for a given ID selection.

**URL Params**
  * `id` _(Number)_ : refers to the selection ID. 

**Success Response:**
  * **Status Code:** 200
  * **Content:** `{ Song }` conforming to the following format:

  |Keys             |Type    |
  |:--------------- |:------ |
  |`id`             |Integer |
  |`songname`       |String  |
  |`artistname`     |String  |
  |`imgurl`         |String  |
  |`hashtag`        |String  |
  |`timeelapsed`    |Date    |
  |`start`          |Integer |
  |`songlength`     |Integer |
  |`decibel`        |Integer |
  |`songurl`        |String  |
 
**Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

### `POST /:id/api/song_id`
Returns the `id` of the song created in the database.

**Payload Params**
  * Valid `{ JSON }` object conforming to the following format:


  |Keys             |Type    |
  |:--------------- |:------ |
  |`id`             |Integer |
  |`songname`       |String  |
  |`artistname`     |String  |
  |`imgurl`         |String  |
  |`hashtag`        |String  |
  |`timeelapsed`    |Date    |
  |`start`          |Integer |
  |`songlength`     |Integer |
  |`decibel`        |Integer |
  |`songurl`        |String  |
 

**Success Response:**
  * **Status Code:** 201
  * **Content:** `{ id }`
 
**Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

### `PATCH /:id/api/song_id`
Returns the `id` of the song edited in the database.

**URL Params**
   * `id` _(Number)_ : refers to the selection ID. 

**Payload Params**
  * Valid `{ JSON }` object conforming to the following format:

  |Keys             |Type    |
  |:--------------- |:------ |
  |`id`             |Integer |
  |`songname`       |String  |
  |`artistname`     |String  |
  |`imgurl`         |String  |
  |`hashtag`        |String  |
  |`timeelapsed`    |Date    |
  |`start`          |Integer |
  |`songlength`     |Integer |
  |`decibel`        |Integer |
  |`songurl`        |String  |
 

**Success Response:**
  * **Status Code:** 201
  * **Content:** `{ id }`
 
**Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

### `DELETE /:id/api/song_id`
Returns the `{ id }` deleted from the database.

**URL Params**
   * `id` _(Number)_ : refers to the selection ID. 

**Success Response:**
  * **Status Code:** 200
  * **Content:** `{ id }` conforming to the following format:
 
**Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`



## COMMENTS
### `GET /:id/api/song_comment`
Returns  `[ Comment]` for a given ID selection.

**URL Params**
  * `id` _(Number)_ : refers to the selection ID. 

**Success Response:**
  * **Status Code:** 200
  * **Content:** `[Comments]` conforming to the following format:

  |Keys             |Type    |
  |:--------------- |:------ |
  |`id`             |Integer |
  |`songid`         |Integer |
  |`songname`       |String  |
  |`comment`        |String  |
  |`username`       |String  |
  |`commentimage`   |String  |
 
**Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

### `POST /:id/api/song_comment`
Returns the `id` of the comment created in the database.

**Payload Params**
  * Valid `{ JSON }` object conforming to the following format:


  |Keys             |Type    |
  |:--------------- |:------ |
  |`id`             |Integer |
  |`songid`         |Integer |
  |`songname`       |String  |
  |`comment`        |String  |
  |`username`       |String  |
  |`commentimage`   |String  |

**Success Response:**
  * **Status Code:** 201
  * **Content:** `{ id }`
 
**Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

### `PATCH /:id/api/song_comment`
Returns the `id` of the comment edited in the database.

**URL Params**
   * `id` _(Number)_ : refers to the selection ID. 

**Payload Params**
  * Valid `{ JSON }` object conforming to the following format:

  |Keys             |Type    |
  |:--------------- |:------ |
  |`id`             |Integer |
  |`songid`         |Integer |
  |`songname`       |String  |
  |`comment`        |String  |
  |`username`       |String  |
  |`commentimage`   |String  |

**Success Response:**
  * **Status Code:** 201
  * **Content:** `{ id }`
 
**Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

### `DELETE /:id/api/song_comment`
Returns the `{ id }` deleted from the database.

**URL Params**
   * `id` _(Number)_ : refers to the selection ID. 

**Success Response:**
  * **Status Code:** 200
  * **Content:** `{ id }` conforming to the following format:
 
**Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`


<hr>

## Change History
|Name                                 |Version    |Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|Description     |
|:----------------------------------- |:--------- |:--------- |:------- |
|[@sharmoo](https://github.com/sharmoo) |1.0        |2019-02-27 |Document initial API CRUD routes for relevant models in the `Player` microservice.