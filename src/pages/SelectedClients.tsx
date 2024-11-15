import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

type Data = {
  id: number;
  name: string;
  salary: number;
  company: string;
};

const SelectedClients: React.FC = () => {
  const [selectedClients, setSelectedClients] = useState<Data[]>([]);

  useEffect(() => {
    const savedSelected = JSON.parse(localStorage.getItem('selectedClients') || '[]');
    setSelectedClients(savedSelected);
  }, []);

  const handleMassDelete = () => { //fiquei confuso se a ideia era apagar todos clientes da base ou da seleção.
    localStorage.removeItem('selectedClients');
    setSelectedClients([]);
  };

  const handleDelete = (id: number) => {
    const updatedClients = selectedClients.filter((client) => client.id !== id);
    setSelectedClients(updatedClients);
    localStorage.setItem('selectedClients', JSON.stringify(updatedClients));
  };

  return (
    <main>
      <div>
        <div className="row client-grid">
          {selectedClients.map((item) => (
            <div key={item.id} className="col s12 m6 l3">
              <Card
                data={item}
                onUnSelect={() => handleDelete(item.id)} 
                isSelected={true} 
              />
            </div>
          ))}
        </div>

        {selectedClients.length > 0 && (

          <div style={{ padding: '10px' }} >
            <button className="client-btn-action" onClick={handleMassDelete}>
              Remover Todos
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default SelectedClients;
