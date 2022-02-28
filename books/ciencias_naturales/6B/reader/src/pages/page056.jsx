import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";
import "./page_056.css";

function Page056(props) {

  const pagina = "056";
  var indexInput = 0;
  const etapa = "4"
  const background = "bgc-pidgey";
  const color = "color-pidgey";
  const borderColor = "border-color-pidgey"
  const bgc_cajas = "bgc-bison";
  const borderColorTabla = "border-color-pidgey"

  return (
    < div className="wrapper bgc-light" >
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>

          <div className="psp-60 pep-40 ptp-60">
            <div className="row w-100">

              <div className="col-md-6 position-relative pbp-40">
                <div className="bgc-white border-style-solid border-1 p-3 rounded-p-5">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-290" />
                </div>
                <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp-0">
                  <div className="bgc-bulma rounded-p-20 py-2 f-Ubuntu-M color-white psp-30 pep-30 mnwp-230">Lo más difícil ha sido</div>
                </div>
                <div className="position-absolute top-0 start-0 translate-middle msp-20 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-70" alt="" /></div>
              </div>

              <div className="col-md-6 position-relative pbp-40">
                <div className="bgc-white border-style-solid border-1 p-3 rounded-p-5">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-290" />
                </div>
                <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp-0">
                  <div className="bgc-android18 rounded-p-20 py-2 f-Ubuntu-M color-white psp-30 pep-30 mnwp-230">Lo más fácil ha sido</div>
                </div>
                <div className="position-absolute top-0 start-0 translate-middle msp-20 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-70" alt="" /></div>
              </div>

              <div className="col-12 position-relative">
                <div className="bgc-white border-style-solid border-1 p-3 rounded-p-5">
                  <div className="text-start">Incluiremos el video del prototipo en...</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                  <div className="text-start ptp-20">Para...</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                </div>
                <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-80" alt="" /></div>
              </div>

            </div>
          </div>

          <div className="d-flex flex-column global-margin mtp-0 mbp-20 psp-0 pep-80 ptp-20 pbp-20">
            <div className="col-12 position-relative">
              <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo vamos?</div>
              <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-30">
                {/* <span className="w-24 f-Ubuntu-L mtp-5 mbp-10">Marco con un <img src={"images/page_" + pagina + "/img_005.svg"} className="hp-17 mtp--2" alt="" /> el recuadro que mejor me represente.</span> */}
                <div className="w-100 p-2 pb-3 bgc-white rounded-p-10">
                  <table className="w-100">
                    <tbody>
                      <tr className="color-white">
                        <td>&nbsp;</td>
                        <td className={"style-caja " + background + " tf-letra border-style-solid border-1 " + borderColor + " f-colby-compres-bold ps-2 pe-2"}>
                          Nunca</td>
                        <td style={{ minWidth: "55px" }} className={"style-caja " + background + " tf-letra  border-style-solid border-1 " + borderColor + " f-colby-compres-bold ps-2 pe-2"}>
                          A veces</td>
                        <td className={"style-caja " + background + " tf-letra border-style-solid border-1 " + borderColor + " f-colby-compres-bold ps-2 pe-2"}>
                          Generalmente</td>
                        <td className={"style-caja " + background + " tf-letra  border-style-solid border-1 " + borderColor + " f-colby-compres-bold ps-2 pe-2"}>
                          Siempre</td>
                      </tr>
                      <tr>
                        <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-16 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Nos involucramos en el proyecto y nos responsabilizamos en la realización de las tareas.</td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                      </tr>
                      <tr>
                        <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-16 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Ante una petición de ayuda, dejamos de hacer otras cosas e intentamos ayudar antes de preguntarle al profesor.</td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                      </tr>
                      <tr>
                        <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-16 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Respetamos el turno de la palabra.</td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                      </tr>
                      <tr>
                        <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-16 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Llegamos a acuerdos y decisiones compartidas después de que cada uno da su opinión.</td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                        <td className={"border-style-solid border-1 " + borderColor + ""}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="position-absolute top-100 start-100 translate-middle msp-50 mtp--160 visible-768"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-140" alt="" /></div>
            </div>
          </div>


          {/* BEIGN PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
            <div className="bgc-goku wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          {/* END PIE DE PAGINA */}
        </div>
      </div>
    </div >
  );
}

export default Page056;
