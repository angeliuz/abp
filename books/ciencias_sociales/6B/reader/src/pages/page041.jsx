import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import "./page_041.css";

function Page041(props) {
  const pagina = "041";
  var indexInput = 0;
  const etapa = "3"
  const background = "bgc-android18";
  const color = "color-android18";
  const colorSesion = "color-primary";
  const borderColor = "border-color-android18"
  const bgc_cajas = "bgc-goku";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>
          <img src={"images/cabecera/dosier_e" + etapa + ".svg"} className="w-100" alt="" />
          <div className="position-relative w-100 mbp-10">
            <div className="psp-80 pep-70 ptp-30 pbp-0 position-relative">
              <div className="fsp-16 f-Ubuntu-R text-start psp-50 pbp-10">Esta página fue completada por:</div>
              <div className={"psp-50 pep-50 ptp-5 pbp-5 bgc-white rounded-p-10 border-style-solid border-1 " + borderColor + " d-flex justify-content-center position-relative"}>
                <div className="position-absolute top-50 start-100 translate-middle wp-100 msp-0 mtp--10"><img src={"images/page_" + pagina + "/img_001.png"} className="w-50" alt="" /></div>
                <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp--10"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-80" alt="" /></div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
              </div>
            </div>
          </div>


          <div className="psp-80 pep-60 ptp-40">
            <div className="row w-100">
              <div className="col-12">
                <div className="bgc-white border-style-solid border-2 rounded-p-5 position-relative ptp-30 pbp-20">

                  <div className="d-flex psp-20 pep-20">
                    <div className="wp-30 mtp-5">
                      <div className="f-Ubuntu-B color-ron fsp-22">1</div>
                    </div>
                    <div className="w-100">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                    </div>
                  </div>

                  <div className="d-flex psp-20 pep-20">
                    <div className="wp-30 mtp-5">
                      <div className="f-Ubuntu-B color-ron fsp-22">2</div>
                    </div>
                    <div className="w-100">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                    </div>
                  </div>

                  <div className="d-flex psp-20 pep-20">
                    <div className="wp-30 mtp-5">
                      <div className="f-Ubuntu-B color-ron fsp-22">3</div>
                    </div>
                    <div className="w-100">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                    </div>
                  </div>

                  <div className="d-flex psp-20 pep-20">
                    <div className="wp-30 mtp-5">
                      <div className="f-Ubuntu-B color-ron fsp-22">4</div>
                    </div>
                    <div className="w-100">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                    </div>
                  </div>


                  <div className="position-absolute top-0 start-50 msp-0 mtp-0 translate-middle">
                    <div className="bgc-ron mnwp-400 color-white f-Ubuntu-B text-center px-3 py-2 rounded-p-20">
                    Pensamos que lo que hemos aprendido nos va a servir en nuestra ruta para:
 
                    </div>
                  </div>
                  <div className="position-absolute top-100 start-100 translate-middle msp-20  zindex-1 visible-768"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-90" alt="" /></div>
                </div>
              </div>
            </div>
          </div>

          <div className="psp-80 pep-60 ptp-40">
            <div className="row w-100">
              <div className="col-12">
                <div className="bgc-white border-style-solid border-2 rounded-p-5 position-relative ptp-30 pbp-20">

                  <div className="d-flex psp-20 pep-20">
                    <div className="wp-30 mtp-5">
                      <div className="f-Ubuntu-B color-bulma fsp-22">1</div>
                    </div>
                    <div className="w-100">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                    </div>
                  </div>

                  <div className="d-flex psp-20 pep-20">
                    <div className="wp-30 mtp-5">
                      <div className="f-Ubuntu-B color-bulma fsp-22">2</div>
                    </div>
                    <div className="w-100">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                    </div>
                  </div>

                  <div className="d-flex psp-20 pep-20">
                    <div className="wp-30 mtp-5">
                      <div className="f-Ubuntu-B color-bulma fsp-22">3</div>
                    </div>
                    <div className="w-100">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                    </div>
                  </div>

                  <div className="d-flex psp-20 pep-20">
                    <div className="wp-30 mtp-5">
                      <div className="f-Ubuntu-B color-bulma fsp-22">4</div>
                    </div>
                    <div className="w-100">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                    </div>
                  </div>


                  <div className="position-absolute top-0 start-50 msp-0 mtp-0 translate-middle">
                    <div className="bgc-bulma mnwp-400 color-white f-Ubuntu-B text-center px-3 py-2 rounded-p-20">
                      Pensamos que los siguientes conceptos son claves para los siguientes pasos del proyecto:
                    </div>
                  </div>
                  <div className="position-absolute top-100 start-0 translate-middle msp-0 mtp--30 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-70" alt="" /></div>
                </div>
              </div>
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
    </div>
  );
}

export default Page041;

