import React, { useState, useEffect } from 'react';
import './Toast.css'; 

const Toast = ({ message, type, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return isVisible ? (
    <div className={`toast toast-body toast-${type}`} style={type === 'success' ? { backgroundColor: '#28a745'} : { backgroundColor: '#dc3545'} } role="alert" aria-live="assertive" aria-atomic="true">
        <button type="button" className="btn-close" onClick={() => setIsVisible(false)}>X</button>
        <strong className={`me-auto text`}>{type === 'success' ? 'Sucesso: ' : 'Erro: '}</strong>

        {message}
    </div>
  ) : null;
};

export default Toast;
