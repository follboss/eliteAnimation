import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <nav
                className={"navbar navbar-expand-lg fixed-top navbar-light bg-light"}
                id="topnav"
            >
                <a className={"navbar-brand"} href="#"></a>
                <button
                    className={"navbar-toggler"}
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className={"navbar-toggler-icon"}></span>
                </button>
                <div
                    className={
                        "collapse navbar-collapse mx-auto w-auto justify-content-center"
                    }
                    id="navbarNavAltMarkup"
                >
                    <div className={"navbar-nav"}>
                        <a className={"nav-link active"} href="#home">
                            ACCUEIL <span className={"sr-only"}>(current)</span>
                        </a>

                        <a className={"nav-link"} href="#presentation">
                            PRESENTATION
                        </a>

                        <a className={"nav-link"} href="#vr-games">
                            JEUX VR
                        </a>

                        <a className={"nav-link"} href="#contact">
                            CONTACT
                        </a>

                        <a className={"nav-link"} href="#want-more">
                            ENVIE DE PLUS ?
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
