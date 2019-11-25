import React, { useEffect } from 'react';
import { NEW, EDIT } from './edit';
import { Formik, Form, Field } from 'formik';
import RenderErrors from './render_errors';
//TODO   Break up form into smaller sub-components
//TODO   Implement errors right above submit button

export default props => {
  const { artistId } = props.match.params;
  const idMatch = /(.+)(?=Id$)/;

  useEffect(() => {
    props.requestAllSelectors("artist");

    if (props.formType === EDIT) {
      props.requestArtist(artistId);
    }
  },
    [props.requestAllSelectors, props.requestArtist, props.match]
  )

  if ((!props.artist) || (!props.selectors)) return <span>Loading...</span>;

  let assocInputs = [];
  Object.entries(props.selectors).forEach(att => {
    let parsedName = `${att[0]}Id`;
    assocInputs.push(
      <label
        key={ `${att[0]}-label` }
      >
        { att[0] }
        <Field
          className="artist-form-input"
          as="select"
          name={ parsedName }
          required={ att[0] === "artMovements" }
        >
          {Object.values(att[1]).map(({id, name}) =>
            <option key={id} value={name}>{name}</option>
          )}
        </Field>
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
    delete parsed['artworks'];

    props.formAction(parsed).then(() => {
      props.history.push(`/${artistId}`);
    });
  };

  props.artist.deathDate = '';
  return(
    <Formik
      initialValues={props.artist}
      onSubmit={handleSubmit}
    >
      <Form
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
                <Field
                  type="text"
                  name="name"
                  className="artist-form-Field"
                  required
                />
              </label>
              <label
              >
                Image URL:
                <Field
                  type="url"
                  name="imageUrl"
                  className="artist-form-Field"
                />
              </label>
              <label
              >
                Caption for Image:
                <Field
                  type="text"
                  name="imageCaption"
                  className="artist-form-Field"
                />
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
                <Field
                  type="date"
                  name="birthDate"
                  className="artist-form-Field"
                />
              </label>
              <label
              >
                Date the Artist Died (If Applicable):
              </label>
              <Field
                type="date"
                name="deathDate"
                className="artist-form-Field"
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
              <Field
                type="url"
                name="wikiUrl"
                className="artist-form-Field"
              />
            </div>
          </li>
          <li>
            <RenderErrors />
          </li>
          <li
            className="artist-form-buttons-container"
          >
            <div>
              <button
                type="submit"
                className="artist-form-submit"
              >
                Save
              </button>
              <span
                onClick={ e => {
                  e.preventDefault();
                  if (window.confirm("All changes will be unsaved. Are you sure you want to discard these changes?")){
                    props.history.push(`/${artistId}`);
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

