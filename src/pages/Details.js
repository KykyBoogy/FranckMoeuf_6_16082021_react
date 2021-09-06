import React, {useState} from 'react';
import { useParams } from 'react-router';
// import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import Image from '../components/Image';
import Modal from "../components/Modal";

const Details = () => {
    const {photographId} = useParams();
     // Parse Int pour convertir en nombre entier l'Id
    const idPhotograph = parseInt(photographId);
    const fishEyeData = require('../data/FishEyeData.json');
    const dataPhotographers = fishEyeData.photographers;
    const mediaPhotograph = fishEyeData.media;
    const [show, setShow] = useState(false);
    // console.log(FishEyeData);
    return (
        <>
            <header className="header">
                <Logo />
            </header>
            <main className="container__detail">
            {dataPhotographers.filter(data => data.id === idPhotograph)
            .map((val) => {
                return (
                    <>
                        <section className="photograph">
                            <article className="photograph__details">
                                <h1>{val.name}</h1>
                                <p className="photograph__details--localisation">{val.city}, {val.country}</p>
                                <p className="photograph__details--desc">{val.tagline}</p>
                                <ul className="photograph__tag">
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
        
                            <article className="photograph__img">
                                <img src={require(`../assets/img/photographers_id_photos/${val.portrait}`).default} alt="" />
                            </article>
                        </section>
                        <section className="gallery">
                        <ul className="gallery__dropdown">
                            <li className="gallery__dropdow--filters">Popularité</li>
                            <li className="gallery__dropdow--filters">Date</li>
                            <li className="gallery__dropdow--filters">Titre</li>
                        </ul>
                        {mediaPhotograph.filter(medias => medias.photographerId === idPhotograph)
                            .map((media) => {
                                
                                const firstName = val.name.substr(0,val.name.indexOf(' '));
                                // console.log(mediaImageTitle);
                                // console.log(media.image || media.video);
                                return (
                                    
                                    <Image firstName={firstName}
                                        mediaTitle={media.title} 
                                        mediaImage={media.image} 
                                        mediaVideo={media.video}
                                        mediaLike={media.likes}
                                        mediaId = {media.id}
                                        photographId = {val.id} />
                                  
                                )
                                
                        })}
                        
                        </section>
                        
                        
                    </>
                    
                )
                
            })}
                    <button className="contact" onClick={() => setShow(true)}>Contactez-moi</button>
                    <Modal onClose={() => setShow(false)} 
                            show={show} />
                    
            </main>
        </>
    );
};

export default Details;