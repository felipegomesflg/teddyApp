import React from 'react';

import addIcon from '../assets/icons/add.svg';
import editIcon from '../assets/icons/edit.svg';
import deleteIcon from '../assets/icons/delete.svg';

type Data = {
  id: number;
  name: string;
  salary: string;
  company: string;
};

type CardProps = {
  data: Data;
  onAdd: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

const Card: React.FC<CardProps> = ({ data, onAdd, onEdit, onDelete }) => {
  return (
    <div className="card client-box">
      <div className="card-content">
        <p><b>{data.name}</b></p>
        <p>Salário: R$ {parseFloat(data.salary).toFixed(2)}</p>
        <p>Empresa: {data.company}</p>
      </div>
      <div className="card-action">
        <i className="material-icons red-text darken-4" onClick={onAdd}>
          <img src={addIcon} alt="Edit" />
        </i>
        <i className="material-icons red-text darken-4" onClick={onEdit}>
          <img src={editIcon} alt="Edit" />
        </i>
        <i className="material-icons red-text darken-4" onClick={onDelete}>
          <img src={deleteIcon} alt="Edit" />
        </i>
      </div>
    </div>
  );
};

export default Card;
