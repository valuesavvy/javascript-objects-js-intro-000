var playlist = {
  artistName: "My Bloody Valentine",
  artistName1: "Phil Ochs",
  artistName2: "Slowdive"
}

function updatePlaylist(playlist, artistName, songtitle) {
 return Object.assign({}, playlist, { [artistName]: songtitle })
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
}