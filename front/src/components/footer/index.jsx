import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return(
            <React.Fragment>
            <div id="want-more" className={"container-fluid h-100"}>
                <div className={"particles-js"}> </div>
                <div
                    className={
                        "row h-100 justify-content-center align-items-center text-center"
                    }
                >
                    <div>
                        <h1 className={"my-5 home-text"} data-aos="fade-up">
                            ENVIE DE PLUS DE JEUX ?
                        </h1>

                        <h1 className={"my-5 home-text"} data-aos="fade-up">
                            DECOUVREZ NOS JEUX GONFLABLES !
                        </h1>

                        <h1 className={"my-5 home-text"} data-aos="fade-up">
                            RENDEZ-VOUS SUR
                        </h1>

                        <h1 className={"my-5 home-text"} data-aos="fade-up">
                            <a target="blank" href="https://www.eliteanimation.com">
                                www.eliteanimation.com{" "}
                            </a>
                        </h1>
                    </div>
                </div>
            </div>
                <div className={"logo-fixed bg-light rounded-circle p-3"}>
                    <img className={"img-banner"} src="assets/img/ae-logo.png" />
                </div>
            </React.Fragment>
        )
    }
}

export default Footer;
