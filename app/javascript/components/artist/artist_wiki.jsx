import React from 'react'

export default class ArtistWiki extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.fetchWiki(this.props.artistWikiUrl, this.props.artistId);
  }

  render() {
    return (
      <div className="artist-wiki">
        <h4>Wikipedia article</h4>
        <p>{ this.props.wikiText || null }</p>
      </div>
    )
  }
}
