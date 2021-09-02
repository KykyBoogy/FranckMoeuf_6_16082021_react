import React from 'react';

const Modal = props => {
    if (!props.show) {
        return null
    }

    return (
        <div className="modal">
            <div className="modal__content">
                <div className="modal__header">
                    <h4 className="modal__header--title">Contactez-moi</h4>
                    <button onClick={props.onClose} className="modal__header--closed">X</button>
                </div>
                <div className="modal__body">
                    <label htmlFor="firstname">Prénom</label>
                    <input type="texte" id="firstname" name="firstname" value=""></input>
                    <label htmlFor="lastname">Nom</label>
                    <input type="texte" id="lastname" name="lastname" value=""></input>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" pattern=".+@globex\.com" size="30" required></input>
                    <label htmlFor="textarea">Nom</label>
                    <textarea id="textarea" name="textarea" rows="5" cols="33"></textarea>
                </div>
                <div className="modal__footer">
                    <button>Envoyer</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;