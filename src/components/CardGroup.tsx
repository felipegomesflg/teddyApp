import React, { useState, useEffect } from 'react';
import Card from './Card';

type Data = {
  id: number;
  name: string;
  salary: number;
  company: string;
};

type CardGroupProps = {
  data: Data[];
  onEdit: (data: Data) => void;
  onDelete: (data: Data) => void;
  onAdd: (data: Data) => void;
  onSelectionChange?: (selected: Data[]) => void;
};

const CardGroup: React.FC<CardGroupProps> = ({ data, onAdd, onEdit, onDelete, onSelectionChange }) => {  
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  //LOGICA DE PAGINAÇÃO
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);


  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  //LOGICA DE MULTIPLOS CLIENTES SELECIONADOS
  useEffect(() => {

    const savedSelected = JSON.parse(localStorage.getItem('selectedClients') || '[]');
    setSelectedIds(savedSelected.map((client: Data) => client.id));
  }, []);

  const toggleSelection = (id: number) => {
    let updatedSelectedIds;
    if (selectedIds.includes(id)) {
      updatedSelectedIds = selectedIds.filter((selectedId) => selectedId !== id);
    } else {
      updatedSelectedIds = [...selectedIds, id];
    }

    setSelectedIds(updatedSelectedIds);


    const selectedClients = data.filter((item) => updatedSelectedIds.includes(item.id));
    localStorage.setItem('selectedClients', JSON.stringify(selectedClients));
  };

  return (
    <div>

      <div className="card-group-header">
        <span><b>{data.length}</b> clientes encontrados</span>
        <div className="items-per-page">
          <label htmlFor="itemsPerPage">Clientes por página:</label>
          <select id="itemsPerPage" value={itemsPerPage} onChange={handleItemsPerPageChange}>
            <option value={4}>4</option>
            <option value={8}>8</option>
            <option value={16}>16</option>
            <option value={32}>32</option>
          </select>
        </div>
      </div>

      <div className="row client-grid">
        {currentItems.map((item) => (
          <div key={item.id} className="col s12 m6 l3">
            <Card
              data={item}
              onEdit={onEdit ? () => onEdit(item) : undefined}
              onDelete={onDelete ? () => onDelete(item) : undefined}
              onSelect={onSelectionChange ? toggleSelection : undefined}
              isSelected={selectedIds.includes(item.id)}
            />
          </div>
        ))}
      </div>
      <div className="card-controls">
        <button

          onClick={onAdd}
          className="client-btn-action"
        >
          Criar Cliente
        </button>

        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              className={`pagination-button ${pageNumber === currentPage ? 'active' : ''}`}
              onClick={() => handlePageClick(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGroup;
