import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import ModalVideo from "../components/ModalVideo";
import Check2 from "../components/Check2";

import "./page_016.css";

function Page016(props) {

  const pagina = "016";
  var indexInput = 0;
  const etapa = "2"
  const background = "bgc-bulma";
  const color = "color-bulma";
  const borderColor = "border-color-bulma"
  const bgc_cajas = "bgc-draco";

  return (

    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          <div className={"cabecera-v1 hp-80 " + background}>
          </div>
          <div className="ptp-50 container-titulo-global mbp-0">
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                3
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Veo el video e identifico las tareas que debo llevar a cabo en cada etapa del proyecto.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              <ModalVideo id={"p" + pagina + "_video" + (indexInput += 1)} image={"images/page_" + pagina + "/img_001.svg"} className="p-0 px-1" />
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className=" psp-60 pep-60 ptp-20">
            <div className="bgc-pantro p-2 position-relative">

              <div className="d-flex justify-content-center align-items-center position-relative">
                <div className="bloque-p16 bgc-bulma text-center py-2 f-Ubuntu-M color-white rounded-p-5 pep-10">
                  <span>lanificación</span>
                </div>
                <div className="wp-35"></div>
                <div className="caja-p16 bgc-white border-style-solid border-1 border-color-bulma psp-20 position-relative">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-25 w-100 min-hp-80" />
                  <div className="position-absolute top-50 start-0 translate-middle msp--20 mtp-0 zindex-1 visible-768"><img src={"images/page_" + pagina + "/img_006.svg"} className="wp-60" alt="" /></div>
                </div>
              </div>

              <div className="ptp-20"></div>

              <div className="d-flex justify-content-center align-items-center position-relative">
                <div className="bloque-p16 bgc-android18 text-center py-2 f-Ubuntu-M color-white rounded-p-5 pep-10">Investigación</div>
                <div className="wp-35"></div>
                <div className="caja-p16 bgc-white border-style-solid border-1 border-color-android18 psp-20 position-relative">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-25 w-100 min-hp-80" />
                  <div className="position-absolute top-50 start-0 translate-middle msp--20 mtp-0 zindex-1 visible-768"><img src={"images/page_" + pagina + "/img_006.svg"} className="wp-60" alt="" /></div>
                </div>
              </div>

              <div className="ptp-20"></div>

              <div className="d-flex justify-content-center align-items-center position-relative">
                <div className="bloque-p16 bgc-pidgey text-center py-2 f-Ubuntu-M color-white rounded-p-5 pep-10">Experimentación</div>
                <div className="wp-35"></div>
                <div className="caja-p16 bgc-white border-style-solid border-1 border-color-pidgey psp-20 position-relative">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-25 w-100 min-hp-80" />
                  <div className="position-absolute top-50 start-0 translate-middle msp--20 mtp-0 zindex-1 visible-768"><img src={"images/page_" + pagina + "/img_006.svg"} className="wp-60" alt="" /></div>
                </div>
              </div>

              <div className="ptp-20"></div>

              <div className="d-flex justify-content-center align-items-center position-relative">
                <div className="bloque-p16 bgc-saitama text-center py-2 f-Ubuntu-M color-white rounded-p-5 pep-10">Creación</div>
                <div className="wp-35"></div>
                <div className="caja-p16 bgc-white border-style-solid border-1 border-color-saitama psp-20 position-relative">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-25 w-100 min-hp-80" />
                  <div className="position-absolute top-50 start-0 translate-middle msp--20 mtp-0 zindex-1 visible-768"><img src={"images/page_" + pagina + "/img_006.svg"} className="wp-60" alt="" /></div>
                </div>
              </div>

              <div className="ptp-20"></div>

              <div className="d-flex justify-content-center align-items-center position-relative">
                <div className="bloque-p16 bgc-pikachu text-center py-2 f-Ubuntu-M color-white rounded-p-5 pep-10">Difusión</div>
                <div className="wp-35"></div>
                <div className="caja-p16 bgc-white border-style-solid border-1 border-color-pikachu psp-20 position-relative">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-25 w-100 min-hp-80" />
                  <div className="position-absolute top-50 start-0 translate-middle msp--20 mtp-0 zindex-1 visible-768"><img src={"images/page_" + pagina + "/img_006.svg"} className="wp-60" alt="" /></div>
                </div>
              </div>

              <div className="pbp-40"></div>
              <div className="position-absolute top-0 start-100 translate-middle msp-20 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-60" alt="" /></div>
              <div className="position-absolute top-100 start-0 translate-middle msp--20 mtp--40 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-40" alt="" /></div>
            </div>
          </div>

          <div className="bgc-buzz border-style-solid border-color-bulma border-solo-top pbp-20 position-relative">

            <div className="d-flex flex-column global-margin mtp-0 mbp-20 psp-0 pep-0 ptp-0 pbp-0">
              <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-10 ptp-30">¿Cómo voy?</div>
              <div className="d-flex flex-column bgc-white rounded-p-10 psp-10 pep-10 ptp-10 pbp-10 mtp-0 mbp-0">
                <div className="row p-0 m-0 w-100">
                  <div className="col-12 p-0 m-0">
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-start">
                        <div className="mtp-0 pep-5">
                          <img src={"images/generales/flecha_e" + etapa + ".svg"} className="wp-15" />
                        </div>
                        <div className="f-Ubuntu-L fsp-15 ptp-2 text-start">Hoy he descubierto que</div>
                      </div>
                      <div className="d-flex w-100 psp-20 pep-10 ptp-0 pbp-0">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 p-0 m-0">
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-start">
                        <div className="mtp-0 pep-5">
                          <img src={"images/generales/flecha_e" + etapa + ".svg"} className="wp-15" />
                        </div>
                        <div className="f-Ubuntu-L fsp-15 ptp-2 text-start">Quisiera profundizar sobre</div>
                      </div>
                      <div className="d-flex w-100 psp-20 pep-10 ptp-0 pbp-0">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column global-margin mtp-0 mbp-20 psp-0 pep-0 ptp-0 pbp-60">
              <div className="col-12">
                <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo me siento?</div>
                <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-30">
                  <span className="w-24 f-Ubuntu-L mtp-5 mbp-10">Marco con un <img src={"images/page_" + pagina + "/img_005.svg"} className="hp-17 mtp--2" alt="" /> el recuadro que mejor me represente.</span>
                  <div className="w-100 p-2 pb-3 bgc-white rounded-p-10">
                    <table className="w-100">
                      <tbody>
                        <tr>
                          <td>&nbsp;</td>
                          <td className={"style-caja " + background + " tf-letra border-style-solid border-1 " + borderColor + " f-colby-compres-bold ps-2 pe-2 color-white"}>
                            Nunca</td>
                          <td style={{ minWidth: "55px" }} className={"style-caja " + background + " tf-letra  border-style-solid border-1 " + borderColor + " f-colby-compres-bold ps-2 pe-2 color-white"}>
                            A veces</td>
                          <td className={"style-caja " + background + " tf-letra border-style-solid border-1 " + borderColor + " f-colby-compres-bold ps-2 pe-2 color-white"}>
                            Generalmente</td>
                          <td className={"style-caja " + background + " tf-letra  border-style-solid border-1 " + borderColor + " f-colby-compres-bold ps-2 pe-2 color-white"}>
                            Siempre</td>
                        </tr>
                        <tr>
                          <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-16 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>El ambiente de trabajo en mi equipo es agradable.</td>
                          <td className={"border-style-solid border-1 " + borderColor + ""}> <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                          <td className={"border-style-solid border-1 " + borderColor + ""}> <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                          <td className={"border-style-solid border-1 " + borderColor + ""}> <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                          <td className={"border-style-solid border-1 " + borderColor + ""}> <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                        </tr>
                        <tr>
                          <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-16 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Estoy contento de trabajar en este proyecto.</td>
                          <td className={"border-style-solid border-1 " + borderColor + ""}> <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                          <td className={"border-style-solid border-1 " + borderColor + ""}> <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                          <td className={"border-style-solid border-1 " + borderColor + ""}> <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                          <td className={"border-style-solid border-1 " + borderColor + ""}> <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="position-absolute top-0 start-0 translate-middle msp-0 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_.png"} className="wp-60" alt="" /></div>
          </div>

          {/* PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
              ABP &copy; SM
            </div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end marcador-etapa" style={{ bottom: 0 }}>

            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-7 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_planificacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_difusion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
              <div className="w-100 hp-25 bgc-pikachu"></div>
            </div>
          </div>


        </div>
      </div>
    </div >


  );
}

export default Page016;
