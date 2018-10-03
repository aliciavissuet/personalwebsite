import React from 'react'
import {withRouter} from 'react-router-dom'
import '../../style/resume.css';
import Alicia1 from '../images/Alicia1.js'
import {Image} from "react-bootstrap";



class Resume extends React.Component {
    render(){
        const face = require("../images/alicia.jpg")
        return (
            <div className="container-fluid">
                <div className={"row"}>

                    <div className={"col-1-col"}>
                        <div className={"col-1a"}>
                            <Image className={"face"} src={face} style={{height:"200px"}} rounded/>
                            <p className={"Name"}>Alicia Vissuet</p>
                            <p className={"Title"}>Speech Therapist transitioning to web development</p>
                            <br></br>
                            <br></br>
                        </div>
                        <div className={"col-1b"}>
                            <p>test</p>
                            <p> test</p>
                        </div>
                    </div>
                    <div className={"col-2-col"}>
                        <div className={"col-2a"}>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default withRouter(Resume);