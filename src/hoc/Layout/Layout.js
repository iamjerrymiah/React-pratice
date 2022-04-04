import React, { Component } from "react";

import Aux from '../Auxiliary/Auxiliary';
import NavBar from "../../Component/NavBar/NavBar";
import './Layout';

class Layout extends Component{
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }


    render(){
        return(
            <Aux>
                <NavBar />
                <main className="Content">
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;