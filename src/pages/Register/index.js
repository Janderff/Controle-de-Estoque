import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import logo from '../../assets/logo.png';
import './style.css';

export default function Register() {
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Faça seu Estoque"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entrena plataforma e organize suas compras</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={20} color="#E02041"/>Ja possui cadastro
                    </Link>
                </section>
                <form>
                    <input placeholder="Nome"/>
                    <input type="email" placeholder="Seu email"/>
                    <input type="password" placeholder="Senha"/>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
       
    );
}