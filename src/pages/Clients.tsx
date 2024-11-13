import React, { useState } from 'react';
import CardGroup from '../components/CardGroup';
import Modal from '../components/Modal';

type Data = {
  id: number;
  name: string;
  salary: number;
  company: string;
};

const Clients: React.FC = () => {
  const [dataList, setDataList] = useState<Data[]>([
    { id: 1, name: 'João', salary: 2000, company: 'Empresa A' },
    { id: 2, name: 'Maria', salary: 2500, company: 'Empresa B' },
    { id: 3, name: 'Pedro', salary: 1800, company: 'Empresa C' },
    { id: 4, name: 'Ana', salary: 3000, company: 'Empresa D' },
    { id: 1, name: 'João', salary: 2000, company: 'Empresa A' },
    { id: 2, name: 'Maria', salary: 2500, company: 'Empresa B' },
    { id: 3, name: 'Pedro', salary: 1800, company: 'Empresa C' },
    { id: 4, name: 'Ana', salary: 3000, company: 'Empresa D' },
    { id: 1, name: 'João', salary: 2000, company: 'Empresa A' },
    { id: 2, name: 'Maria', salary: 2500, company: 'Empresa B' },
    { id: 3, name: 'Pedro', salary: 1800, company: 'Empresa C' },
    { id: 4, name: 'Ana', salary: 3000, company: 'Empresa D' },
    { id: 1, name: 'João', salary: 2000, company: 'Empresa A' },
    { id: 2, name: 'Maria', salary: 2500, company: 'Empresa B' },
    { id: 3, name: 'Pedro', salary: 1800, company: 'Empresa C' },
    { id: 4, name: 'Ana', salary: 3000, company: 'Empresa D' },
    { id: 1, name: 'João', salary: 2000, company: 'Empresa A' },
    { id: 2, name: 'Maria', salary: 2500, company: 'Empresa B' },
    { id: 3, name: 'Pedro', salary: 1800, company: 'Empresa C' },
    { id: 4, name: 'Ana', salary: 3000, company: 'Empresa D' },
    // Adicione mais dados para testar paginação
  ]);

  const [modal, setModal] = useState<{ open: boolean; action: string; data: Data | null }>({
    open: false,
    action: '',
    data: null,
  });

  const handleAdd = (newData: Data) => {
    setDataList([...dataList, newData]);
  };

  const handleEdit = (updatedData: Data) => {
    setDataList(dataList.map((item) => (item.id === updatedData.id ? updatedData : item)));
  };

  const handleDelete = (id: number) => {
    setDataList(dataList.filter((item) => item.id !== id));
  };

  return (
    <main>
      <h1>Clientes</h1>
      <CardGroup data={dataList} onEdit={handleEdit} onDelete={handleDelete} />
      <button
        onClick={() => setModal({ open: true, action: 'add', data: null })}
        className="create-client-btn"
      >
        Criar Cliente
      </button>
      {modal.open && (
        <Modal
          action={modal.action as 'add' | 'edit'}
          data={modal.data}
          onClose={() => setModal({ open: false, action: '', data: null })}
          onSubmit={modal.action === 'add' ? handleAdd : handleEdit}
        />
      )}
    </main>
  );
};

export default Clients;
