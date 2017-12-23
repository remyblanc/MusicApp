'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const musicFolder = './music/';

let musicList = {};

let mm = require('music-metadata');
const util = require('util');

fs.readdir(musicFolder, (err, files) => {
  files.forEach(file => {
    mm.parseFile('./music/'+file, {native: true})
      .then(function (metadata) {
        let rFile = util.inspect(metadata, { showHidden: false, depth: null });
        musicList = rFile;
        console.log(rFile);
      })
      .catch(function (err) {
        console.error(err.message);
      });
  });
})


const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.get('/api/list', (req, res) => {
  res.send(musicList);
});

app.listen(5000, 'localhost');