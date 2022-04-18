import React, { useEffect } from "react";
import ArrastreElement from "./ArrastrarElement";


function Arrastrar(props) {


    const pagina = props.pagina;
    const id = props.id;

    return (
        <div id="contenedor_drags" className="rounded-p-10">
            <ArrastreElement id={id + "_drag1"} pagina={pagina} image={"images/page_" + pagina + "/recortables_1/reco_1.png"} />
            <ArrastreElement id={id + "_drag2"} pagina={pagina} image={"images/page_" + pagina + "/recortables_1/reco_2.png"} />
            <ArrastreElement id={id + "_drag3"} pagina={pagina} image={"images/page_" + pagina + "/recortables_1/reco_3.png"} />
            <ArrastreElement id={id + "_drag4"} pagina={pagina} image={"images/page_" + pagina + "/recortables_1/reco_4.png"} />
            <ArrastreElement id={id + "_drag5"} pagina={pagina} image={"images/page_" + pagina + "/recortables_1/reco_5.png"} />
            <ArrastreElement id={id + "_drag6"} pagina={pagina} image={"images/page_" + pagina + "/recortables_1/reco_6.png"} />
            <ArrastreElement id={id + "_drag7"} pagina={pagina} image={"images/page_" + pagina + "/recortables_1/reco_7.png"} />

        </div>
    );

}

export default Arrastrar;