const functions = require('firebase-functions');
const request = require('request');

exports.fetchLyric = functions.http.onRequest((req, res) => {
  const musixMatchUrl = 'https://api.musixmatch.com/ws/1.1/matcher.lyrics.get'
        + '?format=json'

  return request(musixMatchUrl, (_error, _response, body) => {
    const { message } = JSON.parse(body);
    res.send(message.body.lyrics);
  });
});

"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);


restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
