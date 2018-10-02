import React from 'react'
import {withRouter} from 'react-router-dom'
import '../../style/bio.css';
import Alicia1 from '../images/Alicia1.js'


class Bio extends React.Component {
    render(){
        return (
        <div className={"container"}>

            <div className={"row"}>
                <div className="col-2">

                    <br/>
                    <Alicia1/>
                </div>
                <div className="col-1">
                    <p className={'paragraph'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac varius velit. Vivamus vitae dolor sit amet lorem eleifend vulputate sollicitudin id lorem. Suspendisse vitae accumsan lectus, et porttitor velit. Vivamus blandit, turpis sed lacinia varius, massa risus accumsan odio, nec sodales dolor erat fringilla lorem. Vestibulum non dui quis quam porta mattis cursus in turpis. Donec sit amet nulla et nunc varius viverra non vel ante. Aenean accumsan hendrerit ligula, in dictum enim bibendum ac. Cras imperdiet, neque ac molestie finibus, lorem erat dignissim sapien, ut molestie massa lectus non mi. Sed consectetur in leo in laoreet. Pellentesque pretium ullamcorper dictum. Suspendisse faucibus scelerisque erat, non rutrum orci ornare eget. Nullam pretium purus id orci elementum, nec fringilla orci vestibulum.</p>
                    <p className={'paragraph'}>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam ac eros a ante ornare mattis vitae nec eros. Nulla ac ultrices erat. Fusce sagittis bibendum tincidunt. Ut sed eleifend ante. Sed sollicitudin ex libero, tincidunt blandit lorem pharetra quis. Vivamus sed orci nunc. Proin id sodales diam. Aliquam id dapibus elit. Vestibulum eros tellus, semper at lobortis nec, pharetra non tellus. Morbi sit amet eros purus. Curabitur a tempor risus, finibus laoreet metus.</p>
                    <p className={'paragraph'}>usce interdum neque sem, eget posuere est venenatis scelerisque. Cras sem metus, laoreet eget odio sed, lobortis faucibus tellus. Aliquam erat volutpat. Nam vitae enim quam. Vestibulum nec purus ex. In hac habitasse platea dictumst. Morbi ultricies dignissim maximus. Curabitur aliquet velit id odio consectetur tempor.</p>

                </div>

            </div>
        </div>

        )
    }
}

export default withRouter(Bio);