drop database if exists player;
create database player;

\connect player

create table song(
  id serial primary key,
  songname varchar(80) not null,
  artistname varchar(80) not null,
  aimgurl int not null,
  hashtag varchar(80) not null,
  timeelapsed bigserial not null,
  thelength int not null,
  decibel int not null, 
  songurl int not null
);

create table songcomment(
  id serial primary key,
  songid int references song(id),
  commentimage int not null, 
  comment varchar(120) not null,
  commenttime int not null,
  username varchar(80) not null
);

create index songid_song_comment on songcomment(songid);
create index id_song on song(id);
ALTER TABLE songcomment ADD FOREIGN KEY(songid) REFERENCES song (id) ON DELETE CASCADE;

--  create sequence songcomment_id_seq o
-- wned by songcomment.id;
-- select max(id) from songcomment;
-- select setval('songcomment_id_seq', 399950769);


-- shape
-- container += `${this.commentsGenerated},
-- ${songid},${commentimage},${comment},
-- ${commenttime},${username}\n`;

-- shape
    -- songRow += `${this.songRowsGenerated},
    -- ${songname},${artistname},
    -- ${imgurl},${hashtag},${timeelapsed},
    -- ${length},${decibel},${songurl}\n`;