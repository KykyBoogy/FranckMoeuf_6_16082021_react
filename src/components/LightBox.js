import React from "react";
import { useParams } from 'react-router';
import { FaChevronRight, FaChevronLeft} from 'react-icons/fa';

const LightBox = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const {photographId} = useParams();
    // Parse Int pour convertir en nombre entier l'Id
    const idPhotograph = parseInt(photographId);

    const fishEyeData = require('../data/FishEyeData.json');
    const dataPhotographers = fishEyeData.photographers;
    const mediaPhotograph = fishEyeData.media;
    

    return (
      <section className="slider">
        <FaChevronLeft className='slider__left-arrow' onClick={prevSlide} />
        <FaChevronRight className='slider__right-arrow' onClick={nextSlide} />
        {dataPhotographers.filter(data => data.id === idPhotograph)
            .map((val) => {
        {mediaPhotograph.filter(slides => slides.photographerId === idPhotograph)
                        .map((slide, index) => {
                          return (
                            <div
                              className={index === current ? 'slide active' : 'slide'}
                              key={index}
                            >
                              {index === current && (
                                <img src={require(`../assets/img/${val.nom}/${slide.image || slide.video}`).default} 
                                  alt="" className='image' />
                              )}
                            </div>
                          )
                        })}
                      })}
      </section>
    );
      
}

export default LightBox;