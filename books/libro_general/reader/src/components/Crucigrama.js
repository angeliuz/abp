
import React, {useEffect, useState} from "react";
import CrucigramaInput from "./CrucigramaInput";



function Crucigrama(props) {

    var box = props.numero_cajas
    var id = props.id;
    var columns = props.columns;
    var rotulo = "";
    var rotuloAlign = "";
    const numeroDeGrupos = props.numeroDeGrupos;
    const pagina = props.pagina;
    const [content1, setContent1] = useState("");

    if (columns === "flex-column") {
        rotulo = "rounded-set-5";
        rotuloAlign = "justify-content-center align-items-end";
    } else {
        rotulo = "rounded-tbs-5";
        rotuloAlign = "justify-content-end align-items-center ";
    }

    const autoTab = e => {

        const BACKSPACE_KEY = 8;
        const DELETE_KEY = 46;
        let tabindex = e.target.getAttribute('dataIndex');
        tabindex = Number(tabindex);
        console.log(tabindex)
        
        console.log("value: " + e.target.value)

        if (e.keyCode === BACKSPACE_KEY) {
            if (tabindex > 0) {
                document.getElementById(id + "_" + (tabindex - 1)).focus();
            }
        } else if (e.keyCode !== DELETE_KEY) {
            console.log(document.getElementById(props.grupo));
            console.log(tabindex + " : " + box)
            if (tabindex < box - 1) {
                document.getElementById(id + "_" + (tabindex + 1)).focus();
            }
        }

    };

    const focusGrupo = e => {
        console.log(document.querySelector("#contenedor"+props.grupo));
        for (var i = 1; i <= numeroDeGrupos; i++) {
            if (i == props.grupo) {
                console.log(document.querySelector("#contenedor"+props.grupo))
                document.querySelector("#contenedor"+props.grupo).style.zIndex = 10;
            } else {
                //console.log(document.querySelector("#contenedor"+i))
                document.querySelector("#contenedor"+i).style.zIndex = (i);
            }

        }
    }

    const handleTextChange = (e) => {
        console.log("handleChange: ",e.target.value);
        console.log("handleChange: ",e.target.id);
       //setContent1(event.target.value);
        //updateContenido(event.target.value);
    };

    const Input = props => {

        var borderHidden = "";

        var ancho = "wp-30";
        var alto = "hp-30";

        if (columns == "flex-column") {
            ancho = "wp-32";
            alto = "auto";
            if (props.index < box - 1) {
                borderHidden = "border-bottom-hidden";
            }
        } else {
            ancho = "wp-30";
            alto = "hp-30";
            if (props.index < box - 1) {
                borderHidden = "border-right-hidden";
            } else {
                ancho = "wp-32";
            }
        }


        return (
            // <CrucigramaInput
            //     className={"f-Ubuntu-B text-center text-uppercase color-dark border-style-solid border-color-dark border-2 bgc-transparent " + borderHidden + " " + ancho + " " + alto}
            //     dataIndex={props.index}
            //     id={id + "_" + props.index}
            //     maxLength={1}
            //     onKeyUp={props.autoTab}
            //     onClick={focusGrupo}
            // />
            <input
                className={"f-Ubuntu-B text-center text-uppercase color-dark border-style-solid border-color-dark border-2 bgc-transparent " + borderHidden + " " + ancho + " " + alto}
                dataIndex={props.index}
                id={id + "_" + props.index}
                maxLength={1}
                onKeyUp={props.autoTab}
                onChange={handleTextChange}
                onClick={focusGrupo}
                
            />
        );
    };

    const blocks = Array.from({ length: box }, (element, index) => (
        <Input key={index} index={index} autoTab={autoTab} />
    ));

    return (
        <div className={"d-flex " + columns} id={id}>
            <div className={"d-flex text-center wp-30 hp-30 " + rotuloAlign}>
                <div className={"d-flex center-center f-Ubuntu-B fsp-15 color-white wp-25 wp-25 " + rotulo + " " + props.rotuloColor}>{props.grupo}</div>
            </div>
            {blocks}
        </div>
    );
}

