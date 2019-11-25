import React, { useEffect } from 'react';
import { NEW, EDIT } from './edit';
import { Formik, Form, Field } from 'formik';
import RenderErrors from './render_errors';
//FIXME  Fix cancel button
//TODO   Break up form into smaller sub-components
//TODO   Implement errors right above submit button

export default props => {
  console.log(props);
  const { artworkId, artistId } = props.match.params;
  const idMatch = /(.+)(?=Id$)/;

  useEffect(() => {
    props.requestAllSelectors("artwork");

    if (props.formType === EDIT) {
      props.requestArtwork(artworkId);
    }
  },
    [props.requestAllSelectors, props.requestArtwork, props.match]
  )

  let assocInputs = [];
  Object.entries(props.selectors).forEach(att => {
    let parsedName = `${att[0]}Id`;
    assocInputs.push(
      <label
        key={ `${att[0]}-label` }
      >
        { att[0] }
        <Field
          type="text"
          className="artwork-form-input"
          list={ att[0] }
          name={ att[0] }
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

  const handleSubmit = values => {
    let parsed = {};
    Object.entries(values).forEach(atr => {
      if (atr[1] && props.selectors[atr[0]]) {
        let parsedVal = Object.entries(props.selectors[atr[0]]).find(ent => {
          return ent[1].name === atr[1];
        });
        parsed[`${atr[0]}Id`] = parsedVal[1].id;
      } else if(props.selectors[atr[0]]) {
        parsed[`${atr[0]}Id`] = null;
      } else if(atr[1] === "") {
        parsed[atr[0]] = null;
      } else {
        parsed[atr[0]] = atr[1];
      }
    })

    parsed['artistId'] = props.artistId;

    props.formAction(parsed).then(({ artworks }) => {
      console.log(artworks);
      console.log(artistId, artworkId);
      artworks[artworkId] ? props.history.push(`/${artistId}/${artworkId}`) : null;
    });
  };

  return(
    <Formik
      initialValues={props.artwork}
      onSubmit={handleSubmit}
    >
      <Form
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
              <label>
                Artwork Title:
                <Field
                  type="text"
                  name="name"
                  className="artwork-form-input"
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
              <label>
                Artwork Creation Date:
                <Field
                  type="date"
                  name="date"
                  className="artwork-form-input"
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
                <Field
                  type="url"
                  name="imageUrl"
                  className="artwork-form-input"
                />
              </label>
              <label
              >
                Caption for Image:
                <Field
                  type="text"
                  name="imageCaption"
                  className="artwork-form-input"
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
                onClick={ e => {
                  e.preventDefault();
                  if (window.confirm("All changes will be unsaved. Are you sure?")){
                    props.history.push('/');
                  };
                }}
                className="artist-form-cancel"
              >
                Cancel
              </span>
            </div>
          </li>
        </ul>
      </Form>
    </Formik>
  )
}

