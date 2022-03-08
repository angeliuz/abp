import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import Check from "../components/Check";

import "./page_019.css";

function Page019(props) {

    const pagina = "019";
    var indexInput = 0;
    const background = "bgc-bulma";
    const color = "color-bulma";
    const borderColor = "border-color-bulma"
    const borderColorTabla = "border-color-buzz"
    const bgc_cajas = "bgc-piccolo";

    return (

        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="cb-page19 page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
                    <img src="images/page_019/cabecera.svg" className="cb-dossier" alt="" />

                    <div className="position-relative w-100 mbp-20">
                        <div className=" psp-80 pep-70 ptp-30 pbp-0 ">
                            <div className="fsp-16 f-Ubuntu-R text-start psp-0 pbp-10">Esta página ha sido completada por:</div>
                            <div className="psp-0 ptp-5 pbp-5 bgc-white rounded-p-10 border border-color-lightDark d-flex justify-content-center position-relative">
                                <div className="position-absolute top-50 start-0 translate-middle wp-100 msp-0 mtp-0"><img src="images/page_019/img_001.png" className="wp-70" /></div>
                                <div className="position-absolute top-50 start-100 translate-middle wp-100 msp-0 mtp-0"><img src="images/page_019/img_002.png" className="w-50" /></div>
                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 text-start lhp-35 w-80" />
                            </div>

                        </div>
                    </div>
                    <div className="container-titulo-global mtp-20 mbp-0">
                        <div className="d-flex psp-20">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Vemos el video. Luego, leemos y numeramos las tareas del proyecto.
                            </div>
                            {/* <ModalVideo id={"p" + pagina + "_video" + (indexInput += 1)} image={"images/page_" + pagina + "/img_003.png"} className="hp-20" alt="" /> */}
                            <ModalVideo id={"p" + pagina + "_video" + (indexInput += 1)} image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" />
                            {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>
                    <div className=" psp-80 pep-70 ptp-20 pbp-0 ">
                        <div className="bgc-white rounded-p-10">
                            <div className="position-relative ptp-10 pbp-25 w-100">
                                <div className="row psp-20 pep-20">
                                    <div className="col-md-6 col-sm-6 ptp-20 btp-10 ra-ps position-relative pbp-20">
                                        <div className="position-absolute top-100 start-0 translate-middle mtp--20 msp-0 zindex-1"><img src="images/page_019/img_005.png" className="wp-80" alt="" /></div>
                                        <div className="position-absolute top-0 start-50 translate-middle mtp-20 msp--10 zindex-1">
                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                        </div>
                                        <div className="d-flex center-center h-100 w-90 p-2 bgc-vegeta rounded-p-10 position-relative">
                                            <div className="position-absolute top-50 start-100 translate-middle mtp-0 msp--10 bgc-white wp-50 hp-35 zindex-1 rounded-tbs-20 "></div>
                                            <div className="min-hp-100 d-flex center-center w-70 f-Ubuntu-R fsp-14 ptp-10 pbp-10">Publicamos nuestra revista.</div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-sm-6 ptp-20 btp-10 ra-pe position-relative d-flex justify-content-end pbp-20">
                                        <div className="position-absolute top-100 start-100 translate-middle mtp--20 msp-0 zindex-1"><img src="images/page_019/img_006.png" className="wp-60" alt="" /></div>
                                        <div className="position-absolute top-0 start-100 translate-middle mtp--10 msp--30 zindex-1"><img src="images/page_019/img_004.png" className="wp-150" alt="" /></div>

                                        <div className="position-absolute top-0 start-50 translate-middle mtp-20 msp-10 zindex-1">
                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                        </div>
                                        <div className="d-flex center-center h-100 w-90 p-2 bgc-freezer rounded-p-10 position-relative">
                                            <div className="position-absolute top-50 start-0 translate-middle mtp-0 msp--10 bgc-freezer wp-40 hp-35 zindex-1 rounded-tbs-20 "></div>
                                            <div className="min-hp-100 d-flex center-center f-Ubuntu-R  fsp-14 ptp-10 pbp-10">Recopilamos información para la revista.</div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-sm-6 ptp-20 tp-10 ra-ps position-relative pbp-20">

                                        <div className="position-absolute top-0 start-50 translate-middle mtp-20 msp--10 zindex-1">
                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                        </div>
                                        <div className="d-flex center-center h-100 w-90 p-2 bgc-milk rounded-p-10 position-relative">
                                            <div className="position-absolute top-50 start-100 translate-middle mtp-0 msp--10 bgc-white wp-50 hp-35 zindex-1 rounded-tbs-20 "></div>
                                            <div className="min-hp-100 d-flex center-center w-50 f-Ubuntu-R  fsp-14 ptp-10 pbp-10">Celebramos nuestro éxito.</div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-sm-6 ptp-20 btp-10 ra-pe position-relative d-flex justify-content-end pbp-20">
                                        <div className="position-absolute top-0 start-50 translate-middle mtp-20 msp-10 zindex-1">
                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                        </div>
                                        <div className="d-flex center-center min-hp-100 w-90 p-2 bgc-tshinhan rounded-p-10 position-relative">
                                            <div className="position-absolute top-50 start-0 translate-middle mtp-0 msp--10 bgc-tshinhan wp-40 hp-35 zindex-1 rounded-tbs-20 "></div>
                                            <div className="min-hp-100 w-80 d-flex center-center f-Ubuntu-R fsp-14 ptp-10 pbp-10">Creamos los textos y seleccionamos las imágenes para la revista.</div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-sm-6 ptp-20 btp-10 ra-ps position-relative pbp-20">

                                        <div className="position-absolute top-0 start-50 translate-middle mtp-20 msp--10 zindex-1">
                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                        </div>
                                        <div className="position-absolute top-100 start-0 translate-middle mtp--20 msp-0 zindex-1"><img src="images/page_019/img_007.png" className="wp-80" alt="" /></div>
                                        <div className="d-flex center-center min-hp-100 w-90 p-2 bgc-ash rounded-p-10 position-relative">
                                            <div className="position-absolute top-50 start-100 translate-middle mtp-0 msp--10 bgc-white wp-50 hp-35 zindex-1 rounded-tbs-20 "></div>
                                            <div className="min-hp-100 d-flex center-center w-70 f-Ubuntu-R  fsp-14 ptp-10 pbp-10">Analizamos y seleccionamos la información recopilada.</div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-sm-6 ptp-20 btp-10 ra-pe position-relative d-flex justify-content-end pbp-20">
                                        <div className="position-absolute top-0 start-50 translate-middle mtp-20 msp-10 zindex-1">
                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                        </div>
                                        <div className="position-absolute top-100 start-100 translate-middle mtp--20 msp-0 zindex-1"><img src="images/page_019/img_008.png" className="wp-80" alt="" /></div>
                                        <div className="d-flex center-center min-hp-100 w-90 p-2 bgc-cyrax rounded-p-10 position-relative">
                                            <div className="position-absolute top-50 start-0 translate-middle mtp-0 msp--10 bgc-cyrax wp-40 hp-35 zindex-1 rounded-tbs-20 "></div>
                                            <div className="min-hp-100 d-flex center-center f-Ubuntu-R  fsp-14 ptp-10 pbp-10">Organizamos el plan de trabajo.</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="psp-80 pep-60 ptp-30 pbp-90">
                        <div className="row w-100">
                            <div className="col-6 position-relative d-flex align-items-center">
                                <div className="position-absolute top-100 start-0 translate-middle mtp-30 msp-40 zindex-1"><img src="images/page_019/img_010.png" className="wp-120" alt="" /></div>
                                <div className="pt-2 pbp-10 position-relative text-start f-Ubuntu-R">
                                    En una cartulina elaboramos un cronograma del proyecto.
                                </div>
                            </div>
                            <div className="col-6 position-relative">
                                <img src="images/page_019/img_009.png" className=" hp-160" alt="" />

                            </div>

                        </div>
                    </div>



                    {/* PIE DE PAGINA */}
                    <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                        <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
                            ABP &copy; SM
                        </div>
                        <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
                    </div>

                </div>
            </div>
        </div>




        // <div className="wrapper bgc-light">
        //     <div className="d-flex flex-column align-items-center pbp-20">
        //         <div className="cb-page19 page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
        //             <img src="images/page_019/cabecera.svg" className="cb-dossier" alt=""/>

        //             <div className="position-relative w-100">

        //                     <div className=" psp-80 pep-70 ptp-30 pbp-0 ">
        //                         <div className="fsp-16 f-Ubuntu-B text-start psp-70 pbp-10"> Esta página ha sido resuelta por</div>
        //                         <div className="psp-0 ptp-5 pbp-5 bgc-white rounded-p-10 border border-color-lightDark d-flex justify-content-center position-relative">
        //                         <div className="position-absolute top-50 start-0 translate-middle mtp-0 msp-0 zindex-1"><img src="images/page_019/img_001.png" className="wp-100" alt="" /></div>
        //                         <div className="position-absolute top-50 start-100 translate-middle mtp-0 msp-0 zindex-1"><img src="images/page_019/img_002.png" className="wp-60" alt="" /></div>
        //                             <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="px-1 text-start lhp-35 w-80" />
        //                         </div>
        //                         <div className="d-flex flex-row w-90">
        //                             <div className="pt-4 fsp-16 f-Ubuntu-M text-start pbp-20"> Vemos el video. Luego, leemos y numeramos las tareas del proyecto.</div>
        //                             <div className="d-flex hp-70 align-items-center justify-content-center">
        //                                 <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_019/img_003.png" clasesImagen="hp-40" className="d-flex justify-content-center" />
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className=" psp-80 pep-70 ptp-20 pbp-0 ">
        //                         <div className="bgc-white rounded-p-10">
        //                             <div className="position-relative ptp-10 pbp-25 w-100">
        //                                 <div className="row psp-20 pep-20">

        //                                     <div className="col-md-6 col-sm-6 ptp-20 btp-10 ra-ps position-relative">

        //                                         <div className="position-absolute top-100 start-0 translate-middle mtp--20 msp-0 zindex-1"><img src="images/page_019/img_005.png" className="wp-80" alt="" /></div>
        //                                         <div className="block-bottom-19 bloque-19 h-100  p-2 bgc-vegeta rounded-p-10 ps-4 pe-4">
        //                                             <div className="caja-respuesta-19 bgc-white border-style-solid border-1 rounded-2 border-color-lightDark f-Ubuntu-B">
        //                                             <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="px-1 text-center lhp-35 w-100" />
        //                                             </div>
        //                                             <div className="ptp-20 pbp-30 style-puzzle">Publicamos nuestra revista.</div>
        //                                         </div>
        //                                     </div>

        //                                     <div className="col-md-6 col-sm-6 ptp-20 btp-10 ra-pe position-relative">
        //                                         <div className="position-absolute top-100 start-100 translate-middle mtp--20 msp-0 zindex-1"><img src="images/page_019/img_006.png" className="wp-60" alt="" /></div>
        //                                         <div className="position-absolute top-0 start-100 translate-middle mtp--10 msp--30 zindex-1"><img src="images/page_019/img_004.png" className="wp-150" alt="" /></div>
        //                                         <div className="block-bottom-19 bloque-19 h-100  p-2 bgc-freezer rounded-p-10 ps-4 pe-4">
        //                                             <div className="caja-respuesta-19 bgc-white border-style-solid border-1 rounded-2 border-color-lightDark f-Ubuntu-B">
        //                                                 <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="px-1 text-center lhp-35 w-100" />
        //                                             </div>
        //                                             <div className="ptp-15 pbp-10 style-puzzle">Recopilamos información para la revista.</div>
        //                                         </div>
        //                                     </div>

        //                                     <div className="col-md-6 col-sm-6 ptp-20 tp-10 ra-ps">
        //                                         <div className="block-bottom-19 bloque-19 h-100  p-2 bgc-milk rounded-p-10 ps-4 pe-4">
        //                                             <div className="caja-respuesta-19 bgc-white border-style-solid border-1 rounded-2 border-color-lightDark f-Ubuntu-B">
        //                                                 <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="px-1 text-center lhp-35 w-100" />
        //                                             </div>
        //                                             <div className="ptp-20 pbp-25 style-puzzle">Celebramos nuestro éxito.</div>
        //                                         </div>
        //                                     </div>

        //                                     <div className="col-md-6 col-sm-6 ptp-20 btp-10 ra-pe">
        //                                         <div className="block-bottom-19 bloque-19 h-100  ptp-5 bgc-tshinhan rounded-p-10 ps-4 pe-4">
        //                                             <div className="caja-respuesta-19 bgc-white border-style-solid border-1 rounded-2 border-color-lightDark f-Ubuntu-B">
        //                                                 <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="px-1 text-center lhp-35 w-100" />
        //                                             </div>
        //                                             <div className="ptp-10 pbp-25 style-puzzle">Creamos los textos y seleccionamos las imágenes para la revista.</div>
        //                                         </div>
        //                                     </div>

        //                                     <div className="col-md-6 col-sm-6 ptp-20 btp-10 ra-ps position-relative">
        //                                         <div className="position-absolute top-100 start-0 translate-middle mtp--20 msp-0 zindex-1"><img src="images/page_019/img_007.png" className="wp-80" alt="" /></div>
        //                                         <div className="block-bottom-19 bloque-19 h-100  p-2 bgc-ash rounded-p-10 ps-4 pe-4">
        //                                             <div className="caja-respuesta-19 bgc-white border-style-solid border-1 rounded-2 border-color-lightDark f-Ubuntu-B">
        //                                                 <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="px-1 text-center lhp-35 w-100" />
        //                                             </div>
        //                                             <div className="ptp-10 pbp-25 style-puzzle">Analizamos y seleccionamos la información recopilada.</div>
        //                                         </div>
        //                                     </div>

        //                                     <div className="col-md-6 col-sm-6 ptp-20 btp-10 ra-pe position-relative">
        //                                         <div className="position-absolute top-100 start-100 translate-middle mtp--20 msp-0 zindex-1"><img src="images/page_019/img_008.png" className="wp-80" alt="" /></div>
        //                                         <div className="block-bottom-19 bloque-19 h-100  p-2 bgc-zoe rounded-p-10 ps-4 pe-4">
        //                                             <div className="caja-respuesta-19 bgc-white border-style-solid border-1 rounded-2 border-color-lightDark f-Ubuntu-B">
        //                                                 <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="px-1 text-center lhp-35 w-100" />
        //                                             </div>
        //                                             <div className="ptp-10 pbp-25 style-puzzle">Organizamos el plan de trabajo.</div>
        //                                         </div>
        //                                     </div>
        //                                 </div>

        //                             </div>
        //                         </div>

        //                     </div>

        //                 </div>

        //                 <div className="psp-80 pep-60 ptp-30 pbp-90">
        //                     <div className="row w-100">
        //                         <div className="col-6 position-relative d-flex align-items-center">
        //                             <div className="position-absolute top-100 start-0 translate-middle mtp-20 msp-20 zindex-1"><img src="images/page_019/img_010.png" className="wp-120" alt="" /></div>
        //                             <div className="pt-2 pbp-10 position-relative text-start f-Ubuntu-R">
        //                                 En una cartulina elaboramos un cronograma del proyecto.
        //                             </div>
        //                         </div>
        //                         <div className="col-6 position-relative bgc-red">
        //                                 <img src="images/page_019/img_009.png" className=" hp-160" alt=""/>

        //                         </div>

        //                     </div>
        //                 </div>


        //           {/* PIE DE PAGINA */}
        //           <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
        //               <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
        //                 ABP &copy; SM
        //               </div>
        //               <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
        //           </div>

        //         </div>
        //     </div>
        // </div>


    );
}

export default Page019;
