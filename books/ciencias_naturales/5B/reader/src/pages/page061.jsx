import React from "react";
import InputBox from "../components/InputBox";
import Check from "../components/Check";
import "./page_061.css";

function Page061(props) {

  const pagina = "061";
  var indexInput = 0;
  const etapa = "5"
  const background = "bgc-saitama";
  const color = "color-saitama";
  const borderColor = "border-color-saitama"
  const borderColorTabla = "border-color-bobafett"
  const bgc_cajas = "bgc-bobafett";

  return (


    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>

          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className={"cabecera-v2 d-flex flex-column " + background}>
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className={"caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base color-dark"}>SESIÓN 17</div>
              <div className="d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¡Somos creativos en la campaña!</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-95">
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Mis objetivos en <br /> esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Establecer los recursos<br /> que hay que crear

              </div>
              <div className="psp-5 pep-5 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Repartir tareas <br />y pensar en lo que se<br /> va a necesitar

              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Escribir textos <br />llamativos para<br /> la campaña

              </div>
              <div className="psp-5 pep-5 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Evaluar todas <br />las creaciones


              </div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-30 container-titulo-global mbp-0">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
                            xxx
                        </div> */}
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                1
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Al crear la campaña, con la que daremos a conocer nuestra propuesta de alimentación saludable, debemos tener presente que:
              </div>
              {/* <img src={"images/page_"+pagina+"/img_001.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>










          <div className="d-flex global-margin mtp-20 mbp-60 psp-30 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle   msp-0 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-80" alt="" /></div>
                <div className="position-absolute top-50 start-0 translate-middle    msp--20 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-50" alt="" /></div>

                <div className="row w-100 border-style-solid border-2 border-color-obiwan sombra bgc-hotaru  rounded-p-10 mbp-10">

                  <div className="col-6 p-3">
                    <div className="text-start">El objetivo de la campaña es...</div>
                    <div className="w-100 p-2 mtp-3 bgc-white border-style-solid border-1 rounded-p-10 border-color-obiwan sombra">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                    </div>
                  </div>
                  <div className="col-6 p-3">
                    <div className="text-start">Las ideas que queremos transmitir son....</div>
                    <div className="w-100 p-2 mtp-3 bgc-white border-style-solid border-1 rounded-p-10 border-color-obiwan sombra">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                    </div>
                  </div>

                  <div className="col-12 p-3">
                    <div className="w-100 p-3 mtp-3 bgc-white border-style-solid border-1 border-color-obiwan sombra rounded-p-10 ">
                      <div className="text-start">Para ello, utilizaremos...</div>




                      <div className="row psp-4">
                        <div className="col-md-4 col-sm-6 p-2">
                          <div className="d-flex w-100 p-0">
                            {/* <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1"> */}
                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            {/* <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 wp-30 text-center flex-grow-1 lhp-30 min-hp-35" /> */}
                            {/* </div> */}
                            <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Frases motivadoras</div>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6 p-2">
                          <div className="d-flex w-100 p-0">
                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Preguntas frecuentes</div>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-12 p-2">
                          <div className="d-flex w-100 p-0">
                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Slogans</div>
                          </div>
                        </div>


                        <div className="col-12 p-0 m-0">
                          <div className="d-flex align-items-start justify-content-start  p-2  f-Ubuntu-R fsp-15   ">
                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            <div className="f-Ubuntu-L  ptp-10 f-Ubuntu-R fsp-15 psp-5  ">Otros: </div>
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-0 w-20 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />

                          </div>
                        </div>

                        <div className="p-0 m-0">

                          <div className="text-start p-2">Para ello, utilizaremos...</div>
                        </div>

                        <div className="col-md-4 col-sm-6 p-2">
                          <div className="d-flex w-100 p-0">


                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Infografías</div>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6 p-2">
                          <div className="d-flex w-100 p-0">
                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Afiches</div>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-12 p-2">
                          <div className="d-flex w-100 p-0">
                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Folletos</div>
                          </div>
                        </div>

                        <div className="col-md-4 col-sm-6 p-2">
                          <div className="d-flex w-100 p-0">
                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Propaganda</div>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6 p-2">
                          <div className="d-flex w-100 p-0">
                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Fotografías</div>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-12 p-2">
                          <div className="d-flex w-100 p-0">
                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Dibujos</div>
                          </div>
                        </div>

                        <div className="col-md-4 col-sm-6 p-2">
                          <div className="d-flex w-100 p-0">
                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Audios</div>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6 p-2">
                          <div className="d-flex w-100 p-0">
                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Animaciones</div>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-12 p-2">
                          <div className="d-flex w-100 p-0">
                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Videos</div>
                          </div>
                        </div>
                      </div>





                      <div className="col-12 p-0 m-0 ">
                        <div className="d-flex align-items-start justify-content-start  ptp-10  f-Ubuntu-R fsp-15   ">
                          <Check id={"imagen" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                          <div className="f-Ubuntu-L  ptp-10 f-Ubuntu-R fsp-15 psp-5  ">Otros: </div>
                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-0 w-20 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-200" />

                        </div>
                      </div>
                      {/* <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" /> */}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>



          {/* <div className="d-flex flex-row">
                                                <div className="d-flex w-100 p-2">
                                                    <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 wp-30 text-center flex-grow-1 lhp-30 min-hp-35" />
                                                    </div>
                                                    <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Frases motivadoras</div>
                                                </div>
                                                <div className="d-flex w-100 p-2">
                                                    <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 wp-30 text-center flex-grow-1 lhp-30 min-hp-35" />
                                                    </div>
                                                    <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Preguntas frecuentes</div>
                                                </div>
                                                <div className="d-flex w-100 p-2">
                                                    <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 wp-30 text-center flex-grow-1 lhp-30 min-hp-35" />
                                                    </div>
                                                    <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5"> Slogans</div>
                                                </div>
                                            </div> */}



          {/* BEGIN PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
              ABP &copy; SM
            </div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>

            <div className={etapa == 1 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_motivacion.svg" className={etapa == 1 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className={etapa == 2 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_planificacion.svg" className={etapa == 2 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className={etapa == 3 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_investigacion.svg" className={etapa == 3 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className={etapa == 4 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_experimentacion.svg" className={etapa == 4 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className={etapa == 5 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_creacion.svg" className={etapa == 5 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className={etapa == 6 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_difusion.svg" className={etapa == 6 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
              <div className="w-100 hp-25 bgc-pikachu"></div>
            </div>
          </div>
          {/* END PIE DE PAGINA */}

        </div>
      </div>
    </div>

  );
}

export default Page061;
