import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_052.css";

function Page052(props) {

  const pagina = "052";
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

          {/* BEGIN CABECERA VERSIÓN 1 */}
          <div className={"cabecera-v1 hp-80 " + background}></div>
          {/* END CABECERA VERSIÓN 1 */}


          <div className="ptp-10 psp-80 pep-80">
            <div className="d-flex">
              <div className="psp-10 f-ccdigitaldelivery-bold fsp-35 color-pidgey">3</div>
              <div className="f-Ubuntu-R fsp-15 ptp-18 psp-10 lh-sm text-start">Redactamos el documento con la propuesta, la revisamos y evaluamos.</div>
            </div>
          </div>

          <div className="ptp-10 psp-80 pep-80">
            <div className="row rounded-p-10 bgc-pantro p-3">

              <div className="row p-0 m-0 align-items-center position-relative">
                <div className="col p-2">
                  <div className="bgc-white w-100 rounded-p-5 p-2">
                    <div className="f-Ubuntu-L fsp-15 lh-sm pbp-10 text-start">Mis ideas para escribir la propuesta fueron</div>
                    <div className="mtp--10">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                    </div>
                  </div>
                </div>
                <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp-0  zindex-1"><img src={"images/page_" + pagina + "/nota.png"} className="wp-60" alt="" /></div>
              </div>

              <div className="row p-0 m-0 align-items-center">
                <div className="col-12 col-md-6 p-2 position-relative">
                  <div className="bgc-white w-100 rounded-p-5 p-2">
                    <div className="f-Ubuntu-L fsp-15 lh-sm pbp-10 text-start">Lo que más me gusta de la propuesta es</div>
                    <div className="">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-180" />
                    </div>
                  </div>
                  <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/lupa.png"} className="wp-60" alt="" /></div>
                  <div className="position-absolute flecha-p52 translate-middle zindex-1"><img src={"images/page_" + pagina + "/flecha.svg"} className="wp-20 giro-768" alt="" /></div>
                </div>

                <div className="col p-2">
                  <div className="bgc-white w-100 rounded-p-5 p-2">
                    <div className="f-Ubuntu-L fsp-15 lh-sm pbp-10 text-start">Porque</div>
                    <div className="">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-180" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row p-0 m-0 align-items-center position-relative">
                <div className="col-12 col-md-6 p-2 position-relative">
                  <div className="bgc-white w-100 rounded-p-5 p-2">
                    <div className="f-Ubuntu-L fsp-15 lh-sm pbp-10 text-start">Lo que menos me gusta de la propuesta es</div>
                    <div className="">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-180" />
                    </div>
                  </div>
                  <div className="position-absolute flecha-p52 translate-middle zindex-1"><img src={"images/page_" + pagina + "/flecha.svg"} className="wp-20 giro-768" alt="" /></div>

                </div>

                <div className="col p-2">
                  <div className="bgc-white w-100 rounded-p-5 p-2">
                    <div className="f-Ubuntu-L fsp-15 lh-sm pbp-10 text-start">Porque</div>
                    <div className="">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-180" />
                    </div>
                  </div>
                </div>
                <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/lapiz.png"} className="wp-40" alt="" /></div>
              </div>

            </div>
          </div>

          <div className="ptp-10 psp-80 pep-80">
            <div className="d-flex">
              <div className="psp-30 f-ccdigitaldelivery-bold fsp-35 color-pidgey">4</div>
              <div className="f-Ubuntu-R fsp-15 ptp-18 psp-10 lh-sm text-start">Presentamos la propuesta de alimentación saludable a los encargados del colegio y esperamos su aprobación.</div>
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

export default Page052;
