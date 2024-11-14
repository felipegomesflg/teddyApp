import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [name, setName] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    localStorage.setItem('userName', name);
    navigate('/clients');
  };

  return (
    <div style={styles.container} className='home'>
      <h2 style={styles.h2}>Olá, seja bem-vindo!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <button type="submit" className="btn" style={styles.button}>
          Entrar
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100vh - 40px)',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
  },
  input: {
    padding: '10px',
    fontSize: '18px',
    width: '500px',
    height: 'auto',
    display:'block',
    marginBottom: '10px'
  },
  button: {
    padding: '4px',
    width: '500px',
    height: 'auto',
  },
  h2: {
    marginTop: '0px',
    fontSize: '36px'
  }
};

export default Home;
