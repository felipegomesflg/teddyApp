import React, { useEffect, useRef } from 'react';

type ModalConfirmProps = {
  data: { id: number; name: string };
  onConfirm: () => void;
  onClose: () => void;
};

const ModalConfirm: React.FC<ModalConfirmProps> = ({ data, onConfirm, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const modalInstance = useRef<M.Modal | null>(null);

  useEffect(() => {
    if (modalRef.current) {
      modalInstance.current = M.Modal.init(modalRef.current, {
        onCloseEnd: () => {
          onClose();
          document.body.style.overflow = 'visible';
        },
      });
      modalInstance.current.open();
    }

    return () => {
      modalInstance.current?.destroy();
    };
  }, []);

  return (
    <div ref={modalRef} className="modal">
      <div className="modal-content">
        <h4>Confirmar Exclusão</h4>
        <p>Tem certeza que deseja excluir o cliente <strong>{data.name}</strong>?</p>
      </div>
      <div className="modal-footer">
        <button className="btn red" onClick={() => modalInstance.current?.close() || onConfirm()}>
          Excluir
        </button>
        <button className="btn grey" onClick={() => modalInstance.current?.close()}>
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default ModalConfirm;
