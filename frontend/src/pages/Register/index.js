import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    api.post('clients', data)
    history.push('/');

    /*try {
      const res = await api.post('clients', data);

      alert(`SEU ID de acesso: ${res.data.id}`);

      history.push('/');
    } catch (err) {
      alert('Erro no cadastro, tente novamente.')
    }*/
    
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Cadastro de Clientes"/>

          <h1>Cadastro</h1>
          <p>Preencha os campos e clique em Finalizar para cadastrar o cliente.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size ={16} color="#E02041"/>
            Voltar
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input 
            placeholder="Nome do Cliente" 
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <input 
            type="email" 
            placeholder="E-MAIL" 
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input 
            placeholder="WhatsApp" 
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input 
              placeholder="Cidade" 
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input 
              placeholder="UF" 
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>

          <button className="button" type="submit">Finalizar</button>
        </form>
      </div>
    </div>
  );
}