import React, { useState } from 'react';

const Modal = ({ isModalShowing, setIsModalShowing }) => {
  return (
      <div>
        {isModalShowing 
            ? <div>Modal should appear!
                <button onClick={(event) => setIsModalShowing(false)}>Close Modal</button>
              </div>
            : null
        }
      </div>
  )
}

export default Modal;
