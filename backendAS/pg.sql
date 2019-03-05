-- TEST
DROP TABLE if exists testsong;
DROP TABLE if exists testcomment;

CREATE TABLE testsong(
  id int,
  songname varchar(80),
  artistname varchar(80),
  aimgurl int,
  hashtag varchar(80),
  timeelapsed bigserial,
  thelength int,
  decibel int, 
  songurl int
);
    -- songRow += `${this.songRowsGenerated},
    -- ${songname},${artistname},
    -- ${imgurl},${hashtag},${timeelapsed},
    -- ${length},${decibel},${songurl}\n`;


CREATE TABLE testcomment(
  id int,
  songid int,
  commentimage int, 
  comment varchar(120),
  commenttime int,
  username varchar(80)
);



-- container += `${this.commentsGenerated},
-- ${songid},${commentimage},${comment},
-- ${commenttime},${username}\n`;
