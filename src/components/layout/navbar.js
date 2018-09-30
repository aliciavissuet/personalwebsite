import React from 'react'

import '../../style/navbar.css'

import {NavbarToggler} from "reactstrap";
import {Collapse} from "reactstrap";
import {Nav} from "reactstrap";
import {NavItem} from "reactstrap";

import {Navbar} from "reactstrap";

import {Link} from 'react-router-dom';



export default class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar expand="md">
                {/*/!*<NavbarToggler onClick={this.toggle} />*!/*/}
                {/*<Collapse isOpen={this.state.isOpen} navbar>*/}
                    <Nav className="Nav-bar" navbar>
                        <NavItem >
                            <Link className={"Nav-link"} to="/">home</Link>
                        </NavItem>
                        <NavItem>
                            <Link className={"Nav-link"} to="/bio">bio</Link>
                        </NavItem>
                        <NavItem>
                            <Link className={"Nav-link"} to="/resume">resume</Link>
                        </NavItem>
                        <NavItem>
                            <Link className={"Nav-link"} to="/contact">contact</Link>
                        </NavItem>
                        <NavItem>
                            <Link className={"Nav-link"} to="/portfolio">portfolio</Link>
                        </NavItem>
                        <NavItem>
                            <Link className={"Nav-link"} to="/blog">blog</Link>
                        </NavItem>
                    </Nav>

                {/*</Collapse>*/}
                </Navbar>
            </div>
        )
    }
}
