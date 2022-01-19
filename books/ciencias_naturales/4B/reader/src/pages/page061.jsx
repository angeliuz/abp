import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import "./page_061.css";

function Page061(props) {

  const pagina = "061";
  var indexInput = 0;

  return (
      <div className="wrapper bgc-light">
        <div className="d-flex flex-column align-items-center pbp-20">
          <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
                {/* BEGIN CABECERA VERSIÓN 2 */}
                <div className="cabecera-v2 bgc-saitama d-flex flex-column">
                  <div className="d-flex contenedor-cabecera-v2 align-items-center ptp-40 psp-30 pep-30">
                    {/* <div className="caja-seccion wp-160 hp-60 d-flex justify-content-center ptp-10 mtp-5 color-saitama fsp-24 f-IntroRustG-Base">SESIÓN 12</div>
                    <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Comenzamos a crear</div> */}
                  </div>
                </div> 
                {/* END CABECERA VERSIÓN 2 */}

   
 


          <div className="d-flex justify-content-center  msp-60 mep-40 mtp-40 ">
              <div className="w-90 h-100 position-relative ">
                
                    {/* <div className="position-absolute top-0 start-100 translate-middle img-parlante"><img src="images/page_060/img_005.png" className="hp-100 mtp-20 " alt=""/></div> */}
                    
                  <div className="row d-flex justify-content-center bgc-bobafett rounded-p-20   ">

                   <div className="col-5">
                     <div className="h-100 border-style-solid border-1 border-color-saitama bgc-white">

                            <div className="ptp-10 psp-10 pep-25 mbp-0">
                        {/* <div className="f-Ubuntu-B fsp-20 color-saitama text-start lhp-20 ">Los preparativos</div> */}
                                <div className="d-flex">
                                {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_060/img_001.svg" alt="" /> */}
                                  <div className="f-ccdigitaldelivery-bold fsp-35 color-saitama">4</div>
                                  <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start"> Comparto mi boceto con mi equipo y en conjunto nos decidimos por uno.</div>
                                  {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_045/revista.svg" clasesImagen="cambio hp-35 mtp-20" className="p-0 px-1" /> */}
                                  {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_060/img_002.svg" clasesImagen="hp-40 text-center mtp-10 pep-20" className="p-0 px-0" />   */}
                                </div>
                            </div>



                            <div className="psp-45 pep-20 ptp-20 w-100">
                                <div className="f-Ubuntu-L fsp-16   mep-10 text-start">Escogimos el boceto de:</div>
                                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                            </div>
                            <div className="psp-45 pep-20 ptp-20 w-100">
                                <div className="f-Ubuntu-L fsp-16   mep-10 text-start">Porque:</div>
                                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                            </div>
                            <div className="psp-45 pep-20 ptp-20 w-100">
                                <div className="f-Ubuntu-L fsp-16   mep-10 text-start">Además, le haremos estos ajustes:</div>
                                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-350" />
                            </div>
                     </div>
                    </div> 

                    {/* <div className="col-lg-5 col-sm-12 m-0 p-0 hp-180 caja-sobre">
                      <div className="position-absolute top-100 start-0 translate-middle"><img src="images/page_045/img_008.png" className="hp-80 mtp-100 " alt=""/></div>
                    
                      <div className="border-style-solid border-1 border-color-saitama mtp-10   bgc-white  hp-300 ">
                        <div className="d-flex   ">
                            <img className="hp-20 align-center mt-3 me-2 mb-2 msp--40" src="images/page_045/img_006.svg" alt="" />
                            <div className="f-ccdigitaldelivery-bold fsp-35 color-saitama">2</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-left">La música que queremos<br></br> incluir en nuestra fiesta será…</div>
                            <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_033/circ.png" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" />
                        </div>
                      </div>
                    </div> */}


                    
                    <div className="col-lg-7 col-sm-12  m-0 bgc-bobafett  ptp-20 h-100 position-relative">

                        <div className="position-absolute bottom-0 start-0 "><img src="images/page_060/img_009.png" className="hp-140 mtp--130 msp--210 img-monito-45" alt=""/></div>


                              <div className="bgc-white">

                                      <div className="ptp-10 psp-10 pep-10 mbp-0  msp--20">
                                  {/* <div className="f-Ubuntu-B fsp-20 color-saitama text-start lhp-20 ">Los preparativos</div> */}
                                          <div className="d-flex">
                                          {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_060/img_001.svg" alt="" /> */}
                                            <div className="f-ccdigitaldelivery-bold fsp-35 color-saitama">3</div>
                                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start"> Leo la revista y realizo el boceto de un folleto para divulgar la importancia de contar con brigadas en el colegio.</div>
                                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_045/revista.svg" clasesImagen="cambio hp-35 mtp-20" className="p-0 px-1" /> */}
                                            {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_060/img_002.svg" clasesImagen="hp-40 text-center mtp-10 pep-20" className="p-0 px-0" />   */}
                                          </div>
                                      </div>

                              </div>
                  

                      {/* <div className="caja-debajo-45 mtp-10 position-relative border-style-solid border-1 border-color-saitama ">

                          <div className=" bgc-white w-220  hp-385">
                            <div className=" msp-100 pep-20 ptp-20 psp-0   text-start">

                                <div className="d-flex bgc-white  w-100 ">
                                    <img className="hp-20 align-center mt-3 me-2 mb-2  " src="images/page_045/img_007.svg" alt="" />
                                    <div className="f-ccdigitaldelivery-bold fsp-35 color-saitama">3</div>
                                    <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-left">Escribimos las ideas que queremos incluir en nuestra canción.</div>
                                    <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_033/circ.png" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" />
                                   
                                </div>
                                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-230" />

                                <div className="d-flex bgc-white  w-100 ">
                                    <img className="hp-20 align-center mt-3 me-2 mb-2  " src="images/page_045/img_007.svg" alt="" />
                                    <div className="f-ccdigitaldelivery-bold fsp-35 color-saitama">4</div>
                                    <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-left  ">Escribimos nuestra canción y la guardamos para nuestra fiesta.</div>
                                    <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_033/circ.png" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" />
                                </div>
                            </div>
                          </div>

                      </div> */}
                    </div>
                  </div>



              </div>
          </div>


  



            {/* <div className="ptp-10 psp-100 pep-100 mbp-0 contenedor-pagina position-relative">
            <div className="position-absolute bottom-0 start-0"><img src="images/page_045/img_006.svg" className="wp-100 msp-120" alt=""/></div>
            <div className="f-Ubuntu-B fsp-20 color-pidgey text-start lhp-20">Nos preparamos para elaborar nuestra encuesta</div>
              <div className="row bgc-red">

                <div className="col-md-4 col-12 psp-20 pep-20 pbp-20">
                  <div className="d-flex bgc-yellow wp-300 caja-sobre">
                    <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">2</div>
                    <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-left">Elegimos cinco preguntas para elaborar nuestra encuesta con el material que nos entregarán.</div>
                    <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_033/circ.png" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" />
                  </div>
                </div>

                <div className="col-md-8 position-relative pbp-20 ptp-15">
                  <div className=" w-100 p-3 text-left bgc-yoru border-style-solid border-color-goku border-1 ">
                    <div className="d-flex align-items-center pbp-10">
                      <div className="pep-10"><img src="images/page_033/cuadro.svg" className="hp-30" alt="" /></div>
                      <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">¿Qué edad tienes?</div>
                    </div>
                    <div className="d-flex align-items-center pbp-10">
                      <div className="pep-10"><img src="images/page_033/cuadro.svg" className="hp-30" alt="" /></div>
                      <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">¿De qué nacionalidad eres?</div>
                    </div>
                    <div className="d-flex align-items-center pbp-10">
                      <div className="pep-10"><img src="images/page_033/cuadro.svg" className="hp-30" alt="" /></div>
                      <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">¿Te consideras parte de o perteneces a un pueblo originario?</div>
                    </div>
                    <div className="d-flex align-items-center pbp-10">
                      <div className="pep-10"><img src="images/page_033/cuadro.svg" className="hp-30" alt="" /></div>
                      <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">¿Cuál es tu música favorita?</div>
                    </div>
                    <div className="d-flex align-items-center pbp-10">
                      <div className="pep-10"><img src="images/page_033/cuadro.svg" className="hp-30" alt="" /></div>
                      <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">¿Cuál es tu comida típica favorita?</div>
                    </div>
                    <div className="d-flex align-items-center pbp-10">
                      <div className="pep-10"><img src="images/page_033/cuadro.svg" className="hp-30" alt="" /></div>
                      <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">¿Cuál es tu deporte favorito?</div>
                    </div>
                    <div className="d-flex align-items-center pbp-10">
                      <div className="pep-10"><img src="images/page_033/cuadro.svg" className="hp-30" alt="" /></div>
                      <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">¿Qué te gusta hacer en tu tiempo libre?</div>
                    </div>
                    <div className="d-flex align-items-center pbp-10">
                      <div className="pep-10"><img src="images/page_033/cuadro.svg" className="hp-30" alt="" /></div>
                      <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">¿Cuál es tu asignatura favorita?</div>
                    </div>
                    <div className="d-flex align-items-center pbp-10">
                      <div className="pep-10"><img src="images/page_033/cuadro.svg" className="hp-30" alt="" /></div>
                      <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">Otra:</div>
                      <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                    </div>
                  </div>
                </div>

              </div>
            </div> */}















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

export default Page061;
