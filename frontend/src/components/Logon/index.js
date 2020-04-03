import React, { useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn} from 'react-icons/fi'
import styled from 'styled-components';

import api from '../../services/api';

import './style.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

import ThemeSwitcher from '../ThemeSwitcher';

const ThemeLogon = styled.body`
  background: ${props => props.theme.theme.background};
  
  .logon-container section.form form h1{
    color: ${props => props.theme.theme.color};
  }
  .back-link{
    color: ${props => props.theme.theme.color};
  }
  .back-link:hover{
    opacity: ${props => props.theme.theme.opacity};
  }
  .button{
    background: ${props => props.theme.theme.button}; 
  }
  .button:hover{
    opacity: ${props => props.theme.theme.opacity};
  }
  .toggleTheme{
    margin-left: 300px;
    margin-top: -40px;
  }
`;

export default function Logon({toggleTheme}) {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
      e.preventDefault();

      try {
          const response = await api.post('sessions', { id });

          localStorage.setItem('ongId', id);
          localStorage.setItem('ongName', response.data.name);

          history.push('/profile');
      } catch (err) {
          alert('Falha no login, tente novamente.')
      }
  }

  return(
    <ThemeLogon>
      <div className="logon-container">
        <section className="form">
          <img className="imgLogon" src={logoImg} alt="Be The Hero"></img>
          <div className="toggleTheme">
            <ThemeSwitcher toggleTheme={toggleTheme}/>  
          </div>
          <form onSubmit={handleLogin}>
              <h1>Faça seu Logon</h1>
              <input
                  placeholder="Sua ID"
                  value={id}
                  onChange={e => setId(e.target.value)}
              />
              <button className="button" type="submit">Entrar</button>
              <Link className="back-link" to="/register">
                  <FiLogIn size={16} color="#E02041" />
                  Não tenho cadastro
              </Link>
          </form>
          </section>
          <img src={heroesImg} alt="Heores"></img>
          
      </div>
    </ThemeLogon>
  )
}