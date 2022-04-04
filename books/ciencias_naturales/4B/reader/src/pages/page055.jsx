import React from "react";
import InputBox from "../components/InputBox";
// import ModalVideo from "../components/ModalVideo";
// import ModalBook from "../components/ModalBook";

import "./page_055.css";

function Page055(props) {

    const pagina = "055";
    var indexInput = 0;
    const etapa = "4"
    const background = "bgc-pidgey";
    const color = "color-pidgey";
    const borderColor = "border-color-pidgey"
    const borderColorTabla = "border-color-pantro"
    const bgc_cajas = "bgc-pantro";

    return (

        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>
                    <img src={"images/cabecera/dosier_e" + etapa + ".svg"} className="w-100" alt="" />
                    <div className="position-relative w-100 mbp-10">
                        <div className="psp-80 pep-70 ptp-30 pbp-0 position-relative">
                            <div className="fsp-16 f-Ubuntu-R text-start psp-50 pbp-10">Esta página fue completada por:</div>
                            <div className={"psp-50 pep-50 ptp-5 pbp-5 bgc-white rounded-p-10 border-style-solid border-1 " + borderColor + " d-flex justify-content-center position-relative"}>
                                
                                <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp--10"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-60" alt="" /></div>
                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                            </div>
                        </div>
                    </div>

                    <div className="d-flex global-margin mtp-30 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100">
                        
                            <div className="col-12 p-0 m-0 position-relative">
                            <div className="position-absolute top-0 start-100 translate-middle wp-100 msp--30 mtp-20"><img src={"images/page_" + pagina + "/img_002.svg"} className="" alt="" /></div>
                                <div className="position-absolute top-50 start-100 translate-middle msp-10 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-40" alt="" /></div>
                                <div className="border-style-solid border-2 border-color-guile rounded-p-10">
                                    <div className="d-flex flex-column bgc-white rounded-p-10">
                                        <div className="bgc-bach w-100 f-Ubuntu-R text-start fsp-15 rounded-set-10 psp-10 pep-10 ptp-5 pbp-5">
                                            Queremos que nuestra brigada sea un aporte al colegio, porque:
                                        </div>
                                        <div className="psp-10 pep-10">
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-190" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex global-margin mtp-30 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative">
                                <div className="position-absolute top-50 start-0 translate-middle msp--10 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-40" alt="" /></div>
                                <div className="border-style-solid border-2 border-color-android18 rounded-p-10">
                                    <div className="d-flex flex-column bgc-white rounded-p-10">
                                        <div className="bgc-azuka w-100 f-Ubuntu-R text-start fsp-15 rounded-set-10 psp-10 pep-10 ptp-5 pbp-5">
                                        Preparar un simulacro de emergencia nos
sirvió para:
                                        </div>
                                        <div className="psp-10 pep-10">
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-190" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex global-margin mtp-30 mbp-100 psp-0 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative">
                                <div className="position-absolute top-100 start-100 translate-middle msp--40 mtp-30 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-60" alt="" /></div>
                                <div className="border-style-solid border-2 border-color-padme rounded-p-10">
                                    <div className="d-flex flex-column bgc-white rounded-p-10">
                                        <div className="bgc-jaga w-100 f-Ubuntu-R text-start fsp-15 rounded-set-10 psp-10 pep-10 ptp-5 pbp-5">
                                            Presenciar otras simulaciones de emergencia nos sirvió para:
                                        </div>
                                        <div className="psp-10 pep-10">
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-190" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* BEIGN PIE DE PAGINA */}
                    <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                        <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60 bgc-white" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
                        <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
                    </div>
                    {/* END PIE DE PAGINA */}
                </div>
            </div>
        </div>


        // <div className="wrapper bgc-light">
        //         <div className="d-flex flex-column align-items-center pbp-20">
        //           <div className="page ep-page55 bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
        //             {/* contenido DE PAGINA */}







        //         <div className="psp-80 pep-50 mtp-80">

        //             <div className="position-relative w-100 ptp-100 psp-10 pep-10 ">

        //                             <div className="  w-70 text-start mtp--10 msp--10 rounded-p-10">
        //                                 <div className="f-Ubuntu-R psp-20 py-2">Esta página fue completada por:</div>
        //                             </div>

        //                         <div className="bgc-white border-style-solid border-2 border-color-pidgey rounded-p-10 position-relative">
        //                         {/* <div className="position-absolute top-50 start-100 translate-middle    "><img src="images/page_055/img_001.png" className="hp-90" alt="" /></div> */}
        //                         <div className="position-absolute top-50 start-0 translate-middle   "><img src="images/page_055/img_001.png" className="hp-90 mtp--20" alt="" /></div>
        //                             <div className="psp-50 pep-20 pbp-20">
        //                                 <div className="linea pbp-20"></div>
        //                                 <div className="linea pbp-20"></div>

        //                             </div>
        //                         </div>
        //             </div>

        //         </div>



        //         <div className="psp-80 pep-50">

        //             <div className="position-relative w-100 ptp-30 psp-10 pep-10 ">

        //                         <div className="bgc-white border-style-solid border-2 border-color-guile rounded-p-10 position-relative">
        //                         <div className="position-absolute top-50 start-100 translate-middle   msp-10   "><img src="images/page_055/img_003.png" className="hp-90" alt="" /></div>
        //                         <div className="position-absolute top-0 end-0  mtp--20 mep-10 "><img src="images/page_055/img_002.svg" className="hp-65" alt="" /></div>
        //                             <div className="bgc-bach w-55 p-2 text-start mtp--10 msp--10 rounded-p-10 ">
        //                                 <div className="f-Ubuntu-R psp-5 pep-5 ">Queremos que nuestra brigada sea un aporte al colegio, porque:</div>
        //                             </div>
        //                             <div className="psp-20 pep-30 pbp-20">
        //                                 <div className="linea pbp-20"></div>
        //                                 <div className="linea pbp-20"></div>
        //                                 <div className="linea pbp-20"></div>
        //                                 <div className="linea pbp-20"></div>
        //                                 <div className="linea pbp-20"></div>

        //                             </div>
        //                         </div>
        //             </div>

        //         </div>

        //         <div className="psp-80 pep-50">

        //             <div className="position-relative w-100 ptp-30 psp-10 pep-10 ">

        //                         <div className="bgc-white border-style-solid border-2 border-color-pidgey rounded-p-10 position-relative">
        //                         <div className="position-absolute top-50 start-0 translate-middle  msp--10   "><img src="images/page_055/img_004.png" className="hp-90" alt="" /></div>
        //                         {/* <div className="position-absolute top-0 end-0  mtp--20 mep-10 "><img src="images/page_055/img_002.svg" className="hp-65" alt="" /></div> */}
        //                             <div className="bgc-pantro w-55 p-2 text-start mtp--10 msp--10 rounded-p-10 ">
        //                                 <div className="f-Ubuntu-R psp-5 pep-5 ">Preparar un simulacro de emergencia nos sirvió para:</div>
        //                             </div>
        //                             <div className="psp-30 pep-30 pbp-20">
        //                                 <div className="linea pbp-20"></div>
        //                                 <div className="linea pbp-20"></div>
        //                                 <div className="linea pbp-20"></div>
        //                                 <div className="linea pbp-20"></div>
        //                                 <div className="linea pbp-20"></div>

        //                             </div>
        //                         </div>
        //             </div>

        //         </div>
        //         <div className="psp-80 pep-50">

        //             <div className="position-relative w-100 ptp-30 psp-10 pep-10 ">

        //                         <div className="bgc-white border-style-solid border-2 border-color-voldemort rounded-p-10 position-relative">
        //                         <div className="position-absolute top-100 start-100 translate-middle  msp--10  visible-768 "><img src="images/page_055/img_005.png" className="hp-90" alt="" /></div>
        //                         {/* <div className="position-absolute top-0 end-0  mtp--20 mep-10 "><img src="images/page_055/img_002.svg" className="hp-65" alt="" /></div> */}
        //                             <div className="bgc-tigro w-55 p-2 text-start mtp--10 msp--10 rounded-p-10 ">
        //                                 <div className="f-Ubuntu-R psp-5 pep-5 ">Preparar un simulacro de emergencia nos sirvió para:</div>
        //                             </div>
        //                             <div className="psp-30 pep-30 pbp-20">
        //                                 <div className="linea pbp-20"></div>
        //                                 <div className="linea pbp-20"></div>
        //                                 <div className="linea pbp-20"></div>
        //                                 <div className="linea pbp-20"></div>
        //                                 <div className="linea pbp-20"></div>

        //                             </div>
        //                         </div>
        //             </div>

        //         </div>















        //             {/* PIE DE PAGINA */}
        //             <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
        //               <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
        //                 ABP &copy; SM
        //               </div>
        //               <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
        //             </div>
        //              {/* FIN PIE DE PAGINA */}

        //         </div>
        //         </div>
        // </div>





    );
}

export default Page055;
