import React from "react";
import Crucigrama from "../components/Crucigrama";


import "./page_009.css";


function Page009() {

    const pagina = "009";
    var indexInput = 0;
    const etapa = "1"
    const background = "bgc-goten";
    const color = "color-goten";
    const borderColor = "border-color-goten"
    const borderColorTabla = "border-color-genos"
    const bgc_cajas = "bgc-genos";


    const focusGrupo = (e) => {
        console.log("e target ", e.target.id);

    }


    return (
        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
                    {/* BEGIN CABECERA VERSIÓN 2 */}
                    <div className={"cabecera-v2 d-flex flex-column " + background}>
                        <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
                            <div className={"caja wp-150 text-center fsp-24 f-IntroRustG-Base " + color}>SESIÓN 3</div>
                            <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¡Este es nuestro plan!</div>
                        </div>

                    </div>
                    {/* END CABECERA VERSIÓN 2 */}

                    <div className="container-titulo-global mtp-20 mbp-40">
                        <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
                            xxx
                        </div>
                        <div className="d-flex psp-20">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                                X
                            </div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Crucigrama
                            </div>

                        </div>
                    </div>

                    <div className="d-flex global-margin mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative">
                                <div className="d-flex w-100 hp-350 ">
                                    {/* <div className="position-absolute top-50 start-50 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-540" alt="" /></div> */}
                                    {/* BLOQUE 1 */}
                                    <div
                                        className="position-absolute top-50 start-50 translate-middle msp-76 mtp--23"
                                        id={"contenedor1"}
                                        style={{ zIndex: 1 }}
                                    >
                                        <div className="d-flex center-center psp-0 pep-0 ptp-0 pbp-0 zindex-2 border-style-solid border-color-transparent border-2">
                                            <Crucigrama
                                                id={"crucigrama" + pagina + "_grupo1"}
                                                pagina={pagina}
                                                numero_cajas="8"
                                                columns={"flex-column"}
                                                rotuloColor="bgc-android18"
                                                grupo="1"
                                                numeroDeGrupos="5"
                                                onClick={focusGrupo}
                                            ></Crucigrama>
                                        </div>
                                    </div>
                                    {/* BLOQUE 2 */}
                                    <div
                                        className="position-absolute top-50 start-50 translate-middle msp--194 mtp-5"
                                        id="contenedor2"
                                        style={{ zIndex: 1 }}
                                    >
                                        <div className="d-flex center-center psp-0 pep-0 ptp-0 pbp-0 zindex-2 border-style-solid border-color-transparent border-1">
                                            <Crucigrama
                                                id={"crucigrama" + pagina + "_grupo2"}
                                                pagina={pagina}
                                                numero_cajas="8"
                                                columns={"flex-column"}
                                                rotuloColor="bgc-android18"
                                                grupo="2"
                                                numeroDeGrupos="5"
                                                onClick={focusGrupo}
                                            ></Crucigrama>
                                        </div>
                                    </div>
                                    {/* BLOQUE 3 */}
                                    <div
                                        className="position-absolute top-50 start-50 translate-middle msp--209 mtp--50"
                                        id={"contenedor3"}
                                        style={{ zIndex: 1 }}
                                    >
                                        <div className="d-flex center-center psp-0 pep-0 ptp-0 pbp-0 zindex-2 border-style-solid border-color-transparent border-1">
                                            <Crucigrama
                                                id={"crucigrama" + pagina + "_grupo3"}
                                                pagina={pagina}
                                                numero_cajas="3"
                                                columns={"flex-row"}
                                                rotuloColor="bgc-android18"
                                                grupo="3"
                                                numeroDeGrupos="5"
                                                onClick={focusGrupo}
                                            ></Crucigrama>
                                        </div>
                                    </div>
                                    {/* BLOQUE 4 */}
                                    <div
                                        className="position-absolute top-50 start-50 translate-middle msp-136 mtp-62"
                                        id={"contenedor4"}
                                        style={{ zIndex: 1 }}
                                    >
                                        <div className="d-flex center-center psp-0 pep-0 ptp-0 pbp-0 zindex-2 border-style-solid border-color-transparent border-2">
                                            <Crucigrama
                                                id={"crucigrama" + pagina + "_grupo4"}
                                                pagina={pagina}
                                                numero_cajas="6"
                                                columns={"flex-row"}
                                                rotuloColor="bgc-android18"
                                                grupo="4"
                                                numeroDeGrupos="5"
                                                onClick={focusGrupo}
                                            ></Crucigrama>
                                        </div>
                                    </div>
                                    {/* BLOQUE 5 */}
                                    <div
                                        className="position-absolute top-50 start-50 translate-middle msp--74 mtp-90"
                                        id={"contenedor5"}
                                        style={{ zIndex: 1 }}
                                    >
                                        <div className="d-flex center-center psp-0 pep-0 ptp-0 pbp-0 zindex-2 border-style-solid border-color-transparent border-2">
                                            <Crucigrama
                                                id={"crucigrama" + pagina + "_grupo5"}
                                                pagina={pagina}
                                                numero_cajas="10"
                                                columns={"flex-row"}
                                                rotuloColor="bgc-android18"
                                                grupo="5"
                                                numeroDeGrupos="5"
                                                onClick={focusGrupo}
                                            ></Crucigrama>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </div>

    );
}

export default Page009;