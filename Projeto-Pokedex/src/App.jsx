import { useState } from 'react'
import './App.css'

function App() {
  const [inforPokemon, setInforPokemon] = useState(0);
  const [namePokemon, setNamePokemon] = useState(0);
  const [idPokemon, setIdPokemon] = useState(0);
  const [imagePokemon, setImagePokemon] = useState("https://play-lh.googleusercontent.com/HZ16nsxrSsoJoZx0JDJjpmRN2KC0eZRSTyS2O-Lgjw7BgjTU6W8uDSYNj1IMlbqmtQ=w240-h480-rw");
  const [hpPokemon, setHpPokemon] = useState(0);
  const [attackPokemon, setAttackPokemon] = useState(0);
  const [atkEspPokemon, setAtkEspPokemon] = useState(0);
  const [defPokemon, setDefPokemon] = useState(0);
  const [defEspPokemon, setDefEspPokemon] = useState(0);
  const [velPokemon, setVelPokemon] = useState(0);

  const buscar = async (e) => {
    e.preventDefault();

    fetch(`https://pokeapi.co/api/v2/pokemon/${inforPokemon}`)
      .then((data) => data.json())
      .then((result) => {
        setNamePokemon(result.name);
        setIdPokemon(result.id);
        setImagePokemon(result.sprites.other.dream_world.front_default);
        setHpPokemon(result.stats[0].base_stat);
        setAttackPokemon(result.stats[1].base_stat);
        setAtkEspPokemon(result.stats[2].base_stat);
        setDefPokemon(result.stats[3].base_stat);
        setDefEspPokemon(result.stats[4].base_stat);
        setVelPokemon(result.stats[5].base_stat);
        
      })
      .catch();
  };

  return (
    <main>
      <div className="container">

        <div className="pesquisar" >
          <form className="form-inline" onSubmit={(e) => buscar(e)}>
            <input className="form-control" 
                   type="search" 
                   placeholder="Pesquisar" 
                   aria-label="Pesquisar" 
                   value={inforPokemon} 
                   onChange={(e) => setInforPokemon(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">Pesquisar</button>
          </form>
        </div>

        <div className="card-name">
          <h5 className="card-personagem">Nome:</h5>
          <p className="personagem-text">{namePokemon}</p>
        </div>

        <hr />
        <div className="card-img-top">
          <img src={imagePokemon} className="card-img-top"
            alt="" />
        </div>

        <hr />
        <div className="id_pokemon">ID:{idPokemon}</div>

        <div className="card-force">

          <ol>
            <li>ATK:</li>
            <li className="ATK">{attackPokemon}</li>
          </ol>

          <ol>
            <li>ATK ESP:</li>
            <li className="ATK ESP">{atkEspPokemon}</li>
          </ol>

          <ol>
            <li>DEF:</li>
            <li className="DEF">{defPokemon}</li>
          </ol>

          <ol>
            <li>DEF ESP:</li>
            <li className="HP">{defEspPokemon}</li>
          </ol>

          <ol>
            <li>VEL:</li>
            <li className="HP">{velPokemon}</li>
          </ol>

          <ol>
            <li>HP:</li>
            <li className="HP">{hpPokemon}</li>
          </ol>

          
        </div>
      </div>
    </main>
  )
}

export default App
