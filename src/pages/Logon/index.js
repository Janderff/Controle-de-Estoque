import React from 'react';

import {Link} from 'react-router-dom';

import './style.css'

import logo from '../../assets/logo.png';

export default function Logon(){
    return(
      <div className="logon-container">
        <div className="content">
        
          <section className="form">
          
              <form action="">
                <h1>Faça seu Logon</h1>

                  <input placeholder="Seu email"/>
                  <input placeholder="Sua senha"/>
                  <button className="button" type="submit" to="/newProduct">Entrar</button>

                  <Link className="back-link" to="/register">Não possuo cadastro</Link>
              </form>
          </section>
          <img src={logo} alt="Controle de Estoque"/>
        </div>
      </div>
    );
}