export default Crucigrama;



// import React, {useEffect} from "react";
// import InputCrucigrama from "./InputCrucigrama";



// function Crucigrama(props) {

//     var box = props.numero_cajas
//     var id = props.id;
//     var columns = props.columns;
//     var rotulo = "";
//     var rotuloAlign = "";
//     const numeroDeGrupos = props.numeroDeGrupos

//     if (columns === "flex-column") {
//         rotulo = "rounded-set-5";
//         rotuloAlign = "justify-content-center align-items-end";
//     } else {
//         rotulo = "rounded-tbs-5";
//         rotuloAlign = "justify-content-end align-items-center ";
//     }

//     const autoTab = e => {

//         const BACKSPACE_KEY = 8;
//         const DELETE_KEY = 46;
//         let tabindex = e.target.getAttribute('dataIndex');
//         tabindex = Number(tabindex);
//         console.log(tabindex)
        
//         console.log("value: " + e.target.value)

//         if (e.keyCode === BACKSPACE_KEY) {
//             if (tabindex > 0) {
//                 document.getElementById(id + "_" + (tabindex - 1)).focus();
//             }
//         } else if (e.keyCode !== DELETE_KEY) {
//             console.log(document.getElementById(props.grupo));
//             console.log(tabindex + " : " + box)
//             if (tabindex < box - 1) {
//                 document.getElementById(id + "_" + (tabindex + 1)).focus();
//             }
//         }

//     };

//     const focusGrupo = e => {
//         for (var i = 1; i <= numeroDeGrupos; i++) {
//             if (i == props.grupo) {
//                 document.getElementById(props.grupo).style.zIndex = 2;
//             } else {
//                 document.getElementById(i).style.zIndex = 1;
//             }

//         }
//     }

//     const Input = props => {

//         var borderHidden = "";

//         var ancho = "wp-30";
//         var alto = "hp-30";

//         if (columns == "flex-column") {
//             ancho = "wp-32";
//             alto = "hp-29";
//             if (props.index < box - 1) {
//                 borderHidden = "border-bottom-hidden";
//             }
//         } else {
//             ancho = "wp-30";
//             alto = "hp-30";
//             if (props.index < box - 1) {
//                 borderHidden = "border-right-hidden";
//             } else {
//                 ancho = "wp-32";
//             }
//         }


//         return (
//             <InputCrucigrama
//                 className={"f-Ubuntu-B text-center text-uppercase color-dark border-style-solid border-color-dark border-2 bgc-transparent " + borderHidden + " " + ancho + " " + alto}
//                 dataIndex={props.index}
//                 id={id + "_" + props.index}
//                 maxLength={1}
//                 onKeyUp={props.autoTab}
//                 onClick={focusGrupo}
//             />
//             // <input
//             //     className={"f-Ubuntu-B text-center text-uppercase color-dark border-style-solid border-color-dark border-2 bgc-transparent " + borderHidden + " " + ancho + " " + alto}
//             //     data-index={props.index}
//             //     id={id + "_" + props.index}
//             //     maxLength={1}
//             //     onKeyUp={props.autoTab}
//             //     onClick={focusGrupo}
//             //     onChange={handleTextChange}
//             //     value={content1}
//             // />
//         );
//     };

//     const blocks = Array.from({ length: box }, (element, index) => (
//         <Input key={index} index={index} autoTab={autoTab} />
//     ));

//     return (
//         <div className={"d-flex " + columns}>
//             <div className={"d-flex text-center wp-30 hp-30 " + rotuloAlign}>
//                 <div className={"d-flex center-center f-Ubuntu-B fsp-15 color-white wp-25 wp-25 " + rotulo + " " + props.rotuloColor}>{props.grupo}</div>
//             </div>
//             {blocks}
//         </div>
//     );
// }

// export default Crucigrama;


