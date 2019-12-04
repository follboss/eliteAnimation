import React,{Component} from 'react'
import {Route,Switch} from "react-router-dom";
import Header from './components/header';
import Home from './containers/home';

// Router : On va mettre toutes nos routes dedans

class Routes extends Component{
    render(){

        return(
            <div>
                <Header/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                    </Switch>
            </div>
    )
    }
}

export default Routes;
