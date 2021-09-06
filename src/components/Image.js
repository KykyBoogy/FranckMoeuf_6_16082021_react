import React, {useState} from 'react';
// import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { BsHeartFill } from 'react-icons/bs';
// import LightBox from './LightBox';

const Image = ({ firstName,photographId, mediaTitle, mediaImage, mediaVideo, mediaLike , mediaId}) => {
    const [count, setCount] = useState(parseInt(mediaLike));
    
    const handleClick = function (e) {
        e.preventDefault();
        setCount((prevCount) => prevCount + 1);
    }
    return (
        <article className="gallery__img">
            <Link to="" className="gallery__img--link">
                <img src={require(`../assets/img/${firstName}/${mediaImage || mediaVideo}`).default} alt="" />
            </Link>
            <footer className="gallery__img--footer">
                <h5>{mediaTitle}</h5>
                <span>{count}</span>
                <button onClick={handleClick}>
                    <BsHeartFill />
                </button>
            </footer>
        </article>
    )
}

export default Image