import React from 'react';

const Img = (props) => {
    return (

        <img alt={props.alt || ""} {...props} onLoad={console.log("Carga completa")} />

    )
}


export default Img;