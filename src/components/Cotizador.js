import React, { useEffect, useState } from 'react'
import './style.css'
import  logo from'../assets/logo.png'
import  logoDolar from'../assets/simbolo.png'
import  euro from'../assets/euro.png'

export const Cotizador = () => {
    
    const [datos, SetDatos] = useState([])
    
    const fetchApi = async () => {
        
        const url = 'https://api.bluelytics.com.ar/v2/latest'
        const respuesta = await fetch(url)

        const data = await respuesta.json();
        
        SetDatos([data])
    }

    console.log(datos)
    
    useEffect(( ) => {
        fetchApi();
    },[])
  
    return (
        <>

        <nav className='menu'>
            <img className='menuLogo' src={logo}></img>
            <p className='menuTexto'>DÓLAR</p>
        </nav>

            <h1 className='containerTitle'>COTIZACION DEL DOLAR HOY, PRECIO DEL DOLAR HOY</h1>

            <hr/>

        {
            datos.map ( data => {

        return(

            <div key={Math.random()} className="orden">

                <div className='cardStyle card'>
                    <h1>Dolar Oficial</h1>
                    <p className='izquierda'>Compra: ${data.oficial.value_buy} <span className='derecha'>Venta: ${data.oficial.value_sell}</span></p>
                    <img className='logoDolar' src={logoDolar}></img>
                 
                </div>

                
                <div className='cardStyle card'>
                    <h1>Euro Oficial</h1>
                    <p className='izquierda'>Compra:${data.oficial_euro.value_buy}  <span className='derecha'>Venta:${data.oficial_euro.value_sell}</span></p>
                    <img className='logoDolar' src={euro}></img>
                </div>
    
   
                <div className='cardStyle card'>
                    <h1>Dolar Blue</h1>
                    <p className='izquierda'>Compra: ${data.blue.value_buy} <span className='derecha'>Venta:${data.blue.value_sell}</span></p>
                    <img className='logoDolar' src={logoDolar}></img>
                </div>

  


                <div className='cardStyle card'>
                    <h1>Euro Blue</h1>
                    <p className='izquierda'>Compra:${data.blue_euro.value_buy}  <span className='derecha'>Venta:${data.blue_euro.value_sell} </span></p>
                    <img className='logoDolar' src={euro}></img>
                </div>

                
            </div>
           
            )})
        }

        <p className='descripcion'>
            Lo que hay que saber del dólar hoy en la Argentina, con información completa y actualizada sobre la cotización del dólar en el Banco Nación, en el mercado mayorista y los datos del Banco Central. Tablas del dólar histórico, para poder analizar la evolución del tipo de cambio. Y todo el análisis del contexto para entender el mercado cambiario.
        </p>

        <footer className='footer'>
            <p className='footerTexto'>Desarollado por Andres Castro*</p>
        </footer>

        </>
    )
}
