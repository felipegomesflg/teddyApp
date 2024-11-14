import React, { useState } from 'react';
import Card from './Card';

type Data = {
  id: number;
  name: string;
  salary: number;
  company: string;
};

type CardGroupProps = {
  data: Data[];
  onAdd: (data: Data) => void;
  onEdit: (data: Data) => void;
  onDelete: (id: number) => void;
};

const CardGroup: React.FC<CardGroupProps> = ({ data, onAdd, onEdit, onDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(16);

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
            <Card data={item} onAdd={() => onAdd(item)} onEdit={() => onEdit(item)} onDelete={() => onDelete(item.id)} />
          </div>
        ))}
      </div> 
      <div className="card-controls">
        <button

          onClick={onAdd}
          className="create-client-btn"
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
