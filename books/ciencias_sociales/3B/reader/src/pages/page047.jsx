import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";
import "./page_047.css";

function Page047(props) {

  const pagina = "047";
  var indexInput = 0;

  return (
      <div className="wrapper bgc-light">
        <div className="d-flex flex-column align-items-center pbp-20">
          <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
                {/* BEGIN CABECERA VERSIÓN 2 */}
                <div className="cabecera-v2 bgc-saitama d-flex flex-column">
                  <div className="d-flex contenedor-cabecera-v2 align-items-center ptp-40 psp-30 pep-30">
                    <div className="caja-seccion wp-160 hp-60 d-flex justify-content-center ptp-10 mtp-5 color-saitama fsp-24 f-IntroRustG-Base">SESIÓN 13</div>
                    <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Somos escritores</div>
                  </div>
                </div> 
                {/* END CABECERA VERSIÓN 2 */}

            <div className="ptp-10 psp-60 mbp-0 contenedor-pagina">
              <div className="f-Ubuntu-B fsp-20 color-saitama text-start lhp-20">La diversidad en la literatura</div>
              <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_033/g_i.svg" alt="" /> */}
                <div className="f-ccdigitaldelivery-bold fsp-35 color-saitama">1</div>
                <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start">Leo la revista, comprendo y completo.</div>
                <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_047/img_001.svg" clasesImagen="hp-40 msp-30 text-center mtp-10 " className="p-0 px-0" />
                {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_045/img_001.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              </div>
            </div>
 
 


            <div className="d-flex msp-100 mep-60 position-relative mtp-20">
                <div className="border border-3 p-3 hp-275 w-100 ">
                  <div><img src="images/page_043/img_004.png" className="position-absolute top-50 start-0 translate-middle wp-40" alt=""></img></div> 
                  <div className="msp-20 ">
                      <div className=" linea1 min-hp-100  ">
                            <div className="f-Ubuntu-L fsp-15 text-start">El texto que más me gustó fue…</div>
                             <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-90" />
                      </div>
                       <div className=" linea1 min-hp-100   ">
                            <div className="f-Ubuntu-L fsp-15 text-start">Porque…</div>
                            <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-90" />
                       </div>

                  </div>
                </div>
            
          </div>

 



                <div className="d-flex justify-content-center  mtp-10 msp-60 mep-40">
                     <div className="row w-100 d-flex justify-content-center">

                          <div className="col-lg-5 col-sm-12 d-flex   ">
                              <div className="d-flex ">
                                    {/* <img className="hp-15 align-center mt-3 me-2 mb-2" src="images/page_014/img_001.svg" alt="" /> */}
                                    <div className="f-ccdigitaldelivery-bold fsp-35 color-saitama">2</div>
                                    <div className="f-Ubuntu-R fsp-16 text-start ptp-18 psp-10">El texto narrativo que presentaré en nuestra feria de la diversidad será:…</div>
                                    {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_045/img_001.svg" clasesImagen="hp-40 text-center msp-30 mtp-10 " className="p-0 px-0" /> */}
                              </div>  
                          </div>

                          <div className="col-lg-7  col-sm-12 d-flex justify-content-start mtp-20  ">
                                <div className=" mtp-20 position-relative "><img className="hp-160" src="images/page_047/img_005.svg" alt="" />
                                    <img className="hp-30 align-center  position-absolute top-0 start-100 translate-middle msp--6  mtp-20   " src="images/page_047/img_003.svg" alt="" />

                                    <div className="position-absolute top-0 start-50 translate-middle-x  msp--40 mep-20 mtp-20 msp-20">
                                        <div className="d-flex align-items-center pbp-10">
                                            <div className="d-inline wp-30 hp-30 border-style-solid border-1 border-color-dark bgc-white"></div>
                                            <div className="f-Ubuntu-L msp-10 fsp-15 lh-sm pep-5">Cuento.</div>
                                        </div>
                                        <div className="d-flex align-items-center pbp-10">
                                            <div className="d-inline wp-30 hp-30 border-style-solid border-1 border-color-dark bgc-white"></div>
                                            <div className="f-Ubuntu-L msp-10 fsp-15 lh-sm pep-5">Anécdota.</div>
                                        </div>
                                        <div className="d-flex align-items-center pbp-10">
                                            <div className="d-inline wp-30 hp-30 border-style-solid border-1 border-color-dark bgc-white"></div>
                                            <div className="f-Ubuntu-L msp-10 fsp-15 lh-sm pep-5">Narración.</div>
                                        </div> 
                                    </div>
                                </div>



                          </div>

                    </div>
                </div>


  

                <div className="d-flex   msp-80 msp-40">
                    {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_033/g_i.svg" alt="" /> */}
                      <div className="f-ccdigitaldelivery-bold fsp-35 color-saitama">3</div>
                      <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start">El texto que creará tendrá…</div>
                      {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_047/img_001.svg" clasesImagen="hp-40 msp-30 text-center mtp-10 " className="p-0 px-0" /> */}
                      {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_045/img_001.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                </div>
 



                <div className="row mtp-20 container-row px-5">
                        <div className="col-sm-12 col-md-6   ">
                            <div className="border-style-solid mtp-10 border-2 border-color-saitama rounded-p-10 hp-220 w-100 hp-190  ">
                              <div className="f-pixilate-bold fsp-18  p-3 text-start color-saitama ">Personajes: </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6  position relative">
                        <div className="espirales-creacion-47   position-absolute"><img src="images/page_047/img_006.png" className="w-45 " alt=""/></div>
                            <div className="border-style-solid mtp-10 border-2 border-color-saitama rounded-p-10 hp-220 w-100 hp-190  ">
                              <div className="f-pixilate-bold fsp-18  p-3 text-start color-saitama ">Ambiente/época: </div>
                            </div>
                        </div>

                </div>












            <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
              <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
              <div className="bgc-goku wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
            </div>

            <div className="row w-100 position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>
              <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
                <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
                <div className="w-100 hp-25 bgc-goten"></div>
              </div>
              <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
                <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
                <div className="w-100 hp-25 bgc-bulma"></div>
              </div>
              <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
                <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
                <div className="w-100 hp-25 bgc-android18"></div>
              </div>
              <div className="col-7 col-sm-2 p-0 m-0 position-relative">
                <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
                <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
                <div className="w-100 hp-25 bgc-pidgey"></div>
              </div>
              <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                <img src="images/rotulo_creacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
                <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
                <div className="w-100 hp-25 bgc-saitama"></div>
              </div>
              <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                <img src="images/rotulo_difusion.svg" className="oculto" alt="" />
                <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
                <div className="w-100 hp-25 bgc-pikachu"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Page047;
