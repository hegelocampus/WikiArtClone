import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default () => (
  <footer class="footer">
    <ul class="social-link-list">
      <li class="list-inline-item">
        <a class="social-link" href="https://bellis.dev">
          <FontAwesomeIcon icon={faAddressCard} />
        </a>
      </li>
      <li class="list-inline-item">
        <a class="social-link" href="https://github.com/hegelocampus/WikiArtClone">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
    </ul>
  </footer>
)

