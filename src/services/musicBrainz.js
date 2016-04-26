import MusicBrainz from 'nodebrainz';
export default function (url) {

  var mbz = new MusicBrainz();

  this.artistById = function (options){
      return new Promise(function(resolve, reject) {
        mbz.artist(options.id, { inc: options.incl }, function (err, artist) {
          if(err) throw err;
          resolve(artist);
        });
      });

  };

  this.search = function(type,options){
    return new Promise(function(resolve, reject) {
      mbz.search(type, options, function(err, response){
        if(err) throw err;
        resolve(response);
      });
    });
  }
}
