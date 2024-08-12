import React from "react";
import Header from "../components/Common/Header"
import "../components/styles-pages/stylewallet.css"

function Wallet () {


return (

    <>
    <Header />
    <div className="form-box">
        <h1 >Seleccionar cripto</h1>
      <input type="text" placeholder="Ingresa crypto" className="input-field" />
      <input type="text" placeholder="Cantidad" className="input-field" />
      <button className="submit-button">Enviar</button>
    </div>
    </>
    

)

}

export default Wallet;