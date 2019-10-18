import React from 'react';
import { NEW, EDIT } from './edit';
import RenderErrors from './render_errors';
//FIXME  Fix cancel button
//TODO   Break up form into smaller sub-components
//TODO   Implement errors right above submit button

export default class ArtworkForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.artwork;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount(){
    this.props.requestAllSelectors("artwork");

    if (this.props.formType === EDIT) {
      this.props.requestArtwork(this.props.match.artworkId);
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

    parsed['artistId'] = this.props.artistId;

    this.props.formAction(parsed).then(({ artwork }) => {
      artwork ? this.props.history.push(`/${ artwork.id }`) : null;
    });
  }

  handleCancel(e) {
    e.preventDefault();
    if (window.confirm("All changes will be unsaved. Are you sure?")){
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
            className="artwork-form-input"
            list={ att[0] }
            onChange={ this.update }
            name={ att[0] }
            value={ this.state[att[0]] }
            required={ att[0] === "style" }
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
        className="artwork-form"
      >
        <ul>
          <li>
            <header
              className="artwork-form-subheader"
            >
              Title and Image
            </header>
            <div className="artwork-form-bio">
              <label
              >
                Artwork Title:
                <input
                  type="text"
                  name="name"
                  className="artwork-form-input"
                  value={ this.state.name }
                  onChange={ this.update }
                  required
                />
              </label>
            </div>
          </li>
          <li>
            <header
              className="artwork-form-subheader"
            >
              Dates
            </header>
            <div className="artwork-form-dates">
              <label
              >
                Artwork Creation Date:
                <input
                  type="date"
                  name="date"
                  className="artwork-form-input"
                  value={ this.state.date }
                  onChange={ this.update }
                />
              </label>
            </div>
          </li>
          <li>
            <header
              className="artwork-form-subheader"
            >
              Artwork Image
            </header>
            <div>
              <label>
                Image URL:
                <input
                  type="url"
                  name="imageUrl"
                  className="artwork-form-input"
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
                  className="artwork-form-input"
                  value={ this.state.imageCaption }
                  onChange={ this.update }
                />
              </label>
            </div>
          </li>
          <li>
            <header
              className="artwork-form-subheader"
            >
              Classification
            </header>
            <div className="artwork-form-associations">
              { assocInputs }
            </div>
          </li>
          <li>
            <RenderErrors />
          </li>
          <li
            className="artwork-form-buttons-container"
          >
            <div>
              <button
                type="submit"
                className="artwork-form-submit"
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

