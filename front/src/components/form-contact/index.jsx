import React, {Component, useState} from 'react';
const axios = require('axios');

export default function FormContact() {

    const [formValue, setFormValue] = useState({
       name :'',
       email: '',
       message: ''
    });

    const resetFormData = () => {
        setFormValue({
            name :'',
            email: '',
            message: ''
        })
    };

    const updateFormData = event =>
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        });

    const { name, email, message } = formValue;

    const onSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:3001/', {
            name,
            email,
            message
        }).then(function (response) {
            console.log('Request done for sending mail', response);
        }).catch(function (error) {
            console.log('error');
            console.log(error);
        });
        resetFormData();
        alert('Email envoyé !');
    };


        return (
            <div id="contact" className={"container-fluid position-relative h-100"}>
                <div className={"particles-js"}> </div>
                <div className={"row p-md-5 mx-5"}>
                    <div className={"col-md-8 p-md-5"}>
                        <h1 className={"call-us py-5 text-left"} data-aos="fade-up">
                            APPELEZ NOUS !
                        </h1>
                        <div
                            className={"card p-5"}
                            id="call-box"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <form id={"form-contact"} method="POST">
                                <div className={"form-row"}>
                                    <div className={"col-md-6"}>
                                        <div className={"form-group"}>
                                            <label htmlFor={"name-label"}>Votre nom</label>
                                            <input
                                                id="name"
                                                type="text"
                                                className={"form-control form-control-lg"}
                                                placeholder="Quel est votre nom ?"
                                                value={name}
                                                name='name'
                                                onChange={e => updateFormData(e)}
                                            />
                                        </div>
                                    </div>
                                    <div className={"col-md-6"}>
                                        <div className={"form-group"}>
                                            <label htmlFor={"email-label"}>Email</label>
                                            <input
                                                id="email"
                                                type="text"
                                                className={"form-control form-control-lg"}
                                                placeholder="Quel est votre adresse mail ?"
                                                value={email}
                                                onChange={e => updateFormData(e)}
                                                name='email'
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className={"form-row"}>
                                    <div className={"col-md-12"}>
                                        <div className={"form-group"}>
                                            <label htmlFor={'message-label'}>Message</label>
                                            <textarea
                                                className={"form-control form-control-lg"}
                                                id="message"
                                                rows="3"
                                                placeholder="Your message"
                                                value={message}
                                                onChange={e => updateFormData(e)}
                                                name='message'
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                                <input type='submit' onClick={onSubmit} value='Valider' />
                                <input
                                    style={{ display: "block", marginTop: 10 }}
                                    type="reset"
                                    value="Reset"
                                />
                            </form>
                        </div>
                    </div>
                    <div className={"col-md-4 "}></div>
                </div>
            </div>
        )
}
