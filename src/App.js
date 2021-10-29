import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import TableCoins from './components/TableCoins';


function App() {

  //inicializamos toda la informacion de las monedas con []
  const [coins, setCoins] = useState([])
  //Inicializamos el contenido del campo de busqueda
  const [search, setSearch] = useState('')


  const getData = async () => {
    //hacemos una peticion para trae toda la informacion de la API y la guardamos en res
    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1")
    //imprimimos la respuesta en consola
    console.log(res.data)
    //actualizamos el estado por lo que tiene res
    setCoins(res.data)
  }

  useEffect(() => {
    //este llamado a la API solo se realiza una sola vez
    getData()
  }, [])


  return (
    <div className="container">
      <div className="row">
      {/*El buscador*/}
      <input type="text" placeholder='Busca una moneda' className="form-control bg-dark text-light border-0 mt-4 text-center" 
      //guardamos lo que tipeamos en el estado setSearch
      onChange={e => setSearch(e.target.value)}/>
      {/*pasamos el estado como una propiedad a TableCoins, coins sera lo que tenga coins*/}
      <TableCoins coins={coins} search={search}/>
      </div>
    </div>
  );
}

export default App;
