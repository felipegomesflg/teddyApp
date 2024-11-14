import React from 'react';

type Data = {
  id: number;
  name: string;
  salary: string;
  company: string;
};

type CardProps = {
  data: Data;
  onEdit: () => void;
  onDelete: () => void;
};

const Card: React.FC<CardProps> = ({ data, onEdit, onDelete }) => {
  return (
    <div className="card client-box">
      <div className="card-content">
        <p><b>{data.name}</b></p>
        <p>Salário: R$ {parseFloat(data.salary).toFixed(2)}</p>
        <p>Empresa: {data.company}</p>
      </div>
      <div className="card-action">
        <i className="material-icons" >
          add
        </i>
        <i className="material-icons" onClick={onEdit}>
          edit
        </i>
        <i className="material-icons red-text darken-4" onClick={onDelete}>
          delete
        </i>
      </div>
    </div>
  );
};

export default Card;
