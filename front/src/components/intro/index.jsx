import React, { Component } from 'react';

class Index extends Component {
    render() {
        return (
            <div className={'wrapper-intro'}>
                <h1 className={'title-intro'}>ENVIE DE TESTER LA REALITE VIRTUELLE ?</h1>
                <a className={'link-intro'} href="#">IMMERSION</a>
                <img src={require('../../assets/man-and-woman.png')} />
            </div>
        )
    }
}

export default Index;
