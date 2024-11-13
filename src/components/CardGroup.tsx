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
  onEdit: (data: Data) => void;
  onDelete: (id: number) => void;
};

const CardGroup: React.FC<CardGroupProps> = ({ data, onEdit, onDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(16);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Volta para a primeira página ao mudar a quantidade por página
  };

  return (
    <div>
            
      <div className="card-group-header">
        <span>{data.length} clientes encontrados</span>
        <div className="items-per-page">
          <label htmlFor="itemsPerPage">Registros por página:</label>
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
            <Card data={item} onEdit={() => onEdit(item)} onDelete={() => onDelete(item.id)} />
          </div>
        ))}
      </div>

      <div className="pagination-controls">
        <button onClick={handlePrev} disabled={currentPage === 1} className="btn">
          Anterior
        </button>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages} className="btn">
          Próxima
        </button>
      </div>
    </div>
  );
};

export default CardGroup;
