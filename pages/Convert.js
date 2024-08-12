import React, { useState } from "react";
import Header from "../components/Common/Header";
import "../components/styles-pages/convert.css";
import "../app.py"

const Convert = () => {
    const [conversionData, setConversionData] = useState({
        from: '',
        to: 'USD',
        amount: '',
        result: null,
        error: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setConversionData({ ...conversionData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/convertir_cripto', {
                method: 'POST',
                body: new URLSearchParams({
                    from_symbol: conversionData.from,
                    to_symbol: conversionData.to,
                    amount: conversionData.amount
                })
            });
            const data = await response.json();
            if (data.error) {
                setConversionData({ ...conversionData, result: null, error: data.error });
            } else {
                setConversionData({ ...conversionData, result: data, error: null });
            }
        } catch (error) {
            console.error('Error:', error);
            setConversionData({ ...conversionData, result: null, error: 'Error en la conversión' });
        }
    };

    return (
        <>
            <Header />
            <div className="conversion-container">
                <h2>Conversión de criptomonedas</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="from_symbol">Criptomoneda:</label>
                    <input type="text" id="from_symbol" name="from" value={conversionData.from} onChange={handleChange} required />
                    <br /><br />
                    <label htmlFor="to_symbol">Para (símbolo):</label>
                    <select id="to_symbol" name="to" value={conversionData.to} onChange={handleChange} required>
                        <option value="USD">Dólar estadounidense</option>
                        <option value="EUR">Euro</option>
                        <option value="MXN">Peso mexicano</option>
                        <option value="JPY">Yen japonés</option>
                        <option value="CHF">Franco suizo</option>
                        <option value="HKD">Dólar de Hong Kong</option>
                        <option value="NZD">Dólar de Nueva Zelanda</option>
                        <option value="DOGE">DOGE</option>
                        <option value="SGD">Dólar de Singapur</option>
                    </select>
                    <br /><br />
                    <label htmlFor="amount">Cantidad:</label>
                    <input type="number" id="amount" name="amount" value={conversionData.amount} onChange={handleChange} required />
                    <br /><br />
                    <button type="submit">Convertir</button>
                </form>
                <div id="conversionResultado" className="resultado">
                    {conversionData.error ? (
                        <p>Error: {conversionData.error}</p>
                    ) : conversionData.result ? (
                        <>
                            <p>De: {conversionData.result.from}</p>
                            <p>Para: {conversionData.result.to}</p>
                            <p>Cantidad: {conversionData.result.amount}</p>
                            <p>Valor convertido: {conversionData.result.value}</p>
                            <p>Timestamp: {conversionData.result.timestamp}</p>
                        </>
                    ) : (
                        <p>Tu conversión aparecerá aquí</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Convert;
