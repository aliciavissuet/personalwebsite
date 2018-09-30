import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import '../../style/header.css';
import NavBar from './navbar'



export default class Header extends React.Component {
    render(){
        return (
            <div>

                <Jumbotron className={"Landing-header"}>
                    <h1 className="display-3">alicia vissuet</h1>
                    <NavBar/>



                </Jumbotron>
                <hr className="my-2" />

            </div>
        )
    }
}
