import React from 'react';
import {Link} from 'react-router-dom';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import './style.css';

export default function Create(){
    return(
        <div className="create-container">
            <section>
                <h1>Casdatro</h1>
                <p>Faça o cadastro do seu produto</p>
                
            </section>
            <form>
                
                <input placeholder="Product's name" />
                <input placeholder="Product quantity" />
                <input placeholder="Product quantity" />
                <select name="product">
                    <option value="cleaning">Cleaning</option>
                    <option value="food">Food</option>
                </select>

                
            </form>
            <Link className="back-link" to="/create">
                    <ArrowBackIosRoundedIcon />
                </Link>
        </div>
    );
}
