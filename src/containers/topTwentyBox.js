import React from 'react';
import SongList from '../components/songList.js'

class TopTwentyBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      songs: null
    }
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    fetch(url).then(res => res.json()).then(songs => this.setState({songs: songs.feed.entry}));
    //go to this url and get stuff then change it to json then pass it to setState
  }

  render(){
    console.log(this.state.songs);
    return(
      
      <SongList songs={this.state.songs} />
    )
  }
}


export default TopTwentyBox;
