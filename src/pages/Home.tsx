import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [name, setName] = useState<string>('');
  const navigate = useNavigate();

  const handleEnter = () => {
    localStorage.setItem('userName', name);
    navigate('/clients');
  };

  return (
    <div style={styles.container}>
      <h1>Bem-vindo</h1>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleEnter} className="btn">
        Entrar
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
  },
  input: {
    marginBottom: '20px',
    padding: '10px',
    fontSize: '1rem',
    width: '300px',
  },
};

export default Home;
