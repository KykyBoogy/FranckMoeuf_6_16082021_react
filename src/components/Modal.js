import React from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";

const wait = function (duration = 1000) {
    return new Promise((resolve) => {
        window.setTimeout(resolve, duration)
    })
}

const Modal = props => {
    
    const {photographId} = useParams();
    const idPhotograph = parseInt(photographId);
    const fishEyeData = require('../data/FishEyeData.json');
    const dataPhotographers = fishEyeData.photographers;
    const {register, handleSubmit, formState, errors} = useForm();
    const {isSubmitting} = formState
    const onSubmit = async data => {
        await wait(2000)
    }
    // console.log(errors);
    if (!props.show) {
        return null
    }
    


    return (
        <div className="modal" onClick={props.onClose}>
            <form onSubmit={handleSubmit(onSubmit)} className="modal__content" 
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
                    <input type="text" id="firstName" {...register("firstName", { require: "Vous devez saisir votre prénom !" })}></input>
                    {errors.firstName && <p>{errors.firstName.message}</p>}
                    <label htmlFor="lastName">Nom</label>
                    <input type="text" id="lastName" name="lastName" {...register("lastName", { require: true })}></input>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" {...register("email", { require: true })}></input>
                    <label htmlFor="textarea">Votre message</label>
                    <textarea className="modal__body--textarea" id="textarea" name="textarea"></textarea>
                </div>
                <div className="modal__footer">
                    <button disabled={isSubmitting}>Envoyer</button>
                </div>
            </form>
        </div>
    );
};

export default Modal;