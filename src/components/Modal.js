import React from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";

const Modal = props => {
    
    const {photographId} = useParams();
    const idPhotograph = parseInt(photographId);
    const fishEyeData = require('../data/FishEyeData.json');
    const dataPhotographers = fishEyeData.photographers;
    const {register, handleSubmit} = useForm();
    const onSubmit = data => console.log(data);
    
    if (!props.show) {
        return null
    }
    


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="modal" onClick={props.onClose}>
            <div className="modal__content" 
                    onClick={e => e.stopPropagation()}>
                <div className="modal__header">
                    <h4 className="modal__header--title">Contactez-moi</h4>
                    <button onClick={props.onClose} className="modal__header--closed">
                        <img src={require(`../assets/img/Vector.png`).default} alt="" />
                    </button>
                </div>
                {dataPhotographers.filter(data => data.id === idPhotograph)
                .map((val) => {
                    return (
                    <h4 className="modal__name">{val.name}</h4>
                    )
                })}
                <div className="modal__body">
                    <label htmlFor="firstName">Prénom</label>
                    <input type="text" id="firstName" {...register("firstName", { required: true })}></input>
                    <label htmlFor="lastName">Nom</label>
                    <input type="text" id="lastName" name="lastName" {...register("lastName", { required: true })}></input>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" {...register("email", { required: true })}></input>
                    <label htmlFor="textarea">Votre message</label>
                    <textarea className="modal__body--textarea" id="textarea" name="textarea"></textarea>
                </div>
                <div className="modal__footer">
                    <button>Envoyer</button>
                </div>
            </div>
        </form>
    );
};

export default Modal;