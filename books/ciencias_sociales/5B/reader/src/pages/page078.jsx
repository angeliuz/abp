import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check2";

import "./page_078.css";

function Page078(props) {

  const pagina = "078";
  var indexInput = 0;
  const etapa = "6"
  const background = "bgc-pikachu";
  const bgc_cajas = "bgc-quaternary";
  const color = "color-pikachu";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          <div className={"cabecera-v1 hp-80 " + background}>
          </div>



          <div className="d-flex w-100 mtp-50 psp-60 pep-60 ptp-20 mbp-0 border-top-style-solid border-color-dark border-2 pbp-80 bgc-quaternary ">
            <div className="row w-100 p-0 m-0">
              <div className="col-12 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle msp--10 mtp--50"><img src="images/page_078/img_002.png" className="wp-120 " alt="" /></div>
                <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo voy?</div>
                <div className="d-flex flex-column mbp-20 mtp-10 w-100">
                  <div className="p-2 min-hp-80 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                    <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 text-start">
                      <img src="images/generales/flecha_e6.svg" className="mep-5 wp-15" alt="" />
                      <span>¿Qué recordaré de lo que aprendí en este proyecto?</span>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-20" />
                    <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 mtp-20 text-start">
                      <img src="images/generales/flecha_e6.svg" className="mep-5 wp-15" alt="" />
                      <span>¿En qué momentos saqué lo mejor de mí?</span>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-20" />
                  </div>

                </div>
              </div>
              <div className="col-12">
                <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo me sentí?</div>
                <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-30">
                  <span className="w-24 f-Ubuntu-L mtp-5 mbp-10">Marco con un <img src="images/page_018/img_005.svg" className="hp-17 mtp--2" alt="" /> el recuadro que mejor me represente.</span>
                  <div className="w-100 p-2 pb-3 bgc-white rounded-p-10">
                    <table className="w-100">
                      <tbody>
                        <tr>
                          <td>&nbsp;</td>
                          <td className="style-caja bgc-pikachu tf-letra border-style-solid border-1 border-color-pikachu f-colby-compres-bold ps-2 pe-2">
                            Nunca</td>
                          <td style={{ minWidth: "55px" }} className="style-caja bgc-pikachu tf-letra  border-style-solid border-1 border-color-pikachu f-colby-compres-bold ps-2 pe-2">
                            A veces</td>
                          <td className="style-caja bgc-pikachu tf-letra border-style-solid border-1 border-color-pikachu f-colby-compres-bold ps-2 pe-2">
                            Generalmente</td>
                          <td className="style-caja bgc-pikachu tf-letra  border-style-solid border-1 border-color-pikachu f-colby-compres-bold ps-2 pe-2">
                            Siempre</td>
                        </tr>
                        <tr>
                          <td className="bgc-quaternary f-Ubuntu-L fsp-12 text-start psp-5 border-style-solid border-1 border-color-pikachu">El ambiente de trabajo en mi equipo fue agradable.	</td>
                          <td className="border-style-solid border-1 border-color-pikachu"> <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className="border-style-solid border-1 border-color-pikachu"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className="border-style-solid border-1 border-color-pikachu"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className="border-style-solid border-1 border-color-pikachu"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                        </tr>
                        <tr>
                          <td className="bgc-quaternary f-Ubuntu-L fsp-12 text-start psp-5 border-style-solid border-1 border-color-pikachu">Estoy contento de haber trabajado en este proyecto.</td>
                          <td className="border-style-solid border-1 border-color-pikachu"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className="border-style-solid border-1 border-color-pikachu"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className="border-style-solid border-1 border-color-pikachu"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className="border-style-solid border-1 border-color-pikachu"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                        </tr>
                        <tr>
                          <td className="bgc-quaternary f-Ubuntu-L fsp-12 text-start psp-5 border-style-solid border-1 border-color-pikachu">Me gustó investigar sobre el tema del proyecto.</td>
                          <td className="border-style-solid border-1 border-color-pikachu"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className="border-style-solid border-1 border-color-pikachu"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className="border-style-solid border-1 border-color-pikachu"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className="border-style-solid border-1 border-color-pikachu"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                        </tr>
                        <tr>
                          <td className="bgc-quaternary f-Ubuntu-L fsp-12 text-start psp-5 border-style-solid border-1 border-color-pikachu">Me motivó encontrar soluciones al reto planteado.</td>
                          <td className="border-style-solid border-1 border-color-pikachu"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className="border-style-solid border-1 border-color-pikachu"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className="border-style-solid border-1 border-color-pikachu"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className="border-style-solid border-1 border-color-pikachu"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                        </tr>
                        <tr>
                          <td className="bgc-quaternary f-Ubuntu-L fsp-12 text-start psp-5 border-style-solid border-1 border-color-pikachu">Estuve tenso y nervioso cuando trabajé con mi equipo.</td>
                          <td className="border-style-solid border-1 border-color-pikachu"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className="border-style-solid border-1 border-color-pikachu"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className="border-style-solid border-1 border-color-pikachu"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className="border-style-solid border-1 border-color-pikachu"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                        </tr>
                        <tr>
                          <td className="bgc-quaternary f-Ubuntu-L fsp-12 text-start psp-5 border-style-solid border-1 border-color-pikachu">Tuve miedo de no hacer bien el trabajo y recibir críticas.</td>
                          <td className="border-style-solid border-1 border-color-pikachu"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className="border-style-solid border-1 border-color-pikachu"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className="border-style-solid border-1 border-color-pikachu"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className="border-style-solid border-1 border-color-pikachu"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                        </tr>
                        <tr>
                          <td className="bgc-quaternary f-Ubuntu-L fsp-12 text-start psp-5 border-style-solid border-1 border-color-pikachu">Confié en mi capacidad de aprender y me valoré.</td>
                          <td className="border-style-solid border-1 border-color-pikachu"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className="border-style-solid border-1 border-color-pikachu"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className="border-style-solid border-1 border-color-pikachu"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className="border-style-solid border-1 border-color-pikachu"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                        </tr>
                        <tr>
                          <td className="bgc-quaternary f-Ubuntu-L fsp-12 text-start psp-5 border-style-solid border-1 border-color-pikachu">Confié en mis compañeros y me ayudaron cuando lo necesité.	</td>
                          <td className="border-style-solid border-1 border-color-pikachu"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className="border-style-solid border-1 border-color-pikachu"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className="border-style-solid border-1 border-color-pikachu"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className="border-style-solid border-1 border-color-pikachu"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-12 position-relative">

                <div className="d-flex flex-column mbp-20 mtp-10 w-100">
                  <div className="p-2 min-hp-80 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                    <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 text-center">

                      <span>¿Qué recordaré de lo que aprendí en este proyecto?</span>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-200" />

                  </div>

                </div>
              </div>
            </div>
          </div>



          {/* BEGIN PIE DE PAGINA */}
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
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
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
              <img src="images/rotulo_difusion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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

export default Page078;
