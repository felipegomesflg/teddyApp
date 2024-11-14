import React, { useState, useEffect } from 'react';
import CardGroup from '../components/CardGroup';
import ModalBase from '../components/ModalBase';
import { getAll, create, update, remove } from '../services/apiService';

type Data = {
  id: number | null;
  name: string;
  salary: number;
  company: string;
};

const Clients: React.FC = () => {
  const [dataList, setDataList] = useState<Data[]>([]);
  const [modalForm, setModalForm] = useState<{ open: boolean; action: 'add' | 'edit'; data: Data | null }>({
    open: false,
    action: 'add',
    data: null,
  });

  const [modalConfirm, setModalConfirm] = useState<{ open: boolean; data: Data | null }>({
    open: false,
    data: null,
  });

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const clients = await getAll<Data>('/clients');
        setDataList(clients);
      } catch (error) {
        console.error('Erro ao buscar clientes:', error);
      }
    };

    fetchClients();
  }, []);


  const handleAdd = async (newData: Omit<Data, 'id'>) => {
    try {
      const createdClient = await create<Data>('/clients', { ...newData, id: null });
      setDataList([...dataList, createdClient]);
    } catch (error) {
      console.error('Erro ao adicionar cliente:', error);
    }
  };

  const handleEdit = async (updatedData: Data) => {
    try {
      console.log(updatedData);
      const editedClient = await update<Data>('/clients', updatedData.id, updatedData);
      setDataList(dataList.map((item) => (item.id === updatedData.id ? editedClient : item)));
    } catch (error) {
      console.error('Erro ao editar cliente:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {

      await remove('/clients', id);
      setDataList(dataList.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Erro ao excluir cliente:', error);
    }
  };


  const formatCurrency = (value: string): string => {
    value = value.replace(/\D/g, ''); 
    if (!value) return '0,00'; 

    const options = { minimumFractionDigits: 2 };
    const result = new Intl.NumberFormat('pt-BR', options).format(
      parseFloat(value) / 100 
    );

    return result;
  };

  const parseCurrency = (value: string): number => {
    const numericValue = value.replace(/\./g, '').replace(',', '.');
    return parseFloat(numericValue);
  };

  return (
    <main>
      <h1>Clientes</h1>
      <CardGroup
        data={dataList}
        onEdit={(data) => setModalForm({ open: true, action: 'edit', data })}
        onDelete={(data) => setModalConfirm({ open: true, data })}
      />
      <button
        onClick={() => setModalForm({ open: true, action: 'add', data: null })}
        className="create-client-btn"
      >
        Criar Cliente
      </button>

      {/* Modal de Adicionar/Editar Cliente */}
      {modalForm.open && (
        <ModalBase
          id="form-modal"
          title={modalForm.action === 'add' ? 'Adicionar Cliente' : 'Editar Cliente'}
          onClose={() => setModalForm({ open: false, action: 'add', data: null })}
          footer={
            <>
              <button
                className="btn"
                onClick={() => {
                  const formData: Data = {
                    id: modalForm.data?.id || Date.now(),
                    name: (document.getElementById('name') as HTMLInputElement).value,
                    salary: parseCurrency((document.getElementById('salary') as HTMLInputElement).value),
                    company: (document.getElementById('company') as HTMLInputElement).value,
                  };
                  modalForm.action === 'add' ? handleAdd(formData) : handleEdit(formData);
                  setModalForm({ open: false, action: 'add', data: null });
                }}
              >
                Confirmar
              </button>
              <button className="btn red" onClick={() => setModalForm({ open: false, action: 'add', data: null })}>
                Cancelar
              </button>
            </>
          }
        >
          <div className="input-field">
            <input id="name" type="text" defaultValue={modalForm.data?.name} placeholder="Nome" required />
          </div>
          <div className="input-field">
            <input
              id="salary"
              type="text"
              defaultValue={modalForm.data ? formatCurrency(String(modalForm.data.salary * 100)) : ''}
              placeholder="Salário"
              required
              onKeyUp={(e) => {
                const input = e.target as HTMLInputElement;
                const formattedValue = formatCurrency(input.value);
                input.value = formattedValue;
              }}
              onBlur={(e) => {
              
                const input = e.target as HTMLInputElement;
                input.value = formatCurrency(input.value);
              }}
            />
          </div>
          <div className="input-field">
            <input id="company" type="text" defaultValue={modalForm.data?.company} placeholder="Empresa" required />
          </div>
        </ModalBase>
      )}

      {/* Modal de Confirmação de Exclusão */}
      {modalConfirm.open && modalConfirm.data && (
        <ModalBase
          id="delete-modal"
          title="Confirmar Exclusão"
          onClose={() => setModalConfirm({ open: false, data: null })}
          footer={
            <>
              <button
                className="btn red"
                onClick={() => {
                  handleDelete(modalConfirm.data);
                  setModalConfirm({ open: false, data: null });
                }}
              >
                Excluir
              </button>
              <button className="btn grey" onClick={() => setModalConfirm({ open: false, data: null })}>
                Cancelar
              </button>
            </>
          }
        >
          <p>Tem certeza que deseja excluir o cliente <strong>{modalConfirm.data.name}</strong>?</p>
        </ModalBase>
      )}
    </main>
  );
};

export default Clients;
