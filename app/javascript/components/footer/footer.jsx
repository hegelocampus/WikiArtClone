import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default () => (
  <footer className="footer">
    <div className="attribution">
      <span><small>
        All data in this application is liscensed under a Creative Commons Zero (CC0) 1.0 designation.
        All art images are retreived from the <a href="https://aggregator-data.artic.edu/home">Art Institute of Chicago API.</a> If you like the artworks you see here, please support their institution and the great work they do for the open source art community.
      </small></span>
    </div>
    <ul className="social-link-list">
      <li className="list-inline-item">
        <a className="social-link" href="https://bellis.dev">
          <FontAwesomeIcon icon={faAddressCard} />
        </a>
      </li>
      <li className="list-inline-item">
        <a className="social-link" href="https://github.com/hegelocampus/WikiArtClone">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
    </ul>
  </footer>
)

