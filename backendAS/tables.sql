drop database if exists player;
create database player;

\connect player

create table songcomment(
  id int,
  songid references song,
  commentimage int, 
  comment varchar(120),
  commenttime int,
  username varchar(80)
);

-- shape
-- container += `${this.commentsGenerated},
-- ${songid},${commentimage},${comment},
-- ${commenttime},${username}\n`;

create table song(
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




-- shape
    -- songRow += `${this.songRowsGenerated},
    -- ${songname},${artistname},
    -- ${imgurl},${hashtag},${timeelapsed},
    -- ${length},${decibel},${songurl}\n`;