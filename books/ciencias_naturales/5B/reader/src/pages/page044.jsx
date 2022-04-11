import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check";
import SubirImagen from '../components/SubirImagen';

import "./page_044.css";

function Page044(props) {

  const pagina = "044";
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
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>

          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v1 hp-80 bgc-pidgey"></div>
          {/* END CABECERA VERSIÓN 2 */}




          <div className="container-titulo-global mtp-20 mbp-0">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 "+color}>
            xxx
            </div> */}
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                3
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Completo mi credencial de encuestador.
              </div>
              {/* <img src={"images/page_"+pagina+"/img_00.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>


          <div className="d-flex global-margin mtp-50 mbp-20 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative  d-flex justify-content-center">
                <div className="position-absolute top-0 start-50 translate-middle   msp-0 mtp--15   zindex-1"><img src={"images/page_" + pagina + "/tarjeta.svg"} className="wp-200" alt="" /></div>
                <div className="row wp-600    mtp-15  border-style-solid border-1 border-color-dark  rounded-p-10 p-1 ">
                  <div className="col-4 m-0 p-0  rounded-tbs-10 bgc-rain ">
                    <div className="w-100   pp-15 ">
                      <div className="border-style-solid border-1 border-color-dark w-100 bgc-white">
                        {/* <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" /> */}
                        <SubirImagen
                          id={"imagen_" + pagina + "_" + (indexInput += 1)}
                          className="w-100 bgc-white min-hp-150"
                          colorUnidad={background}
                          imagenPlaceHolder1="images/generales/subir_imagen1.svg"
                          imagenPlaceHolder2="images/generales/subir_imagen2.svg"
                          titulo="Subir imagen"
                        />
                      </div>
                    </div>
                    <div className="psp-15 pep-10 ptp-5 pbp-15">

                      <div className="f-Ubuntu-R fsp-15 lh-sm   text-start">Nombre: </div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100" />
                      <div className=""></div>
                      <div className="f-Ubuntu-R fsp-15 lh-sm   text-start">Curso:</div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                      <div className=""></div>
                    </div>
                  </div>


                  <div className="col-8 m-0 p-0">
                    <div className="  w-100   ">
                      <div className="w-100 mtp-15   bgc-barbie    f-Ubuntu-R fsp-20 fw-700 color-white ">Encuestador</div>
                      <div className="psp-10 pep-10 ptp-15">
                        <div className="f-Ubuntu-R fsp-15 lh-sm   text-start">Escribo el saludo y la explicación que daré para aplicar la encuesta.</div>
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                        <div className=""></div>
                        <div className="f-Ubuntu-R fsp-15 lh-sm   text-start">Escribo el agradecimiento y la despedida que diré antes de irme.</div>
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                        <div className=""></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>




          <div className="container-titulo-global mtp-30 mbp-0">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 "+color}>
            xxx
            </div> */}
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                4
              </div>
              <div className="f-Ubuntu-R fsp-16 lh-sm ptp-18 psp-10 pep-10 text-start">Pongo <img src={"images/generales/ticket.svg"} className="wp-15" alt="" />  según corresponda.</div>
              {/* <img src={"images/page_"+pagina+"/img_00.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>






          <div className="d-flex global-margin mtp-20 mbp-110  psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0  w-100">
              <div className="col-12 p-0 msp--10 position-relative">
                <div className="d-flex justify-content-center">
                  <div className=" wp-500  psp-20 pbp-20  ptp-10 pep-10 border-style-solid border-1 border-color-dark bgc-pantro  position-relative ">
                    <div className="position-absolute top-0 start-0 translate-middle     msp-20  mtp-20   hp-15 wp-15   border-style-solid  border-color-dark border-1 bgc-saitama rounded-circle "></div>
                    <div className="position-absolute top-0 start-100 translate-middle   msp--20 mtp-20   hp-15 wp-15   border-style-solid  border-color-dark border-1 bgc-saitama rounded-circle "></div>
                    <div className="position-absolute top-100 start-100 translate-middle msp--20 mtp--20  hp-15 wp-15   border-style-solid  border-color-dark border-1 bgc-saitama rounded-circle "></div>
                    <div className="position-absolute top-100 start-0 translate-middle   msp-20  mtp--20  hp-15 wp-15   border-style-solid  border-color-dark border-1 bgc-saitama rounded-circle "></div>

                    <div className="position-absolute top-50 start-0 translate-middle    msp--10 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/libreta.png"} className="wp-60" alt="" /></div>
                    <div className="position-absolute top-0 start-100 translate-middle   msp-10 mtp-70 visible-768 zindex-1"><img src={"images/page_" + pagina + "/estrella.png"} className="wp-40" alt="" /></div>
                    <div className="position-absolute top-100 start-100 translate-middle  msp-75 mtp--120 visible-768 zindex-1"><img src={"images/page_" + pagina + "/mono.png"} className="wp-140" alt="" /></div>
                    <div className="f-Ubuntu-R fsp-18 lh-sm fw-700 ptp-18 psp-10 pep-10 text-center">Lista de control</div>


                    <div className="d-flex w-100 p-2 ">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                      <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Tengo claro cómo me presentaré ante los encuestados.</div>
                    </div>
                    <div className="d-flex w-100 p-2">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                      <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Tengo la credencial de encuestador lista y visible.</div>
                    </div>
                    <div className="d-flex w-100 p-2">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                      <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Tengo las copias de la encuesta listas para implementar.</div>
                    </div>
                    <div className="d-flex w-100 p-2">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                      <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Tengo las autorizaciones necesarias para aplicar la
                        encuesta</div>
                    </div>
                    <div className="d-flex w-100 p-2">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                      <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Tengo claro a quiénes debo aplicar la encuesta.</div>
                    </div>
                    <div className="d-flex w-100 p-2">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                      <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Sé qué decir para agradecer y despedirme de mis
                        encuestados.</div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>













          {/* <div className="d-flex global-margin mtp-10 mbp-60 psp-50 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100 position-relative">
                            <div className="position-absolute top-50 start-0 translate-middle zindex-2"><img src={"images/page_" + pagina + "/lapiz.png"} className="hp-80 mep-10 mbp-200" alt="" /></div>
                            <div className="col-12 m-0 rounded-p-10 bgc-motaro p-3 position-relative">
                                <div className="text-center f-colby-bold fsp-18 pbp-10">ENCUESTA</div>
                                <div className="d-flex align-items-center pbp-10">
                                    <div className="f-Ubuntu-L fsp-15 lh-sm pep-5 text-start">Nombre:</div>
                                    <div className="w-100 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 fsp-15 text-start flex-grow-1 lhp-30 min-hp-30 contenedor-linea" /></div>
                                    <div className="f-Ubuntu-L fsp-15 lh-sm pep-5 psp-10">Curso:</div>
                                    <div className="w-20 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 fsp-15 text-start flex-grow-1 lhp-30 min-hp-30 contenedor-linea" /></div>
                                </div>
                                <div className="d-flex align-items-center pbp-10">
                                    <div className="f-Ubuntu-L fsp-15 lh-sm pep-5 text-start">Fecha de nacimiento:</div>
                                    <div className="w-100 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 fsp-15 text-start flex-grow-1 lhp-30 min-hp-30 contenedor-linea" /></div>
                                    <div className="f-Ubuntu-L fsp-15 lh-sm pep-5 psp-10 text-start">Tengo:</div>
                                    <div className="w-20 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 fsp-15 text-start flex-grow-1 lhp-30 min-hp-30 contenedor-linea" /></div>
                                    <div className="f-Ubuntu-L fsp-15 lh-sm pep-5 psp-5 text-start">años</div>
                                </div>
                                <div className="d-flex align-items-center pbp-10">
                                    <div className="f-Ubuntu-L fsp-15 lh-sm pep-5 text-start"><span className="f-Ubuntu-M pep-10">1.</span>¿Compras en el kiosco del colegio?</div>
                                    <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-30" /></div>
                                    <div className="f-Ubuntu-L fsp-15 lh-sm pep-10 psp-5 text-start">Sí</div>
                                    <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-30" /></div>
                                    <div className="f-Ubuntu-L fsp-15 lh-sm pep-5 psp-5 text-start">No</div>
                                </div>
                                <div className="align-items-center pbp-0 f-Ubuntu-L fsp-15 lh-sm pep-5 text-start"><span className="f-Ubuntu-M pep-10">2.</span>Si la respuesta fue Sí, menciona los productos que compras habitualmente.</div>
                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 fsp-15 text-start flex-grow-1 lhp-35 min-hp-35 contenedor-linea msp-20" />
                                <div className="d-flex align-items-center pbp-10 ptp-10">
                                    <div className="w-60 f-Ubuntu-L fsp-15 lh-sm pep-5 mtp-0 text-start"><span className="f-Ubuntu-M pep-10">3.</span>¿Qué otros alimentos te gustaría que se vendieran?</div>
                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 fsp-15 text-start flex-grow-1 lhp-35 min-hp-35 contenedor-linea msp-0" />
                                </div>
                                <div className="d-flex align-items-center pbp-10">
                                    <div className="f-Ubuntu-L fsp-15 lh-sm pep-5 text-start"><span className="f-Ubuntu-M pep-10">4.</span>¿Almuerzas en el casino del colegio?</div>
                                    <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-30" /></div>
                                    <div className="f-Ubuntu-L fsp-15 lh-sm pep-10 psp-5 text-start">Sí</div>
                                    <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-30" /></div>
                                    <div className="f-Ubuntu-L fsp-15 lh-sm pep-5 psp-5 text-start">No</div>
                                </div>
                                <div className="align-items-center pbp-0 f-Ubuntu-L fsp-15 lh-sm pep-5 text-start"><span className="f-Ubuntu-M pep-10">5.</span>Si la respuesta fue Sí, menciona tus comidas favoritas.</div>
                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 fsp-15 text-start flex-grow-1 lhp-35 min-hp-35 contenedor-linea msp-20" />
                                <div className="align-items-center pbp-0 f-Ubuntu-L fsp-15 lh-sm pep-5 ptp-10 text-start"><span className="f-Ubuntu-M pep-10">6.</span>¿Qué otras alternativas te gustaría que estuvieran disponibles en el casino?</div>
                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 fsp-15 text-start flex-grow-1 lhp-35 min-hp-35 contenedor-linea msp-20" />
                                <div className="align-items-center pbp-10 f-Ubuntu-L fsp-15 lh-sm pep-5 ptp-10 text-start"><span className="f-Ubuntu-M pep-10">7.</span>Selecciona las afirmaciones que te identifican.</div>
                                <div className="d-flex align-items-center psp-20 pbp-10">
                                    <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-30" /></div>
                                    <div className="f-Ubuntu-L fsp-15 lh-sm pep-5 psp-10 text-start">Tomo bebidas azucaradas más de 2 veces por semana.</div>
                                </div>
                                <div className="d-flex align-items-center psp-20 pbp-10">
                                    <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-30" /></div>
                                    <div className="f-Ubuntu-L fsp-15 lh-sm pep-5 psp-10 text-start">Como al menos 2 porciones de frutas al día.</div>
                                </div>
                                <div className="d-flex align-items-center psp-20 pbp-10">
                                    <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-30" /></div>
                                    <div className="f-Ubuntu-L fsp-15 lh-sm pep-5 psp-10 text-start">Para las comidas prefiero las papas fritas en lugar de las verduras.</div>
                                </div>
                                <div className="d-flex align-items-center psp-20 pbp-10">
                                    <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-30" /></div>
                                    <div className="f-Ubuntu-L fsp-15 lh-sm pep-5 psp-10 text-start">Suelo comer comida rápida 1 o 2 veces por semana.</div>
                                </div>
                                <div className="d-flex align-items-center psp-20 pbp-5">
                                    <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-30" /></div>
                                    <div className="f-Ubuntu-L fsp-15 lh-sm pep-5 psp-10 text-start">Mi <i>snack</i> favorito son los dulces y pasteles.</div>
                                </div>
                            </div>
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

            <div className={etapa == 1 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_motivacion.svg" className={etapa == 1 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className={etapa == 2 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_planificacion.svg" className={etapa == 2 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className={etapa == 3 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_investigacion.svg" className={etapa == 3 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className={etapa == 4 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_experimentacion.svg" className={etapa == 4 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className={etapa == 5 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_creacion.svg" className={etapa == 5 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className={etapa == 6 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
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

export default Page044;
