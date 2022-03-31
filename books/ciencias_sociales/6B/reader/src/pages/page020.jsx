import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import Check2 from "../components/Check2";

import "./page_020.css";

function Page020(props) {
  const pagina = "020";
  var indexInput = 0;
  const etapa = "2"
  const background = "bgc-bulma";
  const color = "color-bulma";
  const borderColor = "border-color-bulma"
  const bgc_cajas = "bgc-draco";
  const borderColorTabla = "border-color-buzz";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>

          <div className="psp-60 pep-60 ptp-60 pbp-10">
            <div className="f-Ubuntu-B color-white bgc-quigon rounded-set-20 py-2 psp-20 pep-20 mxwp-360 msp-a mep-a">¿Qué pensamos que vamos a necesitar?</div>
            <div className="bgc-white w-100 border-style-solid border-2 p-2 rounded-p-20 position-relative">
              <div className="f-Ubuntu-B fsp-18">Recursos materiales</div>
              <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-190" />
              <div className="position-absolute top-0 start-0 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-80" alt="" /></div>
            </div>
          </div>

          <div className="psp-60 pep-60 ptp-20 pbp-10">
            <div className="bgc-white w-100 border-style-solid border-2 p-2 rounded-p-20 position-relative">
              <div className="f-Ubuntu-B fsp-18">Ayuda de otras personas</div>
              <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-190" />
              <div className="position-absolute top-100 start-100 translate-middle msp--10 mtp--10 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-60" alt="" /></div>
            </div>
          </div>

          <div className="d-flex flex-column global-margin mtp-0 mbp-20 psp-0 pep-0 ptp-20 pbp-0 position-relative">
            <div className="col-12">
              <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo vamos?</div>
              <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-30">
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
                        <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-16 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Participamos en la realización de las tareas y nos responsabilizamos del trabajo.</td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                      </tr>
                      <tr>
                        <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-16 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Ante una petición de apoyo de alguien del grupo, intentamos ayudar antes de preguntarle al profesor.</td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                      </tr>
                      <tr>
                        <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-16 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Respetamos el turno de palabra.</td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                      </tr>
                      <tr>
                        <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-16 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Llegamos a acuerdos y decisiones compartidas después de que cada integrante da su opinión.</td>
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
            <div className="position-absolute top-100 start-0 translate-middle msp-50 mtp-35 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-140" alt="" /></div>
            <div className="position-absolute top-100 start-50 translate-middle msp-0 mtp-20 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-240" alt="" /></div>
            <div className="position-absolute top-100 start-100 translate-middle msp--40 mtp-20 zindex-1"><img src={"images/page_" + pagina + "/img_006.png"} className="wp-90" alt="" /></div>
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

export default Page020;
