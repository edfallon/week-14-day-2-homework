import React from 'react'
import Song from './song.js'
import './songList.css'



const SongList = (props) => {
  if (!props.songs) return null;

  const allSongs = props.songs.map(song =>

    <Song index={props.songs.indexOf(song)} key={song.id.attributes['im:id']} song={song}/>
  )

  return(
    <div class='allSongs'>
      <img src="http://recomhub.com/blog/wp-content/uploads/2015/02/Itunes-logo.png" alt=""/>
      <h1>The Uk's Official Top 20</h1>
      {allSongs}
    </div>

  )

}

export default SongList;
