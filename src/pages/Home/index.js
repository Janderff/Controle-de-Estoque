import React from 'react';
import {FiPower, FiEdit} from "react-icons/fi";
import {Link} from "react-router-dom";


import logo from "../../assets/logo.png";

import './styles.css'; 

 export default function Home() {
   return(
     <div className="home-container">
      <header>
        <img src={logo} alt="Sistema de Controle de Etoque"/>
        <span>Bem Vindo ao Sistema de Controle de Estoque</span>
        <Link className="button" to="/home/new">Cadastrar novo Produto</Link>
        <button type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>
      <h1>Produtos Cadastrados</h1>
      <div className="table">
        <table>
          <tr>
            <th>Name</th>
            <th>Categoria</th>
            <th>Quantidade</th>
            
            
          </tr>
          <tbody>
            <tr>
              <td>Detergente</td>
              <td>Limpeza</td>
              <td>8</td>
              <td><Link to="/home/edit"><FiEdit/></Link></td>
              
            </tr>

            <tr>
              <td>Data1</td>
              <td>Data1</td>
              <td>Data1</td>
              <td><Link to="/home/edit"><FiEdit/></Link></td>
              
            </tr>
            <tr>
              <td>Data1</td>
              <td>Data1</td>
              <td>Data1</td>
              <td><Link to="/home/edit"><FiEdit/></Link></td>
              
            </tr>
            <tr>
              <td>Data1</td>
              <td>Data1</td>
              <td>Data1</td>
              <td><Link to="/home/edit"><FiEdit/></Link></td>
              
            </tr>
          </tbody>
        </table>
      </div>
        
     </div>
   );
 }