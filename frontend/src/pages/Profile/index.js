import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiEdit, FiPower } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
  const [clients, setClients] = useState([]);

  const history = useHistory();
  
  useEffect(() => {
    api.get('clients').then(res => {
      setClients(res.data);
    })
  }, []);

  /*async function handleEditClient(id) {
    await api.put(`clients/${id}`);

    setClients(clients.filter(client => client.id !== id ));
  }*/

  async function handleDeleteClient(id) { 
    await api.delete(`clients/${id}`);

    setClients(clients.filter(client => client.id !== id ));
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/logon');
  }

  function handleEdit() {
    localStorage.clear();

    history.push('/edit');
  }


  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Cadastro de Clientes" />
        <span>Bem vindo</span>

        <Link className="button" to="/register">Cadastrar novo cliente</Link>
        <button onClick={handleLogout} type="button">
        <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Clientes Cadastrados</h1>

      <ul>
        {clients.map(client => (
          <li key={client.id}>
            <strong>NOME:</strong>
            <p>{client.name}</p>

            <strong>EMAIL</strong>
            <p>{client.email}</p>

            <strong>WHATSAPP</strong>
            <p>{client.whatsapp}</p>


            <strong>CIDADE</strong>
            <p>{client.city}</p>

            <strong>UF</strong>
            <p>{client.uf}</p>

            <button onClick={() => handleEdit(client.id)} type="button">
              <FiEdit size={24} color="#a8a8b3" />
            </button>

            <Link className="button" onClick={() => handleDeleteClient(client.id)}>Deletar</Link>

          </li>        
        ))}
      </ul>
    </div>
  );
}