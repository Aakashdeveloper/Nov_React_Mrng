import React,{Fragment} from 'react';

const Footer = (props) => {
    return(
        <Fragment>
            <hr/>
            <center>
                <h3>&copy; Developer Funnel {props.month} {props.year} </h3>
            </center>
        </Fragment>
    )
}

export default Footer;