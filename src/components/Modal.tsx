import React, { useState } from 'react';

type Data = {
  id: number;
  name: string;
  salary: number;
  company: string;
};

type ModalProps = {
  action: 'add' | 'edit';
  data: Data | null;
  onClose: () => void;
  onSubmit: (data: Data) => void;
};

const Modal: React.FC<ModalProps> = ({ action, data, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<Data>({
    id: data?.id || Date.now(),
    name: data?.name || '',
    salary: data?.salary || 0,
    company: data?.company || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'salary' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="modal open">
      <div className="modal-content">
        <h4>{action === 'add' ? 'Adicionar Dados' : 'Editar Dados'}</h4>
        <div className="input-field">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nome"
          />
        </div>
        <div className="input-field">
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            placeholder="Salário"
          />
        </div>
        <div className="input-field">
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Empresa"
          />
        </div>
      </div>
      <div className="modal-footer">
        <button onClick={handleSubmit} className="btn">
          Confirmar
        </button>
        <button onClick={onClose} className="btn red">
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default Modal;
