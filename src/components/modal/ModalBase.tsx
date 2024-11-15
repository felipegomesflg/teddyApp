import React, { useEffect, useRef } from 'react';
import './ModalBase.css';
type ModalBaseProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  footer?: React.ReactNode;
};

const ModalBase: React.FC<ModalBaseProps> = ({ id, title, children, onClose, footer }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const modalInstance = useRef<M.Modal | null>(null);

  useEffect(() => {
    if (modalRef.current) {
      modalInstance.current = M.Modal.init(modalRef.current, {
        onCloseEnd: () => {
          onClose();

        },
      });
      modalInstance.current.open();
    }

    return () => {
      modalInstance.current?.destroy();
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <div id={id} ref={modalRef} className="modal">
      <div className="modal-header">
        {<h2>{title}</h2>}
        <a className="modal-close" onClick={onClose}>
          <i className="material-icons">close</i> {/* Ícone de fechar */}
        </a>
      </div>
      <div className="modal-body">
        {children}
      </div>
      <div className="modal-footer">
        {footer }
      </div>
    </div>
  );
};

export default ModalBase;
