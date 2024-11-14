import React, { useEffect, useRef } from 'react';

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
      <div className="modal-content">
        <h4>{title}</h4>
        {children}
      </div>
      <div className="modal-footer">
        {footer || (
          <button className="btn red" onClick={() => modalInstance.current?.close()}>
            Fechar
          </button>
        )}
      </div>
    </div>
  );
};

export default ModalBase;
