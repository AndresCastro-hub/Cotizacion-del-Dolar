import React, { useEffect, useState } from 'react'

export const Cotizador = () => {

    const [datos, SetDatos] = useState([])

    const fetchApi = async () => {

        const url = 'https://api.bluelytics.com.ar/v2/latest'
        const respuesta = await fetch(url)

        const data = await respuesta.json();
                
        SetDatos(data)
    }

    console.log(datos)

    useEffect(( ) => {
        fetchApi();
    },[])

    // const url = 'https://api.bluelytics.com.ar/v2/latest'

    // const llamadoApi = () => {
    //     fetch(url)
    //     .then((respuesta) => respuesta.json())
    //     .then((data) => {
    //         SetDatos(data)
    //     })
    // }

    // useEffect ( () => {
    //     llamadoApi()
    // },[])

   
    return (
        <>

            
            <h1>COTIZACION DEL DOLAR HOY, PRECIO DEL DOLAR HOY</h1>

            <h2>Lo que hay que saber del dólar hoy en la Argentina, con información completa y actualizada sobre la cotización del dólar en el Banco Nación, en el mercado mayorista y los datos del Banco Central. Tablas del dólar histórico, para poder analizar la evolución del tipo de cambio. Y todo el análisis del contexto para entender el mercado cambiario.</h2>

            <div className='dolarOficial'>
                <h1>Dolar Oficial</h1>
                <p>Compra:</p>
                <p>Venta:</p>
            </div>

            <div className='dolarBlue'>
                <h1>Dolar Blue</h1>
                <p>Compra:</p>
                <p>Venta:</p>
            </div>

            <div className='euroOficial'>
                <h1>Euro Oficial</h1>
                <p>Compra:</p>
                <p>Venta:</p>
            </div>

            <div className='euroBlue'>
                <h1>Euro Blue</h1>
                <p>Compra:</p>
                <p>Venta:</p>
            </div>


        </>
    )
}
