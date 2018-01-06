'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const musicFolder = './music/';

// mp3Duration("./music/Drake - Hotline Bling.mp3", function (err, duration) {
//   if (err) return console.log(err.message);
//   console.log('Your file is ' + duration/60 + ' seconds long');
// });
//

let musicList = [];

const jsmediatags = require("jsmediatags");

let songID = 0;

fs.readdir(musicFolder, (err, files) => {
  files.forEach(fileTitle => {

    let songAuthor, songTitle;

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
          "songTitle": songTitle
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
          "songTitle": songTitle
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

app.get('/api/list', (req, res) => {
  res.send(musicList);
});

app.get('/api/music', (req, res) => {
  console.log('s');
  let fileId = req.query.id;
  let file = __dirname + './music/' + fileId;
  fs.exists(file,function(exists){
    if(exists)
    {
      let rstream = fs.createReadStream(file);
      rstream.pipe(res);
    }
    else
    {
      res.send("Its a 404");
      res.end();
    }

  });
});

app.listen(5000, 'localhost');