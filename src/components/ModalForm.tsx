import React, { useEffect, useRef } from 'react';

type Data = {
  id: number;
  name: string;
  salary: number;
  company: string;
};

type ModalFormProps = {
  action: 'add' | 'edit';
  data?: Data | null;
  onSubmit: (data: Data) => void;
  onClose: () => void;
};

const ModalForm: React.FC<ModalFormProps> = ({ action, data, onSubmit, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const modalInstance = useRef<M.Modal | null>(null);

  useEffect(() => {
    if (modalRef.current) {
      const instance = M.Modal.init(modalRef.current);
      instance.open();

      return () => {
        instance.destroy();
        
      };
    }
  }, []);

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

  const handleSubmit = () => {
    const formData: Data = {
      id: data?.id || Date.now(),
      name: (document.getElementById('name') as HTMLInputElement).value,
      salary: parseFloat((document.getElementById('salary') as HTMLInputElement).value),
      company: (document.getElementById('company') as HTMLInputElement).value,
    };
    onSubmit(formData);
    onClose();
  };

  return (
    <div ref={modalRef} className="modal">
      <div className="modal-content">
        <h4>{action === 'add' ? 'Adicionar Cliente' : 'Editar Cliente'}</h4>
        <div className="input-field">
          <input id="name" type="text" defaultValue={data?.name} placeholder="Nome" required />
        </div>
        <div className="input-field">
          <input id="salary" type="number" defaultValue={data?.salary} placeholder="Salário" required />
        </div>
        <div className="input-field">
          <input id="company" type="text" defaultValue={data?.company} placeholder="Empresa" required />
        </div>
      </div>
      <div className="modal-footer">
        <button className="btn" onClick={handleSubmit}>
          Confirmar
        </button>
        <button className="btn red" onClick={onClose}>
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default ModalForm;
