"use strict";
import test from 'ava';
import MusicBrainz from '../../../src/services/musicBrainz';

test('getArtist Should return artist Justin Bieber', function *(t){
  let mbz = new MusicBrainz();
  let justinBieber = yield mbz.artistById({id: 'e0140a67-e4d1-4f13-8a01-364355bee46e', incl: 'releases'});
  t.deepEqual(justinBieber.name,"Justin Bieber")
});

test('search for Prince then request his albums', function *(t){
  let mbz = new MusicBrainz();
  let searchResults = yield mbz.search('artist',{artist: "Prince", alias:"The Artist Formerly Known as Prince", limit:1});
  const [ Prince ] = searchResults.artists;

  t.deepEqual(searchResults.artists.length,1);
  t.deepEqual(Prince.name, "Prince");

  let Prince_Albums_Search = yield mbz.search('release-group', {arid: Prince.id, type:"album"});
  let Prince_Albums = Prince_Albums_Search['release-groups'];
//  console.log(Prince_Albums);

  t.deepEqual(Prince_Albums[0]['primary-type'],'Album');
  t.deepEqual(Prince_Albums.length,25);
});
