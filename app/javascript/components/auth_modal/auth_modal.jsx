import React, { useState } from 'react';
import Modal from 'react-modal';
import ModalContent from './modal_content.jsx';

Modal.setAppElement('#root');
export default (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <React.Fragment>
      <button onClick={() => setShowModal(true)}>Sign In</button>
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Example Modal"
      >
        <ModalContent formType="login" />
      </Modal>
    </React.Fragment>
  )
}
