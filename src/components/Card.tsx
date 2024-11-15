import React from 'react';

import addIcon from '../assets/icons/add.svg';
import editIcon from '../assets/icons/edit.svg';
import deleteIcon from '../assets/icons/delete.svg';
import checkIcon from '../assets/icons/check.png';
import minusIcon from '../assets/icons/minus.svg';

type Data = {
  id: number;
  name: string;
  salary: string;
  company: string;
};

type CardProps = {
  data: Data;
  onEdit?: () => void;
  onDelete?: () => void;
  onUnSelect?: () => void;
  onSelect?: (id: number) => void;
  isSelected: boolean;
};

const Card: React.FC<CardProps> = ({ data, onSelect, onEdit, onDelete, onUnSelect, isSelected }) => {
  return (
    <div className="card client-box">
      <div className="card-content">
        <p><b>{data.name}</b></p>
        <p>Salário: R$ {parseFloat(data.salary).toFixed(2)}</p>
        <p>Empresa: {data.company}</p>
      </div>
      <div className={onUnSelect ? 'end card-action' : 'card-action'} >
        {onSelect && (
          <i className="material-icons red-text darken-4" onClick={() => onSelect(data.id)} >
            <img src={isSelected ? checkIcon : addIcon} alt="Select" />
          </i>
        )}
        {onEdit && (
          <i className="material-icons red-text darken-4" onClick={onEdit}>
            <img src={editIcon} alt="Edit" />
          </i>
        )}
        {onDelete && (
          <i className="material-icons red-text darken-4" onClick={onDelete}>
            <img src={deleteIcon} alt="Edit" />
          </i>
        )}
        {onUnSelect && (
          <i className="material-icons red-text darken-4" onClick={onUnSelect}>
            <img src={minusIcon} alt="Edit" />
          </i>
        )}
      </div>
    </div>
  );
};

export default Card;
