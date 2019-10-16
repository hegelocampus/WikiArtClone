import React from 'react';
import { NEW, EDIT } from './edit';
//FIXME  Fix cancel button
//TODO   Break up form into smaller sub-components
//TODO   Make the artist death date selector only show if the user requests it
//TODO   Implement errors right above submit button
//FIXME  Figure out how the heck to get the artist id after submitting

export default class ArtistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.artist;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount(){
    this.props.requestAllSelectors("artist");

    if (this.props.formType === EDIT) {
      this.props.requestArtist(this.props.match.artistId);
    }
  }

  update(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let parsed = {};
    Object.entries(this.state).forEach(atr => {
      if (atr[1] && this.props.selectors[atr[0]]) {
        let parsedVal = Object.entries(this.props.selectors[atr[0]]).find(ent => {
          return ent[1].name === atr[1];
        });
        parsed[`${atr[0]}Id`] = parsedVal[1].id;
      } else if(this.props.selectors[atr[0]]) {
        parsed[`${atr[0]}Id`] = null;
      } else if(atr[1] === "") {
        parsed[atr[0]] = null;
      } else {
        parsed[atr[0]] = atr[1];
      }
    })

    this.props.formAction(parsed).then(({artist}) => {
      console.log(artist);
      artist ? this.props.history.push(`/${artist.id}`) : null;
    });
  }

  handleCancel(e) {
    e.preventDefault();
    if (confirm("All changes will be unsaved. Are you sure?")){
      this.props.history.push('/');
    };
  }

  render() {
    let idMatch = /(.+)(?=Id$)/;

    let assocInputs = [];
    Object.entries(this.props.selectors).forEach(att => {
      let parsedName = `${att[0]}Id`;
      assocInputs.push(
        <label
          key={ `${att[0]}-label` }
        >
          { att[0] }
          <input
            type="text"
            className="artist-form-input"
            list={ att[0] }
            onChange={ this.update }
            name={ att[0] }
            value={ this.state[att[0]] }
            required={ att[0] === "artMovement" }
          />
          <datalist
            id={ att[0] }
          >
            {Object.values(att[1]).map(({id, name}) =>
              <option key={id} value={name} />
            )}
            }
          </datalist>
        </label>
      )
    });

    return(
      <form
        onSubmit={ this.handleSubmit }
        className="artist-form"
      >
        <ul>
          <li>
            <header
              className="artist-form-subheader"
            >
              Name and Portrait
            </header>
            <div className="artist-form-bio">
              <label
              >
                Name:
                <input
                  type="text"
                  name="name"
                  className="artist-form-input"
                  value={ this.state.name }
                  onChange={ this.update }
                  required
                />
              </label>
              <label
              >
                Image URL:
                <input
                  type="url"
                  name="imageUrl"
                  className="artist-form-input"
                  value={ this.state.imageUrl }
                  onChange={ this.update }
                />
              </label>
              <label
              >
                Caption for Image:
                <input
                  type="text"
                  name="imageCaption"
                  className="artist-form-input"
                  value={ this.state.imageCaption }
                  onChange={ this.update }/>
              </label>
            </div>
          </li>
          <li>
            <header
              className="artist-form-subheader"
            >
              Dates
            </header>
            <div className="artist-form-dates">
              <label
              >
                Artist Birth Date:
                <input
                  type="date"
                  name="birthDate"
                  className="artist-form-input"
                  value={ this.state.birthDate }
                  onChange={ this.update }
                />
              </label>
              <label
              >
                Date the Artist Died (If Applicable):
              </label>
              <input
                type="date"
                name="deathDate"
                className="artist-form-input"
                value={ this.state.deathDate }
                onChange={ this.update }
              />
            </div>
          </li>
          <li>
            <header
              className="artist-form-subheader"
            >
              Classification
            </header>
            <div className="artist-form-associations">
              { assocInputs }
            </div>
          </li>
          <li>
            <header
              className="artist-form-subheader"
            >
              References and links
            </header>
            <div className="artist-form-links">
              <label>
                Wikipedia URL:
              </label>
              <input
                type="url"
                name="wikiUrl"
                className="artist-form-input"
                value={ this.state.wikiUrl }
                onChange={ this.update }
              />
            </div>
          </li>
          <li
            className="artst-form-buttons-container"
          >
            <div>
              <button
                type="submit"
                className="artst-form-submit"
              >
                Save
              </button>
              <span
                onClick={ this.handleCancel }
                className="artst-form-cancel"
              >
                Cancel
              </span>
            </div>
          </li>
        </ul>
      </form>
    )
  }
}

