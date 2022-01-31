import React from 'react';
import ReactDOM from "react-dom";
import $ from "jquery";

function Crucigrama(props) {
    const elemRefs = [];

    const autoTab = e => {

        let tabindex = e.target.getAttribute('data-index');
        tabindex = Number(tabindex);
        console.log(elemRefs[tabindex])



        // const BACKSPACE_KEY = 8;
        // const DELETE_KEY = 46;
        // let tabindex = e.target.getAttribute('data-index');
        // tabindex = Number(tabindex);
        // let elem = null;
        // if (e.keyCode === BACKSPACE_KEY) {
        //     elem = tabindex > 0 && elemRefs[tabindex - 1];
        // } else if (e.keyCode !== DELETE_KEY) {
        //     elem = tabindex < elemRefs.length - 1 && elemRefs[tabindex + 1];
        // }
        // if (elem) {
        //     elem.current.focus();
        // }
    };

    const Input = props => {
        const ref = React.createRef();
        elemRefs.push(ref);
        return (
            <input
                className={props.clases}
                data-index={props.index}
                ref={ref}
                maxLength={1}
                onKeyUp={props.autoTab}
            />
        );
    };
    const blocks = Array.from({ length: 5 }, (element, index) => (
        <Input key={index} id={index} index={index} autoTab={autoTab} />
    ));

    return <div>{blocks}</div>;
}

export default Crucigrama;
