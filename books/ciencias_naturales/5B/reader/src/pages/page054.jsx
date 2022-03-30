import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check2";

import "./page_054.css";

function Page054(props) {

  const pagina = "054";
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
        <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>


          <div className="psp-80 pep-70 ptp-80 pbp-20">
            <div className="row ptp-20">
              <div className="col-md-6 position-relative pbp-20">
                <div className="bgc-white border-style-solid border-2 border-color-dark rounded-p-10">
                  <div className="bgc-chitara mxwp-160 rounded-p-10">
                    <div className="f-Ubuntu-R psp-20 py-2 text-start">Lo más difícil fue:</div>
                  </div>
                  <div className="ptp-10 psp-20 pep-20 pbp-10">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-210" />
                  </div>
                </div>
                <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-40" alt="" /></div>
              </div>
              <div className="col-md-6 position-relative">
                <div className="bgc-white border-style-solid border-2 border-color-dark rounded-p-10">
                  <div className="bgc-tigro mxwp-160 rounded-p-10">
                    <div className="f-Ubuntu-R psp-20 py-2 text-start">Lo más fácil fue:</div>
                  </div>
                  <div className="ptp-10 psp-20 pep-20 pbp-10">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-210" />
                  </div>
                </div>
                <div className="position-absolute top-0 start-100 translate-middle msp--30 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-80" alt="" /></div>
              </div>
            </div>
            <div className="ptp-20 position-relative">
              <div className="bgc-white border-style-solid border-2 border-color-dark rounded-p-10">
                <div className="bgc-guile mxwp-490 rounded-p-10">
                  <div className="f-Ubuntu-R psp-20 py-2">Si hubiéramos tenido más tiempo nos hubiese
                    gustado añadir:</div>
                </div>
                <div className="ptp-10 psp-20 pep-20 pbp-10">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-210" />
                </div>
              </div>
              <div className="position-absolute top-50 start-0 translate-middle msp--20 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-60" alt="" /></div>
            </div>
          </div>


          <div className="d-flex flex-column global-margin mtp-0 mbp-60 psp-0 pep-60 ptp-0 pbp-0 position-relative">
            <div className="col-12">
              <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo vamos?</div>
              <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-30 fsp-15 ">
                {/* <span className="w-24 f-Ubuntu-L mtp-5 mbp-10">Marco con un <img src={"images/generales/ticket.svg"} className="hp-17 mtp--2" alt="" /> el recuadro que mejor me represente.</span> */}
                <div className="w-100 p-2 pb-3 bgc-white rounded-p-10 mbp-50">
                  <table className="w-100">
                    <tbody>
                      <tr>
                        <td>&nbsp;</td>
                        <td className={"style-caja " + background + " tf-letra border-style-solid border-1 " + borderColor + " f-colby-compres-bold color-white ps-2 pe-2"}>
                          Nunca</td>
                        <td style={{ minWidth: "55px" }} className={"style-caja " + background + " tf-letra  border-style-solid border-1 " + borderColor + " f-colby-compres-bold color-white ps-2 pe-2"}>
                          A veces</td>
                        <td className={"style-caja " + background + " tf-letra border-style-solid border-1 " + borderColor + " f-colby-compres-bold color-white ps-2 pe-2"}>
                          Generalmente</td>
                        <td className={"style-caja " + background + " tf-letra  border-style-solid border-1 " + borderColor + " f-colby-compres-bold color-white ps-2 pe-2"}>
                          Siempre</td>
                      </tr>
                      <tr>
                        <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-14 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Nos involucramos en el proyecto y nos responsabilizamos por las tareas que tenemos que hacer.</td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                      </tr>
                      <tr>
                        <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-14 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Ante una petición de apoyo de alguien del grupo, intentamos ayudar antes de preguntarle al profesor. </td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                      </tr>
                      <tr>
                        <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-14 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Respetamos el turno de la palabra.</td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                      </tr>
                      <tr>
                        <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-14 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Llegamos a acuerdos y decisiones compartidas después de que cada uno da su opinión.</td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="position-absolute top-100 start-100 translate-middle msp--10 mtp--130 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-110" alt="" /></div>
          </div>






          {/* BEIGN PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          {/* END PIE DE PAGINA */}
        </div>
      </div>
    </div>
  );
}

export default Page054;
