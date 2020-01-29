import React, { Component } from 'react';
import Intro from '../../components/intro';
import Presentation from "../../components/presentation";
import GamesPresentation from "../../components/games-presentation";
import FormContact from "../../components/form-contact";
import Footer from "../../components/footer";

class Home extends Component {
    render () {
        return (
            <React.Fragment>
                <Intro />
                <Presentation />
                <GamesPresentation />
                <FormContact />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Home;
