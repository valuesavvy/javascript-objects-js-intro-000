var playlist = {
  artistName: 'song title'
}

function updatePlaylist(playlist, artistName, songtitle) {
 return Object.assign({}, playlist, { [artistName]: songtitle })
}

