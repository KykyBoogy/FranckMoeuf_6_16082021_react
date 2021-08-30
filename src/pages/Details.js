import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

const Details = () => {
    const {photographId} = useParams();
    // Parse Int pour convertir en nombre entier l'Id
    const idPhotograph = parseInt(photographId);
    const FisheyeDataFR = require('../data/FisheyeDataFR.json');
    const DataPhotographes = FisheyeDataFR.photographes;
    

    //console.log(result);
    
    return (
        <div>
            <header>
                <Logo />
            </header>
            <main className="container__main">
            {DataPhotographes.filter(data => data.id === idPhotograph).map((val) => {
                return (
                    <div className="photograph">
                        <div className="photograph__details">
                            <h1>{val.nom}</h1>
                            <p className="photograph__details--localisation">{val.ville}, {val.country || val.pays}</p>
                            <p className="photograph__details--desc">{val.tagline}</p>
                        </div>
                        <div className="photograph__button">
                            <button>
                                Bouton
                            </button>
                        </div>
                        <div className="photograph__img">
                            <img src={require(`../assets/img/photographers_id_photos/${val.portrait}`).default} alt="" />
                        </div>
                    </div>
                    
                )
            })}
            </main>
        </div>
    );
};

export default Details;