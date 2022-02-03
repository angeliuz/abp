import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import "./page_050.css";

function Page050(props) {

  const pagina = "050";
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

          <div className="ptp-10 container-titulo-global-1 mbp-0 mep-40">
            <div className="d-flex ptp-5 psp-70 align-items-top justify-content-start">
              <div className="text-start f-Ubuntu-B color-pidgey fsp-15">c.</div>
              <div className="text-start f-Ubuntu-L fsp-15 psp-5">Determinamos otras herramientas y materiales que necesitaremos.</div>
            </div>
          </div>

          <div className="d-flex global-margin mtp-10 mbp-10 psp-70 pep-30 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100 position-relative">
              <div className="position-absolute top-0 start-0 translate-middle"><img src="images/page_050/brocha.png" className="hp-100 msp-0 mtp-140" alt="" /></div>
              <div className="col-12 p-0 m-0 rounded-p-20 bgc-white border-style-solid border-color-dark border-1 p-2">
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-320" />
              </div>
            </div>
          </div>

          <div className={"mtp-20 border-top-style-solid " + borderColor + " border-2 pbp-20 position-relative " + bgc_cajas}>
            <div className="global-margin mtp-15 mbp-5 f-pixilate-bold fsp-18 lh-sm text-start psp-10">¿Cómo voy?</div>
            <div className="global-margin mbp-20 psp-20 pep-20 ptp-5 pbp-5 f-Ubuntu-L bgc-white fsp-15 rounded-p-10 ">
              <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mtp-10">
                <div className="d-flex">
                  <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 wp-15" alt="" />
                  <span className="w-24 f-Ubuntu-L fsp-14 text-start">Me gustaría aprender más sobre</span>
                </div>
              </div>
              <div className="pt-0 flex-grow-1 mbp-20">
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
              </div>
              <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mtp-10">
                <div className="d-flex">
                  <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 wp-15" alt="" />
                  <span className="w-24 f-Ubuntu-L fsp-14 text-start">Lo que mejor aprendo es lo relacionado con</span>
                </div>
              </div>
              <div className="pt-0 flex-grow-1 mbp-20">
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
              </div>
            </div>

            <div className="d-flex flex-column global-margin mtp-0 mbp-20 psp-0 pep-0 ptp-0 pbp-0">
              <div className="col-12">
                <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo me siento?</div>
                <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-30">
                  <div className="w-100 p-2 pb-3 bgc-white rounded-p-10">
                    <table className="w-100 text-start">
                      <span className="w-24 f-Ubuntu-L fsp-14 mtp-5 mbp-10 text-start">Marco con un <img src={"images/page_" + pagina + "/ticket.svg"} className="hp-17 mtp--2" alt="" /> el recuadro que mejor me represente.</span>

                      <tbody>
                        <tr>
                          <td>&nbsp;</td>
                          <td className={"style-caja " + background + " tf-letra border-style-solid border-1 " + borderColor + " f-colby-compres-bold ps-2 pe-2 text-white text-center"}>
                            Nunca</td>
                          <td style={{ minWidth: "55px" }} className={"style-caja " + background + " tf-letra  border-style-solid border-1 " + borderColor + " f-colby-compres-bold ps-2 pe-2 text-white text-center"}>
                            A veces</td>
                          <td className={"style-caja " + background + " tf-letra border-style-solid border-1 " + borderColor + " f-colby-compres-bold ps-2 pe-2 text-white text-center"}>
                            Generalmente</td>
                          <td className={"style-caja " + background + " tf-letra  border-style-solid border-1 " + borderColor + " f-colby-compres-bold ps-2 pe-2 text-white text-center"}>
                            Siempre</td>
                        </tr>
                        <tr>
                          <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-14 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Me siento tenso y nervioso cuando trabajo con mi equipo.</td>
                          <td className={"border-style-solid border-1 " + borderColor + ""}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                          <td className={"border-style-solid border-1 " + borderColor + ""}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                          <td className={"border-style-solid border-1 " + borderColor + ""}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                          <td className={"border-style-solid border-1 " + borderColor + ""}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                        </tr>
                        <tr>
                          <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-14 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Me asusta no hacer bien el trabajo y recibir críticas.</td>
                          <td className={"border-style-solid border-1 " + borderColor + ""}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                          <td className={"border-style-solid border-1 " + borderColor + ""}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                          <td className={"border-style-solid border-1 " + borderColor + ""}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                          <td className={"border-style-solid border-1 " + borderColor + ""}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                        </tr>
                      </tbody>
                    </table>
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

export default Page050;
