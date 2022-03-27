import React from "react";
import Button from "../Button/Button";
import "./Form.css";

function Form(){    
    return(
        <>
        <input id="amount" className="Input" type="number" placeholder="0,00" />
        
        <select id="currency_base">
            <option value="USD">Dólar (USD)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="BRL">REAL (BRL)</option>
        </select>

        <input id="result" className="Input" type="text" placeholder="0,00" disabled/>

        <select id="currency_secondary">
            <option value="USD">Dólar (USD)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="BRL">REAL (BRL)</option>
        </select>

        <Button />
        </>
    )
}

export default Form;