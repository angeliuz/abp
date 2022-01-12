import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";

import "./page_043.css";

function Page043(props) {

  const pagina = "043";
  var indexInput = 0;

  return (

    <div className="wrapper bgc-light">
        <div className="d-flex flex-column align-items-center pbp-20">
            <div className="cb-page43 page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
                <img src="images/page_043/cabecera.svg" className="cb-dossier" alt=""/>

                <div className="position-relative w-100">
                        <div className=" psp-80 pep-70 ptp-30 pbp-0 ">
                            <div className="fsp-16 f-Ubuntu-B text-start psp-70 pbp-10"> Esta página ha sido resuelta por</div>
                            <div className="psp-0 ptp-5 pbp-5 bgc-white rounded-p-10 border border-color-lightDark d-flex justify-content-center position-relative">
                            <div className="position-absolute top-50 start-0 translate-middle wp-100 msp-0 mtp-0"><img src="images/page_043/img_002.png" className="w-100" /></div>
                                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="px-1 text-start lhp-35 w-80" />
                            </div>
                            <div className="d-flex flex-row w-90">
                                <div className="pt-4 fsp-16 f-Ubuntu-M text-start pbp-20"> Vemos el video. Luego, leemos y numeramos las tareas del proyecto.</div>
                                {/* <div className="d-flex hp-70 align-items-center justify-content-center">
                                    <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_043/img_003.png" clasesImagen="hp-40" className="d-flex justify-content-center" />
                                </div> */}
                            </div>
                        </div>
                        <div className=" psp-80 pep-70 ptp-20 pbp-90 ">
                            <div className="bgc-white rounded-p-10">
                                <div className="position-relative ptp-10 pbp-25 w-100">
                                    <div className="row psp-20 pep-20">
                                        
                                        <div className="col-md-6 col-sm-6 ptp-20 btp-10 ra-ps">
                                            <div className="block-bottom-19 bloque-19 h-100  p-2 bgc-vegeta rounded-p-10 ps-4 pe-4">
                                                <div className="caja-respuesta-19 bgc-white border-style-solid border-1 rounded-2 border-color-lightDark f-Ubuntu-B">
                                                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="px-1 text-center lhp-35 w-100" />
                                                </div>
                                                <div className="ptp-20 pbp-30 style-puzzle">Publicamos nuestra revista.</div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-sm-6 ptp-20 btp-10 ra-pe">
                                            <div className="block-bottom-19 bloque-19 h-100  p-2 bgc-freezer rounded-p-10 ps-4 pe-4">
                                                <div className="caja-respuesta-19 bgc-white border-style-solid border-1 rounded-2 border-color-lightDark f-Ubuntu-B">
                                                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="px-1 text-center lhp-35 w-100" />
                                                </div>
                                                <div className="ptp-15 pbp-10 style-puzzle">Recopilamos información para la revista.</div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-sm-6 ptp-20 tp-10 ra-ps">
                                            <div className="block-bottom-19 bloque-19 h-100  p-2 bgc-milk rounded-p-10 ps-4 pe-4">
                                                <div className="caja-respuesta-19 bgc-white border-style-solid border-1 rounded-2 border-color-lightDark f-Ubuntu-B">
                                                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="px-1 text-center lhp-35 w-100" />
                                                </div>
                                                <div className="ptp-20 pbp-25 style-puzzle">Celebramos nuestro éxito.</div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-sm-6 ptp-20 btp-10 ra-pe">
                                            <div className="block-bottom-19 bloque-19 h-100  ptp-5 bgc-tshinhan rounded-p-10 ps-4 pe-4">
                                                <div className="caja-respuesta-19 bgc-white border-style-solid border-1 rounded-2 border-color-lightDark f-Ubuntu-B">
                                                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="px-1 text-center lhp-35 w-100" />
                                                </div>
                                                <div className="ptp-10 pbp-25 style-puzzle">Creamos los textos y seleccionamos las imágenes para la revista.</div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-sm-6 ptp-20 btp-10 ra-ps">
                                            <div className="block-bottom-19 bloque-19 h-100  p-2 bgc-ash rounded-p-10 ps-4 pe-4">
                                                <div className="caja-respuesta-19 bgc-white border-style-solid border-1 rounded-2 border-color-lightDark f-Ubuntu-B">
                                                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="px-1 text-center lhp-35 w-100" />
                                                </div>
                                                <div className="ptp-10 pbp-25 style-puzzle">Analizamos y seleccionamos la información recopilada.</div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-sm-6 ptp-20 btp-10 ra-pe">
                                            <div className="block-bottom-19 bloque-19 h-100  p-2 bgc-zoe rounded-p-10 ps-4 pe-4">
                                                <div className="caja-respuesta-19 bgc-white border-style-solid border-1 rounded-2 border-color-lightDark f-Ubuntu-B">
                                                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="px-1 text-center lhp-35 w-100" />
                                                </div>
                                                <div className="ptp-10 pbp-25 style-puzzle">Organizamos el plan de trabajo.</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="pt-4 style-text-b pbp-10">
                                En una cartulina elaboramos un cronograma del proyecto.
                                <img src="images/page_043/img_009.png" className="tf-presentacion hp-160" alt=""/>
                            </div>
                        </div>
                        <img src="images/page_043/img_001.png" className=" tf-mapa hp-90" alt=""/>
                        <img src="images/page_043/img_002.png" className=" tf-estrella hp-70" alt=""/>
                        
                        <img src="images/page_043/img_004.png" className=" tf-bloque-19  hp-60" alt=""/>
                        <img src="images/page_043/img_005.png" className=" tf-carta-19 hp-70" alt=""/>
                        <img src="images/page_043/img_006.png" className=" tf-celular-19 hp-70" alt=""/>
                        <img src="images/page_043/img_007.png" className=" tf-claqueta-19 hp-80" alt=""/>
                        <img src="images/page_043/img_008.png" className=" tf-camara-19 hp-140" alt=""/>
                        <img src="images/page_043/img_010.png" className=" tf-metro-19 hp-70" alt=""/>
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


  );
}

export default Page043;
