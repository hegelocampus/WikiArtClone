import React, { useEffect } from 'react';
import { NEW, EDIT } from './edit';
import { Formik, Form, Field } from 'formik';
import RenderErrors from './render_errors';
// FIXME  Fix cancel button
// TODO   Break up form into smaller sub-components
// TODO   Implement errors right above submit button

export default ({
  artwork,
  formType,
  formAction,
  history,
  selectors,
  match,
  requestAllSelectors,
  requestArtwork
}) => {
  const { artworkId, artistId } = match.params;
  const idMatch = /(.+)(?=Id$)/;

  useEffect(() => {
    requestAllSelectors('artwork');

    if (formType === EDIT) {
      requestArtwork(artistId, artworkId);
    }
  },
  [requestAllSelectors, formType, match]
  );

  const assocInputs = [];
  Object.entries(selectors).forEach(att => {
    const parsedName = `${att[0]}Id`;
    assocInputs.push(
      <label
        key={`${att[0]}-label`}
      >
        {att[0]}
        <Field
          type='text'
          className='artwork-form-input'
          as='select'
          name={parsedName}
          required={att[0] === 'style'}
        >
          {Object.values(att[1]).map(({ id, name }) =>
            <option key={id} value={name}>{name}</option>
          )}
        </Field>
      </label>
    );
  });

  const handleSubmit = values => {
    const parsed = {};
    Object.entries(values).forEach(atr => {
      if (atr[1] && selectors[atr[0]]) {
        const parsedVal = Object.entries(selectors[atr[0]]).find(ent => {
          return ent[1].name === atr[1];
        });
        parsed[`${atr[0]}Id`] = parsedVal[1].id;
      } else if (selectors[atr[0]]) {
        parsed[`${atr[0]}Id`] = null;
      } else if (atr[1] === '') {
        parsed[atr[0]] = null;
      } else {
        parsed[atr[0]] = atr[1];
      }
    });

    parsed.artistId = artistId;

    formAction(parsed).then((val) => {
      if (val.artwork.id) {
        history.push(`/${artistId}/${val.artwork.id}`);
      }
    });
  };

  if ((!artwork)) return <span>Loading...</span>;
  return (
    <Formik
      initialValues={artwork}
      onSubmit={handleSubmit}
    >
      <Form
        className='artwork-form'
      >
        <ul>
          <li>
            <header
              className='artwork-form-subheader'
            >
              Title and Image
            </header>
            <div className='artwork-form-bio'>
              <label>
                Artwork Title:
                <Field
                  type='text'
                  name='name'
                  className='artwork-form-input'
                  required
                />
              </label>
            </div>
          </li>
          <li>
            <header
              className='artwork-form-subheader'
            >
              Dates
            </header>
            <div className='artwork-form-dates'>
              <label>
                Artwork Creation Date:
                <Field
                  type='date'
                  name='date'
                  className='artwork-form-input'
                />
              </label>
            </div>
          </li>
          <li>
            <header
              className='artwork-form-subheader'
            >
              Artwork Image
            </header>
            <div>
              <label>
                Image URL:
                <Field
                  type='url'
                  name='imageUrl'
                  className='artwork-form-input'
                />
              </label>
              <label>
                Image thumbnail URL:
                <Field
                  type='url'
                  name='imageThumbUrl'
                  className='artwork-form-input'
                />
              </label>
              <label>
                Caption for Image:
                <Field
                  type='text'
                  name='imageCaption'
                  className='artwork-form-input'
                />
              </label>
            </div>
          </li>
          <li>
            <header
              className='artwork-form-subheader'
            >
              Classification
            </header>
            <div className='artwork-form-associations'>
              {assocInputs}
            </div>
          </li>
          <li>
            <RenderErrors />
          </li>
          <li
            className='artwork-form-buttons-container'
          >
            <div>
              <button
                type='submit'
                className='artwork-form-submit'
              >
                Save
              </button>
              <span
                onClick={e => {
                  e.preventDefault();
                  if (
                    window.confirm('All changes will be unsaved. Are you sure you want to discard these changes?')
                  ) {
                    history.push(`/${artistId}/${artworkId}`);
                  }
                }}
                className='artist-form-cancel'
              >
                Cancel
              </span>
            </div>
          </li>
        </ul>
      </Form>
    </Formik>
  );
};
