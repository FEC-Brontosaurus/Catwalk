import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles/ModalStyles.css';

const MODAL_STYLE = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0, .35)',
  zIndex: 1000
}


const AnswerModal = ({ open, setOpen }) => {
  if(!open) {
    return null;
  } else {
    return ReactDOM.createPortal(
      <>
      <div id="OVERLAY_STYLES"></div>
      <div style={MODAL_STYLE}>
        <button type="button" onClick={() => setOpen(false)}>Close Modal</button>
      </div>
      </>, document.getElementById('portal')
    )
  }


}

export default AnswerModal;

