import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check";


import "./page_066.css";

function Page066(props) {

  const pagina = "066";
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
          <div className={"cabecera-v1 hp-80 " + background}>
          </div>






          <div className="d-flex global-margin mtp-20 mbp-60 psp-10 pep-10 ptp-10 pbp-10 rounded-p-10 bgc-grieg">
            <div className="row p-0 m-0 w-100">
              <div className="col-sm-6 col-md-5 p-0 m-0 position-relative">

                <div className="d-flex flex-column align-items-center psp-10 pep-10 ptp-0 pbp-0 border-style-solid border-2 border-color-milk bgc-white   caja-sobre-66">

                  <div className="ptp-0 psp-10 pep-10 mbp-0">
                    <div className="d-flex psp-0">
                      <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                        3
                      </div>
                      <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                        En grupo, decidimos a quiénes invitaremos a la exposición...
                      </div>
                    </div>
                  </div>

                  <div className="d-flex flex-column text-start w-100 psp-45 pep-10 ptp-0 pbp-0 mtp-10 f-Ubuntu-L">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-390" />
                  </div>


                </div>


              </div>
              <div className="col-sm-6 col-md-7 p-0 m-0 position-relative ">
                <div className="position-absolute top-0 start-50 translate-middle  msp-90 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-30" alt="" /></div>
                <div className="position-absolute top-100 start-100 translate-middle  msp-10 mtp--5 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-60" alt="" /></div>
                <div className="position-absolute top-100 start-0 translate-middle  msp-50 mtp--5 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-140" alt="" /></div>

                {/* border-left-hidden */}
                <div className="d-flex flex-column psp-0 pep-0 ptp-0 pbp-0 mtp-20 border-style-solid border-2 border-color-milk bgc-white  ">

                  <div className="d-flex flex-column text-start w-100 psp-15 pep-10 ptp-10 pbp-0 mtp-10 f-Ubuntu-R">
                    ... redactamos la invitación...
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-400" />
                  </div>
                  <div className="d-flex justify-content-end mbp-20 ">

                    <div className="f-Ubuntu-R fsp-16 pep-20 ptp-10 ">
                      ...y la enviamos!
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>





          <div className="d-flex w-100 mtp-10 psp-60 pep-60 ptp-20 mbp-0 bgc-windu border-top-style-solid border-color-dark border-2 pbp-80    position-relative">
            {/* <div className="position-absolute top-0 start-50 translate-middle   visible-768 mtp--39 msp--80"><img src="images/page_060/img_004.png" className="wp-80 " alt="" /></div> */}
            <div className="row w-100 p-0 m-0">
              <div className="col-12 position-relative">
                <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo voy?</div>
                <div className="d-flex flex-column mbp-20 mtp-10 w-100">
                  <div className="p-2 min-hp-80 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                    <div className="f-Ubuntu-L fsp-14 msp-0 mep-10 text-start">
                      <img src="images/generales/flecha_e5.svg" className="mep-5 wp-15" alt="" />
                      <span>Las tareas en las que más me comprometo son</span>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                    <div className="f-Ubuntu-L fsp-14 msp-0 mep-10 mtp-20 text-start">
                      <img src="images/generales/flecha_e5.svg" className="mep-5 wp-15" alt="" />
                      <span>La estrategia que más me ha servido es</span>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                  </div>

                </div>




                {/* BEGIN TABLE */}
                <div className="mbp-50 psp-0 pep-0 ptp-10 pbp-10 mtp-60 f-Ubuntu-L fsp-13 rounded-p-10 ">
                  <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-0">
                    {/* <span className="w-24 f-Ubuntu-L mtp-5 mbp-10">Marco con un <img src="images/generales/ticket.svg" className="hp-17 mtp--3 msp-5 mep-5" alt=""/>el recuadro que mejor me represente.</span> */}
                    <div className="w-100 p-0 pb-3 position-relative">
                      <div className="position-absolute mtp--40 top-0 start-0 msp-10 mtp--10 mbp-10 f-pixilate-bold fsp-18 lh-sm text-start">¿Cómo me siento?</div>
                      <div className="d-flex position-absolute align-items-start w-100  mbp-50 top-0 start-0 msp-10 mtp--10 f-Ubuntu-R fsp-14  lh-sm text-start">Marco con un <img src={"images/page_" + pagina + "/ticket.svg"} className="wp-15 msp-5 mep-5 p-0 mpt-0 " alt="" /> el recuadro que mejor me represente.</div>
                      <table className="w-100">

                        <tbody>
                          <tr>
                            <td></td>
                            <td className={"color-dark f-colby-compres-bold p-0 m-0 "}>
                              <div className="d-flex w-100 center-center psp-10 pep-10 ptp-0 pbp-0 text-center ">Nunca</div>
                            </td>
                            <td className={"color-dark f-colby-compres-bold p-0 m-0 min-wp-55 "}>
                              <div className="d-flex w-100 center-center psp-5 pep-5 ptp-0 pbp-0 text-center ">A veces</div>
                            </td>
                            <td className={"color-dark f-colby-compres-bold p-0 m-0 "}>
                              <div className="d-flex center-center psp-10 pep-10 ptp-0 pbp-0 text-center ">Generalmente</div>
                            </td>
                            <td className={"color-dark f-colby-compres-bold p-0 m-0 "}>
                              <div className="d-flex center-center psp-5 pep-5 ptp-0 pbp-0 text-center ">Siempre</div>
                            </td>
                          </tr>
                          <tr>
                            <td className={"bgc-white rounded-ts-10 f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                              <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 ">
                                <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                                Confío en mi capacidad para aprender y me valoro.
                              </div>
                            </td>
                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                              <div className="d-flex center-center">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                              </div>
                            </td>
                            <td className={"bgc-white min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                              <div className="d-flex center-center">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                              </div>
                            </td>
                            <td className={"bgc-white min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                              <div className="d-flex center-center">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                              </div>
                            </td>
                            <td className={"bgc-white rounded-te-10  min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                              <div className="d-flex center-center">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                              </div>
                            </td>
                          </tr>


                          <tr>
                            <td className={"bgc-white rounded-bs-10 f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-bottom-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                              <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10">
                                <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                                Confío en mis compañeros y me ayudan cuando lo necesito.
                              </div>
                            </td>
                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 " + borderColorTabla}>
                              <div className="d-flex center-center">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                              </div>
                            </td>
                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 " + borderColorTabla}>
                              <div className="d-flex center-center">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                              </div>
                            </td>
                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 " + borderColorTabla}>
                              <div className="d-flex center-center">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                              </div>
                            </td>
                            <td className={"bgc-white rounded-be-10   f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-bottom-hidden border-right-hidden border-2 " + borderColorTabla}>
                              <div className="d-flex center-center">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* END TABLE */}



              </div>







            </div>
          </div>




          {/* 
          <div className="d-flex global-margin mtp-20 mbp-80 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">
                <div className="row">

                  <div className="col-12">


                    <div className="d-flex justify-content-center">

                      <div className=" position-relative  d-flex justify-content-end wp-350 hp-135  border-style-solid border-1 border-color-dark ptp-15 pep-10 psp-0 rounded-p-10 ">
                        <div className="position-absolute top-50 start-0 translate-middle    msp--65 mtp-0 visible-768  zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-80" alt="" /></div>
                        <div className="position-absolute top-0 end-0                        mep-10 mtp--10 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_006.png"} className="wp-30" alt="" /></div>
                        <div className="position-absolute top-50 start-100 translate-middle  mep-10 mtp--10 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_007.png"} className="wp-20" alt="" /></div>
                        <div className="d-flex justify-content-start mep-5">
                          <div className="d-flex d-inline justify-content-start align-items-start text-start f-Ubuntu-R color-saitama fsp-17  fw-700 pbp-5">b.</div>
                          <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R wp-300 fsp-15 lh-sm ptp-3 psp-5 pbp-35 ">
                            Entre todos revisamos los textos y elaboramos las invitaciones. Luego, las publicamos para que toda la comunidad asista a nuestra presentación.
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>

                </div>
              </div>
            </div>
          </div> */}


          {/* PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
              ABP &copy; SM
            </div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
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
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
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

export default Page066;
