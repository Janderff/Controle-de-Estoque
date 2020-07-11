import React from 'react';
import { Link } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import logo from '../../assets/logo.png';
import './style.css';

export default function NewProduct() {
    return (
        <div className="product-container">
            <div className="content">
                <section>
                    <img src= {logo} alt="Faça seu estoque"/>
                    <h1>Edite seu produto</h1>
                    <p>Atualiza  seu produto para que no futuro sua lista de compras seja gerada de forma correta</p>
                    <Link className="back-link" to="/home">
                        <FiArrowLeft size={20} color="#E02041"/>Voltar para a Home
                    </Link>
                </section>
                <form>
                    <input placeholder="Nome do produto" />
                    <input placeholder="Categoria" />
                    <input placeholder="Quantidade em estoque" />
                    <input placeholder="Estoque minimo" />
                    <button className="button" type="submit">Salvar</button>
                </form>
            </div>
        </div>
    );
}