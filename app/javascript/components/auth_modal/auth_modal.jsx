import React, { useState } from 'react';
import Modal from 'react-modal';
import ModalContent from './modal_content.jsx';

Modal.setAppElement('#root');
export default (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <a onClick={() => setShowModal(true)} className='nav-menu-auth-anchor'>
        <span>Log In</span>
      </a>
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel='Sign In/Sign up'
        style={
          {
            overlay: {
              backgroundColor: null
            },
            content: {
              padding: 0,
              backgroundColor: null,
              border: null,
              fontColor: null
            }
        }
        }
      >
        <ModalContent formType='login' />
      </Modal>
    </>
  );
};
