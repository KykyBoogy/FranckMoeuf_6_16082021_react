import React from 'react';
import { useParams } from 'react-router';
// import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

const Details = () => {
    const {photographId} = useParams();
    // Parse Int pour convertir en nombre entier l'Id
    const idPhotograph = parseInt(photographId);
    const FisheyeDataFR = require('../data/FisheyeDataFR.json');
    const DataPhotographes = FisheyeDataFR.photographes;
    const MediaPhotograph = FisheyeDataFR.médias;

    console.log(MediaPhotograph);
    
    return (
        <div>
            <header className="header">
                <Logo />
            </header>
            <main className="container__main">
            {DataPhotographes.filter(data => data.id === idPhotograph).map((val) => {
                return (
                    <>
                        <section className="photograph">
                            <article className="photograph__details">
                                <h1>{val.nom}</h1>
                                <p className="photograph__details--localisation">{val.ville}, {val.country || val.pays}</p>
                                <p className="photograph__details--desc">{val.tagline}</p>
                                <ul className="photographer__tag">
                            {val.tags.map((tag) => {  
                                return (
                                <li className="buttonGroup"
                                        type="button" 
                                        key={tag}>
                                    <span>#{tag}</span>
                                </li>
                                )
                            })}
                            </ul>
                            </article>
                            {/* <article className="photograph__button">
                                <button className="photograph__button--contact">
                                    Contactez-moi
                                </button>
                            </article> */}
                            <article className="photograph__img">
                                <img src={require(`../assets/img/photographers_id_photos/${val.portrait}`).default} alt="" />
                            </article>
                        </section>
                        <section className="gallery">
                        {MediaPhotograph.filter(medias => medias.photographeId === idPhotograph)
                            .map((media) => {
                                const FirstName = val.nom.substr(0,val.nom.indexOf(' '));
                                console.log(FirstName);
                                console.log(media.image || media.vidéo);
                                return (
                                    <article className="gallery__photo">
                                        
                                            <img src={require(`../assets/img/${FirstName}/${media.image || media.vidéo}`).default} alt="" />
                                        
                                    </article>
                                )
                        })}
                        </section>
                    </>
                )
            })}
                    
                    
            </main>
        </div>
    );
};

export default Details;