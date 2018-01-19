'use strict';

const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const fs = require('fs');

const musicFolder = './music/';

let musicList = [];

const jsmediatags = require("jsmediatags");

let songID = 0;

fs.readdir(musicFolder, (err, files) => {
  files.forEach(fileTitle => {

    let songAuthor, songTitle, fullTitle = fileTitle;

    //Getting rid of &,\, etc
    fullTitle = encodeURIComponent(fullTitle);

    fileTitle = fileTitle.replace(".mp3", "");

    //trying to read meta tags
    let readMetaTag = new Promise(function (resolve, reject) {
      jsmediatags.read(`./music/${fileTitle}.mp3`, {
        onSuccess: function(tag) {
          let metaTitle = tag.tags.title;

          if (metaTitle) {
            metaTitle = metaTitle.replace(".mp3", "");
            if (metaTitle.indexOf("-") > 0) {
              metaTitle = metaTitle.split("-");
            }
            if (metaTitle.indexOf("–") > 0) {
              metaTitle = metaTitle.split("–");
            }

            songTitle = metaTitle[1] || 'Unknown';
            songAuthor = metaTitle[0] || 'Unknown';
          } else {
            reject();
          }

          resolve([songAuthor, songTitle]);
        },
        onError: function(error) {
          console.log(':(', error.type, error.info);
        }
      });
    });

    //send meta tags or title
    readMetaTag.then(result => {
        musicList.push({
          "songID": songID,
          "songAuthor": songAuthor,
          "songTitle": songTitle,
          "fullTitle": fullTitle
        });

        songID++;
      },
      error => {
        if (fileTitle.indexOf("-") > 0) {
          fileTitle = fileTitle.split("-");
        }
        if (fileTitle.indexOf("–") > 0) {
          fileTitle = fileTitle.split("–");
        }

        songTitle = fileTitle[1] || 'Unknown';
        songAuthor = fileTitle[0] || 'Unknown';

        musicList.push({
          "songID": songID,
          "songAuthor": songAuthor,
          "songTitle": songTitle,
          "fullTitle": fullTitle
        });

        songID++;
      }
    );

  });
});

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});

app.get('/api/list', (req, res) => {
  res.send(musicList);
});

app.get('/api/music', (req, res) => {
  let fileTitle = req.query.fileTitle;
  let file = `./music/${fileTitle}`;
  fs.exists(file,function(exists){
    if(exists) {
      let rstream = fs.createReadStream(file);
      rstream.pipe(res);
    }
    else {
      res.send("Its a 404");
      res.end();
    }
  });
});


app.post('/api/login', (req, res) => {
  let findedUser;
  if (req.body.user.login === "123" && req.body.user.password === "321") {
    findedUser = 'yes';
  } else {
    findedUser = 'no';
  }
  res.send(findedUser);
});

app.post('/api/recover', (req, res) => {
  let findedUser;
  if (req.body.user.login === "123") {
    findedUser = 'yes';
  } else {
    findedUser = 'no';
  }
  res.send(findedUser);
});

app.post('/api/search', (req, res) => {
  let arr = [];
  musicList.map((song) => {
    if (song.fullTitle.toLowerCase().indexOf(req.body.searchData.searchData.toLowerCase()) >= 0 ||
      song.songAuthor.toLowerCase().indexOf(req.body.searchData.searchData.toLowerCase()) >= 0 ||
      song.songTitle.toLowerCase().indexOf(req.body.searchData.searchData.toLowerCase()) >= 0) {
      arr.push(song);
    }
  });
  res.send(arr);
});

app.listen(5000, 'localhost');