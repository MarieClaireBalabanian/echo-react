import { createPortal } from 'react-dom';
import PropTypes from "prop-types";
import '../../assets/styles/components/_GlobalModal.scss';
import { useEffect } from 'react';


const GlobalModal = ({children, isOpen, onClose }) => {
  const modalRoot = document.getElementById('modal-root');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
    
  }, []);
  
  return createPortal(
    <div className="modal"
      onClick ={(e) => e.stopPropagation()}>
      <button onClick={onClose} className="close">X</button>
      {children}
    </div>,
    modalRoot
  );
}

GlobalModal.propTypes = {
  children: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};


export default GlobalModal;

