import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check2 from "../components/Check2";

import "./page_038.css";

function Page038(props) {

  const pagina = "038";
  var indexInput = 0;
  const etapa = "3"
  const background = "bgc-android18";
  const color = "color-android18";
  const borderColor = "border-color-android18"
  const borderColorTabla = "border-color-azuka"
  const bgc_cajas = "bgc-azuka";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          <div className="cabecera-v1 hp-80 bgc-android18">
          </div>
          <div className="container-titulo-global mbp-0 mbp-20">
            <div className="d-flex psp-20">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_001.svg"} alt=""  />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                4
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Acuerdo con mi grupo un desafío y una medida de defensa de derechos que podamos considerar en nuestra obra de arte y explicamos su importancia.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>
          <div className="d-flex msp-60 mep-60 mbp-20 mtp-30">
            <div className="row w-100 p-0 m-0">
              <div className="row mx-auto d-flex f-Ubuntu-R fsp-15 mbp-20 ">
                <div className="position-relative">
                  {/* <div className="position-absolute top-50 start-50 translate-middle msp--0 mtp-40 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_003.svg"} className="wp-60" alt="" /></div> */}
                </div>

                <div className="col-sm-12 col-md-6 align-items-stretch mbp-20">
                  <div className="h-100 text-center w-100 border-1 border-style-solid border-color-danger rounded-p-10  mtp-10">
                    <div className="lhp-20 color-white fw-700 rounded-set-6 hp-50 pep-20 psp-20 ptp-10 pbp-10 bgc-danger d-flex justify-content-center align-items-center">
                      Un desafío que puede plantear <br /> nuestra obra es:
                    </div>
                    <div className="h-100 psp-15 pep-15">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="h-80 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-200" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 align-items-stretch mbp-20">
                  <div className="h-100 text-center w-100 border-1 border-style-solid border-color-obiwan rounded-p-10 mtp-10">
                    <div className="lhp-15 color-white fw-700 rounded-set-6 hp-50 ptp-5 pbp-5 bgc-obiwan d-flex justify-content-center align-items-center">
                      ¿Por qué lo seleccionamos?
                    </div>
                    <div className="h-100 psp-15 pep-15">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="h-80 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-200" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 position-relative align-items-stretch mbp-20">
                  {/* <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-90 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_003.svg"} className="wp-60" alt="" /></div> */}
                  {/* <div className="position-absolute top-0 start-0 translate-middle msp-40 mtp--0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_002.svg"} className="wp-10" alt="" /></div> */}
                  <div className="h-100 text-center w-100 border-1 border-style-solid border-color-palpatine rounded-p-10 mtp-10">
                    <div className="lhp-15 color-white fw-700 rounded-set-6 hp-50 ptp-5 pbp-5 bgc-palpatine d-flex justify-content-center align-items-center">
                      Una medida de defensa que <br /> puede inspirar nuestra obra es:
                    </div>
                    <div className="h-100 psp-15 pep-15">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="h-80 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-230" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 position-relative align-items-stretch mbp-20">
                  {/* <div className="position-absolute top-0 start-100 translate-middle msp--40 mtp--0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_002.svg"} className="wp-10" alt="" /></div> */}
                  <div className="h-100 text-center w-100 border-1 border-style-solid border-color-klaus rounded-p-10 mtp-10">
                    <div className="lhp-15 color-white fw-700 rounded-set-6 hp-50 ptp-5 pbp-5 bgc-klaus d-flex justify-content-center align-items-center">
                      ¿Por qué la seleccionamos?
                    </div>
                    <div className="h-100 psp-15 pep-15">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="h-80 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-230" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          {/* SECCION COMO VOY */}
          <div className={"d-flex w-100 mtp-50 psp-60 pep-60 ptp-20 mbp-0 border-top-style-solid  border-2 pbp-80 " + bgc_cajas}>
            <div className="row w-100 p-0 m-0">
              <div className="col-12 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle msp--30 mtp--55 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-90" alt="" /></div>
                <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo voy?</div>
                <div className="d-flex flex-column mbp-20 mtp-10 w-100">
                  <div className="p-2 min-hp-80 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                    <div className="f-Ubuntu-L fsp-14 msp-0 mep-10 text-start">
                      <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 wp-15" alt="" />
                      <span>La tarea que más me gustó en esta etapa fue</span>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100" />
                    <div className="f-Ubuntu-L fsp-14 msp-0 mep-10 mtp-20 text-start">
                      <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 wp-15" alt="" />
                      <span>¿Qué podría mejorar para la próxima etapa?</span>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100" />
                  </div>
                </div>
              </div>
              {/* BEGIN EJERCICIO 2 */}
              <div className="col-12">
                <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo me siento?</div>
                <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-30">
                  <div className="w-100 p-2 pb-3 bgc-white rounded-p-10">
                    <table className="w-100">
                      <tbody>
                        <tr>
                          <td><span className="w-24 fsp-14 f-Ubuntu-L mtp-5 mbp-10 text-start">Marco con un <img src={"images/page_" + pagina + "/img_005.svg"} className="hp-17 mtp--2" alt="" /> el recuadro que mejor me represente.</span></td>
                          <td className={"color-white style-caja " + background + " tf-letra border-style-solid border-1 " + borderColor + " f-colby-compres-bold ps-2 pe-2"}>
                            Nunca</td>
                          <td style={{ minWidth: "55px" }} className={"color-white style-caja " + background + " tf-letra  border-style-solid border-1 " + borderColor + " f-colby-compres-bold ps-2 pe-2"}>
                            A veces</td>
                          <td className={"color-white style-caja " + background + " tf-letra border-style-solid border-1 " + borderColor + " f-colby-compres-bold ps-2 pe-2"}>
                            Generalmente</td>
                          <td className={"color-white style-caja " + background + " tf-letra  border-style-solid border-1 " + borderColor + " f-colby-compres-bold ps-2 pe-2"}>
                            Siempre</td>
                        </tr>
                        <tr>
                          <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-14 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Me gusta investigar sobre el tema del proyecto.</td>
                          <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                          <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                          <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                          <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                        </tr>
                        <tr>
                          <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-14 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Tengo ganas de encontrar soluciones al desafío planteado.</td>
                          <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                          <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                          <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                          <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                         
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
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
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_investigacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
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

export default Page038;
