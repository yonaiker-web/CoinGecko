import React from 'react'
import CoinRow from './CoinRow'

const title = ['#', 'Moneda', 'Precio', 'Cambio de Precio', 'Ultimas 24H']

const TableCoins = ({coins, search}) => {

    //filtramos en la barra de busque cualquier string que coincida con el nombre de cualquier moneda
    const filteredCoins = coins.filter((coin) => 
    coin.name.toLowerCase().includes(search.toLowerCase())
    | coin.symbol.toLowerCase().includes(search.toLowerCase()));

    return(
        <table className="table table-dark mt-4 table-hover">
            <thead>
                <tr>
                    {
                        title.map((title, index) => (
                            <td key={index}>{title}</td>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {/*Recorremos con .map todo el arreglo coins e imprimimos todos los nombres. le pasamos al componente CoinRow las props coin, index
                coins.map((coin, index)
                */}
                {/*lo que filtre filteredCoins va a ser recorrido por el .map y mostrara todo y se lo pasamos al componente CoinRow */}
                {filteredCoins.map((coin, index) => (
                    <CoinRow coin={coin} key={index} index={index + 1}/>
                ))}
            </tbody>
        </table>
    )
}

export default TableCoins