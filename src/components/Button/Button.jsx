import React from "react";
import "./Button.css";
import api from "../../services/api";

function Button() {
  function getCurrency() {
    const base = document.getElementById('currency_base').value;
    const secondary = document.getElementById('currency_secondary').value;
    const amount = document.getElementById('amount').value;
    const result = document.getElementById('result');

    api
      .get(`?currency_base=${base}&currency_secondary=${secondary}&amount=${amount}`)
      .then(function (response) {
        if (response.data['result'] !== undefined){
          result.value = response.data['result'];
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function (e) {
        /*  */
      });
  }

  return (
    <>
      <button onClick={getCurrency}>Converter</button>
    </>
  );
}

export default Button;
