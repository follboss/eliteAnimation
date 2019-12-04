import React, { Component } from 'react';


class Header extends Component {

    render() {
        return (
               <header className={'navBar'}>
                <ul>
                    <li><a href={'/'} className={'accueil'}>Accueil</a></li>
                       <li><a href={'#'}>Présentation</a></li>
                       <li><a href={'#'}>Jeux VR</a></li>
                       <li><a href={'#'}>Contact</a></li>
                       <li><a href={'#'}>Envie de plus ?</a></li>

                </ul>
               </header>
            )
    }
}

export default Header;
