import React from 'react';

class Song extends React.Component {
  render(){
    return(
      <div className='song'>
        <h2>#{this.props.index + 1}</h2>
        <h4>{this.props.song["im:name"].label}</h4>
        <h4>{this.props.song["im:artist"].label}</h4>
        <p><img className='image' src={this.props.song["im:image"][2].label} alt=''/></p>
        {/* <p>{this.props.song.link.attributes}</p> */}
        {/* <p><a href={this.props.song.link[1].attributes.href}>Play preview</a></p> */}
        {/* <p><video src={this.props.song.link[1].attributes.href}>Play</video></p> */}
        <p><audio controls src={this.props.song.link[1].attributes.href}>Play</audio></p>


      </div>
    )
  }
}

export default Song;
