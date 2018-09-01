var playlist = {artist: "songs"};

// destructively update playlist
function updatePlaylist(playlist, artistName, songTitle){
playlist[artistName] = songTitle;

return playlist
}