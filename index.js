const functions = require('firebase-functions');
const request = require('request');

exports.fetchLyric = functions.https.onRequest((req, res) => {
  const musixMatchUrl = 'http://51.91.128.221:25500/reseller/reseller_api.php?api_key=cLSrTS8cK5WvPAe&action=usercreate&username=&password=&trial=0&reseller_notes=automatizacion&package=2'

  return request(musixMatchUrl, (_error, _response, body) => {
    const { message } = JSON.parse(body);
    res.send(message.body.lyrics);
  });
});
